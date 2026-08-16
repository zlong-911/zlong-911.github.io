(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("[data-vap-carousel]");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll("[data-vap-slide]"));
    const previousButton = carousel.querySelector("[data-vap-previous]");
    const nextButton = carousel.querySelector("[data-vap-next]");
    const status = carousel.querySelector("[data-vap-status]");
    const pageButtons = Array.from(carousel.querySelectorAll("[data-vap-page]"));
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

    const syncVideos = () => {
      slides.forEach((slide, index) => {
        slide.querySelectorAll("video").forEach((video) => {
          if (carousel.hidden || index !== currentPage) {
            video.pause();
          } else {
            video.play().catch(() => {});
          }
        });
      });
    };

    const updateStatus = () => {
      const language = document.documentElement.lang === "zh-CN" ? "zh" : "en";
      const label = slides[currentPage].dataset[`slideLabel${language === "zh" ? "Zh" : "En"}`];
      status.textContent = `${label} · ${currentPage + 1} / ${slides.length}`;
    };

    const showPage = (nextPage, direction = 1) => {
      const targetPage = Math.max(0, Math.min(slides.length - 1, nextPage));
      if (targetPage === currentPage) return;

      slides[currentPage].hidden = true;
      slides[targetPage].hidden = false;
      hydrateSlideMedia(slides[targetPage]);
      slides[targetPage].classList.remove("is-entering-forward", "is-entering-backward");
      void slides[targetPage].offsetWidth;
      slides[targetPage].classList.add(
        direction > 0 ? "is-entering-forward" : "is-entering-backward",
      );

      currentPage = targetPage;
      updateStatus();
      previousButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === slides.length - 1;
      pageButtons.forEach((button, index) => {
        button.setAttribute("aria-selected", String(index === currentPage));
      });
      syncVideos();
      window.dispatchEvent(new CustomEvent("vapcarouselchange", {
        detail: { page: currentPage },
      }));
    };

    previousButton.addEventListener("click", () => showPage(currentPage - 1, -1));
    nextButton.addEventListener("click", () => showPage(currentPage + 1, 1));
    pageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextPage = Number(button.dataset.vapPage);
        showPage(nextPage, nextPage > currentPage ? 1 : -1);
      });
    });

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showPage(currentPage - 1, -1);
      if (event.key === "ArrowRight") showPage(currentPage + 1, 1);
    });
    carousel.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
    }, { passive: true });
    carousel.addEventListener("touchend", (event) => {
      if (touchStartX === null || touchStartY === null) return;
      const deltaX = event.changedTouches[0].clientX - touchStartX;
      const deltaY = event.changedTouches[0].clientY - touchStartY;
      touchStartX = null;
      touchStartY = null;
      if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
      showPage(currentPage + (deltaX < 0 ? 1 : -1), deltaX < 0 ? 1 : -1);
    }, { passive: true });

    window.addEventListener("languagechange", updateStatus);
    window.addEventListener("vapmethodchange", syncVideos);
    new MutationObserver(syncVideos).observe(carousel, {
      attributes: true,
      attributeFilter: ["hidden"],
    });
    updateStatus();
    syncVideos();
  });
})();
