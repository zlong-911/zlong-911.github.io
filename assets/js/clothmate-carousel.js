(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("[data-clothmate-carousel]");
    if (!carousel) return;

    const slides = Array.from(
      carousel.querySelectorAll("[data-clothmate-slide]"),
    );
    const previousButton = carousel.querySelector("[data-clothmate-previous]");
    const nextButton = carousel.querySelector("[data-clothmate-next]");
    const status = carousel.querySelector("[data-clothmate-status]");
    const pageButtons = Array.from(
      carousel.querySelectorAll("[data-clothmate-page]"),
    );
    const videos = Array.from(carousel.querySelectorAll("video"));

    if (!slides.length || !previousButton || !nextButton || !status) return;

    let currentPage = 0;
    let touchStartX = null;
    let touchStartY = null;
    const hydrateSlideMedia = (slide) => {
      slide.querySelectorAll("video[data-deferred-poster]").forEach((video) => {
        video.poster = video.dataset.deferredPoster;
        delete video.dataset.deferredPoster;
      });
    };

    const syncPlayback = () => {
      videos.forEach((video) => {
        const isActive = slides[currentPage].contains(video);
        if (carousel.hidden || !isActive) {
          video.pause();
        } else {
          video.play().catch(() => {});
        }
      });
    };

    const showPage = (nextPage, direction = 1) => {
      const targetPage = Math.max(0, Math.min(slides.length - 1, nextPage));
      if (targetPage === currentPage) return;

      slides[currentPage].hidden = true;
      slides[targetPage].hidden = false;
      hydrateSlideMedia(slides[targetPage]);
      slides[targetPage].classList.remove(
        "is-entering-forward",
        "is-entering-backward",
      );
      void slides[targetPage].offsetWidth;
      slides[targetPage].classList.add(
        direction > 0 ? "is-entering-forward" : "is-entering-backward",
      );

      currentPage = targetPage;
      const label = slides[currentPage].dataset.slideLabel;
      status.textContent = `${label} · ${currentPage + 1} / ${slides.length}`;
      previousButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === slides.length - 1;

      pageButtons.forEach((button, index) => {
        button.setAttribute("aria-selected", String(index === currentPage));
      });

      syncPlayback();
    };

    previousButton.addEventListener("click", () => {
      showPage(currentPage - 1, -1);
    });

    nextButton.addEventListener("click", () => {
      showPage(currentPage + 1, 1);
    });

    pageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextPage = Number(button.dataset.clothmatePage);
        showPage(nextPage, nextPage > currentPage ? 1 : -1);
      });
    });

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showPage(currentPage - 1, -1);
      if (event.key === "ArrowRight") showPage(currentPage + 1, 1);
    });

    carousel.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].clientX;
        touchStartY = event.changedTouches[0].clientY;
      },
      { passive: true },
    );

    carousel.addEventListener(
      "touchend",
      (event) => {
        if (touchStartX === null || touchStartY === null) return;
        const deltaX = event.changedTouches[0].clientX - touchStartX;
        const deltaY = event.changedTouches[0].clientY - touchStartY;
        touchStartX = null;
        touchStartY = null;

        if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
        showPage(currentPage + (deltaX < 0 ? 1 : -1), deltaX < 0 ? 1 : -1);
      },
      { passive: true },
    );

    new MutationObserver(syncPlayback).observe(carousel, {
      attributes: true,
      attributeFilter: ["hidden"],
    });
  });
})();
