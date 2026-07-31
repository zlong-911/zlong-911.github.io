(() => {
  const sceneCounts = {
    1: 26,
    2: 16,
    3: 17,
    4: 13,
  };

  document.addEventListener("DOMContentLoaded", () => {
    const demo = document.querySelector("[data-real-inference-demo]");
    if (!demo) return;

    const toggleButton = document.querySelector("[data-real-inference-toggle]");
    const video = demo.querySelector(".real-inference-video");
    const sceneButtons = Array.from(demo.querySelectorAll("[data-scene]"));
    const previousButton = demo.querySelector("[data-instance-prev]");
    const nextButton = demo.querySelector("[data-instance-next]");
    const caption = demo.querySelector("[data-instance-caption]");
    const assetBase = demo.dataset.assetBase;

    if (!toggleButton || !video || sceneButtons.length === 0 || !previousButton || !nextButton || !caption || !assetBase) return;

    let currentScene = 1;
    let currentState = 1;
    let initialized = false;

    const pad = (value) => String(value).padStart(3, "0");

    function updateControls() {
      const count = sceneCounts[currentScene];
      caption.textContent = `Scene ${currentScene} · State ${String(currentState).padStart(2, "0")} / ${count}`;
      previousButton.disabled = currentState === 1;
      nextButton.disabled = currentState === count;

      sceneButtons.forEach((button) => {
        const isActive = Number(button.dataset.scene) === currentScene;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });
    }

    function updateMedia() {
      const caseName = `case_${pad(currentState)}`;
      const scenePath = `${assetBase}/static`;

      video.pause();
      video.poster = `${scenePath}/images/real_inference_frames/scene_${currentScene}/${caseName}.jpg?v=unified-grasp-v1`;
      video.src = `${scenePath}/videos/real_inference/scene_${currentScene}/${caseName}.mp4?v=unified-grasp-v1`;
      video.load();
      updateControls();
    }

    toggleButton.addEventListener("click", () => {
      const willOpen = demo.hidden;
      demo.hidden = !willOpen;
      toggleButton.setAttribute("aria-expanded", String(willOpen));
      toggleButton.classList.toggle("is-active", willOpen);
      toggleButton.textContent = willOpen ? "Hide Predictions" : "Explore Predictions";

      if (willOpen && !initialized) {
        initialized = true;
        updateMedia();
      }

      if (!willOpen) video.pause();
    });

    sceneButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentScene = Number(button.dataset.scene);
        currentState = 1;
        updateMedia();
      });
    });

    previousButton.addEventListener("click", () => {
      currentState = Math.max(1, currentState - 1);
      updateMedia();
    });

    nextButton.addEventListener("click", () => {
      currentState = Math.min(sceneCounts[currentScene], currentState + 1);
      updateMedia();
    });

    updateControls();
  });
})();
