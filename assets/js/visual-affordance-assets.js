(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("[data-vap-method-card='3'] video");
    const previousButtons = Array.from(document.querySelectorAll("[data-vap-asset-previous]"));
    const nextButtons = Array.from(document.querySelectorAll("[data-vap-asset-next]"));
    const statusElements = Array.from(document.querySelectorAll("[data-vap-teacher-asset-status], [data-vap-policy-asset-status]"));
    if (!video || !previousButtons.length || !nextButtons.length || !statusElements.length) return;

    const assetCount = 8;
    const remoteBase = "https://garment-affordance-review.github.io/unfold-all-anonymous/static/videos/visual_pair_policy";
    let currentAsset = 0;

    const updateStatus = () => {
      const isChinese = document.documentElement.lang === "zh-CN";
      const label = isChinese
        ? `样本 ${currentAsset + 1} / ${assetCount}`
        : `Asset ${currentAsset + 1} / ${assetCount}`;
      statusElements.forEach((element) => {
        element.textContent = label;
      });
    };

    const updatePolicyVideo = () => {
      video.pause();
      video.src = currentAsset === 0
        ? "/files/visual-affordance-method/a1_a2_asset_1.mp4"
        : `${remoteBase}/a1_a2_asset_${currentAsset + 1}.mp4?v=method-assets-8-v1`;
      video.load();
      const details = document.querySelector("[data-real-inference-demo]");
      const methodSlide = video.closest("[data-vap-slide]");
      if ((!details || !details.hidden) && (!methodSlide || !methodSlide.hidden)) {
        video.play().catch(() => {});
      }
    };

    const selectAsset = (nextAsset, dispatch = true) => {
      currentAsset = (nextAsset + assetCount) % assetCount;
      updatePolicyVideo();
      updateStatus();
      if (dispatch) {
        window.dispatchEvent(new CustomEvent("methodAssetChange", {
          detail: { index: currentAsset, source: "asset-controls" },
        }));
      }
    };

    previousButtons.forEach((button) => {
      button.addEventListener("click", () => selectAsset(currentAsset - 1));
    });
    nextButtons.forEach((button) => {
      button.addEventListener("click", () => selectAsset(currentAsset + 1));
    });
    window.addEventListener("methodAssetChange", (event) => {
      if (!event.detail || event.detail.source === "asset-controls") return;
      selectAsset(Number(event.detail.index) || 0, false);
    });
    window.addEventListener("languagechange", updateStatus);
    updateStatus();
  });
})();
