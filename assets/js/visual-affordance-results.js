(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("[data-vap-inference-video]");
    const sceneButtons = Array.from(document.querySelectorAll("[data-vap-inference-scene]"));
    const previousButton = document.querySelector("[data-vap-instance-previous]");
    const nextButton = document.querySelector("[data-vap-instance-next]");
    const status = document.querySelector("[data-vap-instance-status]");
    if (!video || !sceneButtons.length || !previousButton || !nextButton || !status) return;

    const groupCounts = { 1: 6, 2: 4, 3: 4, 4: 3 };
    const cachedVideos = new Map();
    const pendingVideos = new Map();
    let currentScene = 1;
    let currentGroup = 0;
    let hasLoaded = false;

    const isVisible = () => {
      const details = video.closest("[data-real-inference-demo]");
      const slide = video.closest("[data-vap-slide]");
      return (!details || !details.hidden) && (!slide || !slide.hidden);
    };

    const groupName = (scene, group) => `scene-${scene}-group-${group + 1}`;
    const groupUrl = (scene, group) => (
      `/files/visual-affordance-results/inference-grids/${groupName(scene, group)}.mp4`
    );

    const preloadGroup = (scene, group) => {
      if (group < 0 || group >= groupCounts[scene]) return;
      const key = groupName(scene, group);
      if (cachedVideos.has(key) || pendingVideos.has(key)) return;
      const request = fetch(groupUrl(scene, group), { cache: "force-cache" })
        .then((response) => {
          if (!response.ok) throw new Error(`Unable to preload ${key}`);
          return response.blob();
        })
        .then((blob) => {
          cachedVideos.set(key, URL.createObjectURL(blob));
          pendingVideos.delete(key);
        })
        .catch(() => pendingVideos.delete(key));
      pendingVideos.set(key, request);
    };

    const warmNearbyGroups = () => {
      preloadGroup(currentScene, currentGroup - 1);
      preloadGroup(currentScene, currentGroup + 1);
      Object.keys(groupCounts).forEach((scene) => {
        if (Number(scene) !== currentScene) preloadGroup(Number(scene), 0);
      });
    };

    const updateStatus = () => {
      const start = currentGroup * 4;
      const first = String(start + 1).padStart(2, "0");
      const last = String(start + 4).padStart(2, "0");
      const visibleCount = groupCounts[currentScene] * 4;
      status.textContent = document.documentElement.lang === "zh-CN"
        ? `场景 ${currentScene} · 实例 ${first}–${last} / ${visibleCount}`
        : `Scene ${currentScene} · Instances ${first}–${last} / ${visibleCount}`;
      video.setAttribute("aria-label", `Real-world inference instances ${first} to ${last}`);
      previousButton.disabled = currentGroup === 0;
      nextButton.disabled = currentGroup === groupCounts[currentScene] - 1;
    };

    const loadGroup = () => {
      const group = currentGroup + 1;
      const name = groupName(currentScene, currentGroup);
      video.pause();
      video.poster = `/images/visual-affordance-priors/results/inference-grids/${name}.webp`;
      video.src = cachedVideos.get(name) || groupUrl(currentScene, currentGroup);
      video.load();
      video.addEventListener("canplay", warmNearbyGroups, { once: true });
      updateStatus();
      hasLoaded = true;
      if (isVisible()) video.play().catch(() => {});
    };

    const selectScene = (scene) => {
      currentScene = Number(scene) || 1;
      currentGroup = 0;
      sceneButtons.forEach((button) => {
        const isActive = button.dataset.vapInferenceScene === String(currentScene);
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      loadGroup();
    };

    sceneButtons.forEach((button) => {
      button.addEventListener("click", () => selectScene(button.dataset.vapInferenceScene));
    });
    previousButton.addEventListener("click", () => {
      currentGroup = Math.max(0, currentGroup - 1);
      loadGroup();
    });
    nextButton.addEventListener("click", () => {
      currentGroup = Math.min(groupCounts[currentScene] - 1, currentGroup + 1);
      loadGroup();
    });
    window.addEventListener("languagechange", updateStatus);
    window.addEventListener("vapcarouselchange", (event) => {
      if (event.detail?.page !== 1) return;
      if (hasLoaded) {
        video.play().catch(() => {});
      } else {
        loadGroup();
      }
    });
    updateStatus();
  });
})();
