(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const stage = document.querySelector("[data-vap-teacher]");
    const canvas = document.querySelector("[data-vap-teacher-canvas]");
    const caption = document.querySelector("[data-vap-teacher-caption]");
    if (!stage || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
      [37, 99, 235],
      [20, 184, 166],
      [250, 204, 21],
      [239, 68, 68],
    ];
    let teacherData = null;
    let assetIndex = 0;
    let anchorIndex = 0;
    let timer = null;
    let initialized = false;

    const mix = (a, b, t) => a + (b - a) * t;

    function colorFor(value) {
      const t = Math.max(0, Math.min(1, value));
      const scaled = t * (colors.length - 1);
      const index = Math.min(colors.length - 2, Math.floor(scaled));
      const local = scaled - index;
      const c0 = colors[index];
      const c1 = colors[index + 1];
      return `rgb(${mix(c0[0], c1[0], local)}, ${mix(c0[1], c1[1], local)}, ${mix(c0[2], c1[2], local)})`;
    }

    function resize() {
      const rect = stage.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }

    function project(points, width, height) {
      const xs = points.map((point) => point[0]);
      const ys = points.map((point) => point[1]);
      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);
      const scale = Math.min(
        (width * 0.74) / (maxX - minX || 1),
        (height * 0.58) / (maxY - minY || 1),
      );
      const cx = width / 2 - ((minX + maxX) / 2) * scale;
      const cy = height * 0.43 + ((minY + maxY) / 2) * scale;

      return points.map((point) => ({
        x: point[0] * scale + cx,
        y: -point[1] * scale + cy,
      }));
    }

    function normalize(values) {
      const min = Math.min(...values);
      const max = Math.max(...values);
      return values.map((value) => (value - min) / (max - min + 1e-6));
    }

    function draw() {
      if (!teacherData || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width < 2 || height < 2) return;

      const asset = teacherData.assets[assetIndex];
      const anchor = asset.anchors[anchorIndex];
      const points = project(asset.points, width, height);
      const values = normalize(anchor.scores);
      const anchorPoint = points[anchor.index];

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(37, 99, 235, 0.45)";
      anchor.topPairs.slice(0, 12).forEach((pair) => {
        const target = points[pair.j];
        ctx.beginPath();
        ctx.moveTo(anchorPoint.x, anchorPoint.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
      });

      points.forEach((point, index) => {
        ctx.fillStyle = colorFor(values[index]);
        ctx.globalAlpha = 0.86;
        ctx.fillRect(point.x - 1.6, point.y - 1.6, 3.2, 3.2);
      });
      ctx.globalAlpha = 1;

      anchor.topPairs.slice(0, 6).forEach((pair, index) => {
        const point = points[pair.j];
        ctx.fillStyle = index === 0 ? "#f97316" : "#2563eb";
        ctx.beginPath();
        ctx.arc(point.x, point.y, index === 0 ? 5.2 : 4.2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = "#dc2626";
      ctx.beginPath();
      ctx.arc(anchorPoint.x, anchorPoint.y, 5.8, 0, Math.PI * 2);
      ctx.fill();

      const best = anchor.topPairs[0];
      if (caption && best) {
        caption.textContent = `Current best predicted pair: x1 point ${anchor.index}, x2 point ${best.j}, reward ${best.score.toFixed(3)}.`;
      }
    }

    function step() {
      if (!teacherData) return;
      const asset = teacherData.assets[assetIndex];
      anchorIndex += 1;
      if (anchorIndex >= asset.anchors.length) {
        anchorIndex = 0;
        assetIndex = (assetIndex + 1) % teacherData.assets.length;
      }
      draw();
    }

    function initialize() {
      if (initialized) return;
      initialized = true;
      fetch("/assets/data/pair_value_teacher_demo.json")
        .then((response) => response.json())
        .then((data) => {
          teacherData = data;
          resize();
          timer = window.setInterval(step, 1800);
        })
        .catch(() => {
          if (caption) caption.textContent = "Pair-value teacher preview failed to load.";
        });
    }

    if (window.ResizeObserver) {
      new ResizeObserver(resize).observe(stage);
    } else {
      window.addEventListener("resize", resize);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && timer) {
        window.clearInterval(timer);
        timer = null;
      } else if (!document.hidden && !timer) {
        timer = window.setInterval(step, 1800);
      }
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
