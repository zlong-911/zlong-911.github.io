(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const videos = Array.from(document.querySelectorAll("video[data-viewport-autoplay]"));
    if (!videos.length) return;

    const syncVideo = (video, shouldPlay) => {
      if (shouldPlay && document.visibilityState === "visible") {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    if (!("IntersectionObserver" in window)) {
      videos.forEach((video) => syncVideo(video, true));
      return;
    }

    const visibleVideos = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleVideos.add(entry.target);
          } else {
            visibleVideos.delete(entry.target);
          }
          syncVideo(entry.target, entry.isIntersecting);
        });
      },
      { rootMargin: "120px 0px", threshold: 0.1 },
    );

    videos.forEach((video) => observer.observe(video));
    document.addEventListener("visibilitychange", () => {
      videos.forEach((video) => syncVideo(video, visibleVideos.has(video)));
    });
  });
})();
