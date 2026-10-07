(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const videos = Array.from(document.querySelectorAll("video[data-viewport-autoplay]"));

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
      { threshold: 0.1 },
    );

    videos.forEach((video) => observer.observe(video));
    // Warm only the metadata of manual players as they approach the screen.
    // Fast-start MP4s keep that request small, without fetching hidden chapters.
    const warmed = new WeakSet();
    const warmObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target: video, isIntersecting }) => {
        if (!isIntersecting || warmed.has(video)) return;
        warmed.add(video);
        if (video.preload === "none" && video.readyState === 0) {
          video.preload = "metadata";
          video.load();
        }
      });
    }, { rootMargin: "200px 0px" });
    document.querySelectorAll("video[controls]:not([data-viewport-autoplay])")
      .forEach((video) => warmObserver.observe(video));
    const manualVideos = Array.from(document.querySelectorAll(
      ".work-video:not([data-viewport-autoplay]), .clothdojo-clip",
    ));
    const pauseObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target: video, isIntersecting }) => {
        if (!isIntersecting && !video.paused) video.pause();
      });
    }, { threshold: 0.01 });
    manualVideos.forEach((video) => pauseObserver.observe(video));
    document.addEventListener("visibilitychange", () => {
      videos.forEach((video) => syncVideo(video, visibleVideos.has(video)));
      if (document.hidden) manualVideos.forEach((video) => video.pause());
    });
  });
})();
