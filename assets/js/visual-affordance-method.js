(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const stage = document.querySelector("[data-vap-teacher]");
    const canvas = document.querySelector("[data-vap-teacher-canvas]");
    if (!stage || !canvas) return;

    const state = {
      data: null,
      assetIndex: 0,
      anchorIndex: 0,
      cameraZ: 2.8,
      dragging: false,
      moved: false,
      lastX: 0,
      lastY: 0,
      initialized: false,
      pendingResizeObserver: null,
      scene: null,
      camera: null,
      renderer: null,
      group: null,
      pointsObject: null,
      raycaster: null,
      pointer: null,
    };

    const colorStops = [
      [37, 99, 235],
      [20, 184, 166],
      [250, 204, 21],
      [239, 68, 68],
    ];

    function setStageMessage(message) {
      stage.dataset.message = message;
      stage.classList.toggle("is-loading", Boolean(message));
    }

    function colorFor(value) {
      const clamped = Math.max(0, Math.min(1, value));
      const scaled = clamped * (colorStops.length - 1);
      const index = Math.min(colorStops.length - 2, Math.floor(scaled));
      const local = scaled - index;
      const a = colorStops[index];
      const b = colorStops[index + 1];
      return [
        (a[0] + (b[0] - a[0]) * local) / 255,
        (a[1] + (b[1] - a[1]) * local) / 255,
        (a[2] + (b[2] - a[2]) * local) / 255,
      ];
    }

    function normalizeScores(scores) {
      const min = Math.min(...scores);
      const max = Math.max(...scores);
      return scores.map((score) => (score - min) / (max - min + 1e-6));
    }

    function currentAsset() {
      return state.data.assets[state.assetIndex];
    }

    function currentAnchor() {
      return currentAsset().anchors[state.anchorIndex];
    }

    function render() {
      if (!state.renderer || !state.scene || !state.camera) return;
      state.camera.position.z = state.cameraZ;
      state.renderer.render(state.scene, state.camera);
    }

    function resize() {
      if (!state.renderer || !state.camera) return;
      const rect = stage.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      state.camera.aspect = rect.width / rect.height;
      state.camera.updateProjectionMatrix();
      state.renderer.setSize(rect.width, rect.height, false);
      render();
    }

    function clearGroup() {
      if (!state.group) return;
      while (state.group.children.length > 0) {
        const child = state.group.children.pop();
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      }
      state.pointsObject = null;
    }

    function addMarker(point, color, radius) {
      const geometry = new THREE.SphereGeometry(radius, 16, 12);
      const material = new THREE.MeshBasicMaterial({ color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(point[0], point[1], point[2]);
      state.group.add(mesh);
    }

    function updateScene() {
      if (!state.data || !state.group) return;
      const asset = currentAsset();
      const anchor = currentAnchor();
      const normalized = normalizeScores(anchor.scores);

      clearGroup();

      const positions = new Float32Array(asset.points.length * 3);
      const colors = new Float32Array(asset.points.length * 3);
      asset.points.forEach((point, index) => {
        positions.set(point, index * 3);
        colors.set(colorFor(normalized[index]), index * 3);
      });

      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      state.pointsObject = new THREE.Points(
        pointGeometry,
        new THREE.PointsMaterial({
          size: 0.062,
          sizeAttenuation: true,
          vertexColors: true,
        }),
      );
      state.group.add(state.pointsObject);

      const anchorPoint = asset.points[anchor.index];
      const linePositions = [];
      anchor.topPairs.slice(0, 12).forEach((pair) => {
        const target = asset.points[pair.j];
        linePositions.push(anchorPoint[0], anchorPoint[1], anchorPoint[2], target[0], target[1], target[2]);
      });
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
      state.group.add(
        new THREE.LineSegments(
          lineGeometry,
          new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.6 }),
        ),
      );

      addMarker(anchorPoint, 0xdc2626, 0.034);
      anchor.topPairs.slice(0, 6).forEach((pair, index) => {
        addMarker(asset.points[pair.j], index === 0 ? 0xf97316 : 0x2563eb, index === 0 ? 0.028 : 0.023);
      });

      render();
    }

    function initThree() {
      if (!window.THREE) {
        setStageMessage("Point cloud renderer failed to load.");
        return false;
      }

      state.scene = new THREE.Scene();
      state.scene.background = new THREE.Color(0xffffff);
      state.camera = new THREE.PerspectiveCamera(30, 1, 0.01, 20);
      state.camera.position.set(0, 0, state.cameraZ);
      state.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
      state.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      state.group = new THREE.Group();
      state.scene.add(state.group);
      state.raycaster = new THREE.Raycaster();
      state.raycaster.params.Points.threshold = 0.035;
      state.pointer = new THREE.Vector2();

      const grid = new THREE.GridHelper(1.35, 14, 0xd1d5db, 0xe5e7eb);
      grid.rotation.x = Math.PI / 2;
      grid.position.z = -0.34;
      state.scene.add(grid);
      resize();
      return true;
    }

    function setAnchor(index) {
      if (!state.data) return;
      const asset = currentAsset();
      state.anchorIndex = (index + asset.anchors.length) % asset.anchors.length;
      updateScene();
    }

    function setAsset(index) {
      if (!state.data) return;
      state.assetIndex = (index + state.data.assets.length) % state.data.assets.length;
      state.anchorIndex = 0;
      updateScene();
    }

    function pickPoint(event) {
      if (!state.pointsObject || !state.raycaster || !state.pointer || !state.camera) return -1;
      const rect = canvas.getBoundingClientRect();
      state.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      state.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      state.raycaster.setFromCamera(state.pointer, state.camera);
      const hits = state.raycaster.intersectObject(state.pointsObject, false);
      return hits.length ? hits[0].index : -1;
    }

    function nearestAnchorIndex(pointIndex) {
      const asset = currentAsset();
      const clicked = asset.points[pointIndex];
      let bestIndex = 0;
      let bestDistance = Infinity;
      asset.anchors.forEach((anchor, index) => {
        const point = asset.points[anchor.index];
        const distance = (point[0] - clicked[0]) ** 2 + (point[1] - clicked[1]) ** 2 + (point[2] - clicked[2]) ** 2;
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });
      return bestIndex;
    }

    function initialize() {
      if (state.initialized) return;
      state.initialized = true;
      setStageMessage("Loading pair-value field...");
      if (!initThree()) return;

      fetch("/assets/data/pair_value_teacher_demo.json")
        .then((response) => response.json())
        .then((data) => {
          state.data = data;
          setStageMessage("");
          updateScene();
          if (window.ResizeObserver) {
            state.pendingResizeObserver = new ResizeObserver(resize);
            state.pendingResizeObserver.observe(stage);
          } else {
            window.addEventListener("resize", resize);
          }
        })
        .catch(() => {
          setStageMessage("Pair-value teacher data failed to load.");
        });
    }

    canvas.addEventListener("pointerdown", (event) => {
      if (!state.group) return;
      state.dragging = true;
      state.moved = false;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
    });

    canvas.addEventListener("pointermove", (event) => {
      if (!state.dragging || !state.group) return;
      const dx = event.clientX - state.lastX;
      const dy = event.clientY - state.lastY;
      if (Math.abs(dx) + Math.abs(dy) > 2) state.moved = true;
      state.group.rotation.z += dx * 0.008;
      state.group.rotation.x = Math.max(-1.45, Math.min(1.1, state.group.rotation.x + dy * 0.008));
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      render();
    });

    canvas.addEventListener("pointerup", (event) => {
      state.dragging = false;
      if (state.moved || !state.data) return;
      const point = pickPoint(event);
      if (point >= 0) setAnchor(nearestAnchorIndex(point));
    });

    canvas.addEventListener("pointerleave", () => {
      state.dragging = false;
    });

    canvas.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        state.cameraZ *= event.deltaY > 0 ? 1.08 : 0.92;
        state.cameraZ = Math.max(1.25, Math.min(3.5, state.cameraZ));
        render();
      },
      { passive: false },
    );

    window.addEventListener("methodAssetChange", (event) => {
      if (!event.detail || event.detail.source === "teacher") return;
      setAsset(Number(event.detail.index) || 0);
    });

    const details = document.querySelector("[data-real-inference-demo]");
    const toggle = document.querySelector("[data-real-inference-toggle]");
    if (details && !details.hidden) initialize();
    if (toggle) {
      toggle.addEventListener("click", () => {
        if (details && !details.hidden) initialize();
      });
    }
  });
})();
