(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("[data-clothdojo-toggle]");
    const details = document.querySelector("[data-clothdojo-details]");
    const fullVideo = document.querySelector("#clothdojo-video");
    if (!toggle || !details || !fullVideo) return;

    const slides = Array.from(details.querySelectorAll("[data-clothdojo-slide]"));
    const clips = Array.from(details.querySelectorAll(".clothdojo-clip"));
    const comparisons = Array.from(details.querySelectorAll("[data-clothdojo-comparison]"));
    const focusViews = Array.from(details.querySelectorAll("[data-clothdojo-focus]"));
    const assetGallery = details.querySelector("[data-clothdojo-asset-gallery]");
    const datasetTiles = Array.from(details.querySelectorAll("[data-clothdojo-rgb-tile]"));
    const pages = Array.from(details.querySelectorAll("[data-clothdojo-page]"));
    const previous = details.querySelector("[data-clothdojo-previous]");
    const next = details.querySelector("[data-clothdojo-next]");
    const status = details.querySelector("[data-clothdojo-status]");
    let current = 0;
    let touchStart = null;
    const datasetTracks = [];
    // Start tiles as a group. Native playback reaches each actual final frame;
    // buffering pauses the group, and only all-ended playback may restart.
    let rgbInViewport = true;
    let rgbHoldStarted = null;
    // The clips run at 8 fps; one check per frame avoids a 60 Hz polling loop.
    let rgbFrame = null;
    const pendingRgbPlay = new WeakSet();
    const pauseRgb = () => {
      datasetTiles.forEach((video) => { if (!video.paused) video.pause(); });
      rgbHoldStarted = null;
      if (rgbFrame !== null) clearTimeout(rgbFrame);
      rgbFrame = null;
    };
    const tickRgb = (now) => {
      rgbFrame = null;
      if (details.hidden || current !== 0 || document.hidden || !rgbInViewport) {
        pauseRgb();
        return;
      }
      const ready = datasetTiles.every((video) =>
        Number.isFinite(video.duration) && video.duration > 0 &&
        (video.ended || (video.readyState >= 3 && !video.seeking)));
      if (!ready) {
        datasetTiles.forEach((video) => { if (!video.paused) video.pause(); });
        rgbHoldStarted = null;
      } else if (datasetTiles.every((video) => video.ended)) {
        // Only actual ended events qualify. Timer delays never skip footage.
        if (rgbHoldStarted === null) rgbHoldStarted = now;
        if (now - rgbHoldStarted >= 2000) {
          datasetTiles.forEach((video) => { video.currentTime = 0; });
          rgbHoldStarted = null;
        }
      } else {
        rgbHoldStarted = null;
        const unfinished = datasetTiles.filter((video) => !video.ended);
        const groupTime = Math.min(...unfinished.map((video) => video.currentTime));
        datasetTiles.forEach((video) => {
          // Pause an advancing tile to let a delayed tile catch up; never seek
          // forward past footage. Ended short clips keep their final frame.
          if (!video.ended && video.currentTime > groupTime + 0.25) {
            if (!video.paused) video.pause();
          } else if (!video.ended && video.paused && !pendingRgbPlay.has(video)) {
            pendingRgbPlay.add(video);
            video.play().catch(() => {}).finally(() => pendingRgbPlay.delete(video));
          }
        });
      }
      rgbFrame = setTimeout(() => tickRgb(performance.now()), 125);
    };
    const syncRgb = () => {
      if (details.hidden || current !== 0 || document.hidden || !rgbInViewport) pauseRgb();
      else if (rgbFrame === null && datasetTiles.every((video) => video.getAttribute("src"))) {
        datasetTiles.forEach((video) => {
          if (video.preload !== "auto") {
            video.preload = "auto";
            video.load();
          }
        });
        rgbFrame = setTimeout(() => tickRgb(performance.now()), 125);
      }
    };
    document.addEventListener("visibilitychange", syncRgb);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        rgbInViewport = entry.isIntersecting;
        syncRgb();
      }, { rootMargin: "100px 0px" }).observe(details.querySelector("[data-clothdojo-rgb-dataset]"));
    }

    let galleryInitialized = false;
    const initializeGallery = () => {
      if (!assetGallery || galleryInitialized) return;
      galleryInitialized = true;
      const canvas = assetGallery.querySelector("[data-clothdojo-asset-canvas]");
      const context = canvas.getContext("2d");
      const randomAsset = assetGallery.querySelector("[data-clothdojo-asset-random]");
      const randomRgb = details.querySelector("[data-clothdojo-rgb-random]");
      const master = new Image();
      let assetDeck = [];
      const rolloutDecks = { flatten: [], fold: [] };
      const takeRandom = (items, count) => {
        const choices = [...items];
        for (let index = 0; index < Math.min(count, choices.length); index += 1) {
          const swap = index + Math.floor(Math.random() * (choices.length - index));
          [choices[index], choices[swap]] = [choices[swap], choices[index]];
        }
        return choices.slice(0, count);
      };
      const drawRollouts = (task, count) => {
        const pool = datasetTracks.filter(([, version]) => version.startsWith(`${task}_`));
        if (rolloutDecks[task].length < count) {
          const remaining = rolloutDecks[task];
          rolloutDecks[task] = [...remaining, ...takeRandom(
            pool.filter((entry) => !remaining.includes(entry)), pool.length - remaining.length)];
        }
        return rolloutDecks[task].splice(0, count);
      };
      const sampleAssets = () => {
        if (assetDeck.length < 15) {
          const remaining = assetDeck;
          const next = takeRandom(Array.from({ length: 500 }, (_, index) => index)
            .filter((index) => !remaining.includes(index)), 500 - remaining.length);
          assetDeck = [...remaining, ...next];
        }
        const assets = assetDeck.splice(0, 15);
        context.clearRect(0, 0, canvas.width, canvas.height);
        assets.forEach((assetIndex, slot) => {
          const row = Math.floor(assetIndex / 25);
          const column = assetIndex % 25;
          context.drawImage(master,
            200 + column * 304, Math.round(112 + row * 213.8), 304, 213,
            (slot % 5) * 304, Math.floor(slot / 5) * 213, 304, 213);
        });
      };
      const sampleRollouts = () => {
        const flatten = drawRollouts("flatten", 6);
        const fold = drawRollouts("fold", 6);
        pauseRgb();
        rgbHoldStarted = null;
        datasetTiles.forEach((tile, slot) => {
          const taskSlot = Math.floor(slot / 4) * 2 + slot % 2;
          const version = (slot % 4 < 2 ? flatten : fold)[taskSlot][1];
          tile.dataset.version = version;
          tile.poster = `/images/clothdojo/dataset-rgb/${version}.jpg`;
          tile.preload = "none";
          tile.src = `/files/clothdojo/dataset-rgb-complete/${version}.mp4`;
          tile.muted = true;
          tile.load();
          tile.setAttribute("aria-label", `${slot % 4 < 2 ? "Flattening" : "Folding"} RGB trajectory ${version}`);
        });
        syncRgb();
      };
      master.onload = () => {
        sampleAssets();
        randomAsset.disabled = false;
      };
      master.src = "/images/clothdojo/assets/master-500.webp";
      randomAsset.addEventListener("click", sampleAssets);
      randomRgb.addEventListener("click", sampleRollouts);
      fetch("/assets/data/clothdojo-rgb-complete-pool.json")
        .then((response) => {
          if (!response.ok) throw new Error(`RGB pool request failed: ${response.status}`);
          return response.json();
        })
        .then((records) => {
          records.forEach(({ name }) => {
            if (/^(flatten|fold)_(?:rand_[A-Z0-9]+|episode)_\d{6}$/.test(name)) datasetTracks.push([null, name]);
          });
        })
        .then(() => {
          if (datasetTracks.filter(([, name]) => name.startsWith("flatten_")).length < 6 ||
              datasetTracks.filter(([, name]) => name.startsWith("fold_")).length < 6) {
            throw new Error("RGB pool has fewer than six trajectories per task");
          }
          sampleRollouts();
          randomRgb.disabled = false;
        })
        .catch((error) => console.error("RGB trajectories are unavailable", error));
    };
    if (!details.hidden) initializeGallery();

    const updateLanguage = () => {
      const chinese = document.documentElement.lang === "zh-CN";
      const label = chinese ? "详情" : "Details";
      toggle.innerHTML = `${label} <span aria-hidden="true">${details.hidden ? "↓" : "↑"}</span>`;
      const slideLabel = slides[current].dataset[chinese ? "slideLabelZh" : "slideLabelEn"];
      status.textContent = `${slideLabel} · ${current + 1} / ${slides.length}`;
      pages.forEach((page, index) => page.setAttribute("aria-label",
        slides[index].dataset[chinese ? "slideLabelZh" : "slideLabelEn"]));
      focusViews.forEach((view) => {
        const family = view.dataset.focusFamily;
        view.querySelector(".clothdojo-focus__conditions").setAttribute("aria-label",
          chinese ? (family === "retarget" ? "选择任务" : family === "augmentation" ? "选择 NOCS 或镜像增强" : "选择衣物与外观条件")
            : (family === "retarget" ? "Choose task" : family === "augmentation" ? "Choose NOCS or mirror augmentation" : "Choose garment and appearance condition"));
        view.querySelector(".clothdojo-focus__methods").setAttribute("aria-label",
          chinese ? (family === "retarget" ? "选择机器人" : family === "augmentation" ? "选择任务" : "选择策略")
            : (family === "retarget" ? "Choose robot" : family === "augmentation" ? "Choose task" : "Choose policy"));
        const selectedCondition = view.querySelector("[data-focus-condition][aria-selected='true']");
        const selectedMethod = view.querySelector("[data-focus-method][aria-selected='true']");
        const ownSlide = view.closest("[data-clothdojo-slide]");
        view.querySelector("video").setAttribute("aria-label",
          `${ownSlide.dataset[chinese ? "slideLabelZh" : "slideLabelEn"]}: ${selectedCondition.textContent}, ${selectedMethod.textContent}`);
      });
    };

    const showPage = (index) => {
      if (index < 0 || index >= slides.length || index === current) return;
      slides[current].querySelectorAll("video").forEach((clip) => clip.pause());
      slides[current].hidden = true;
      current = index;
      slides[current].hidden = false;
      syncRgb();
      previous.disabled = current === 0;
      next.disabled = current === slides.length - 1;
      pages.forEach((page, pageIndex) => {
        page.setAttribute("aria-selected", String(pageIndex === current));
      });
      updateLanguage();
    };

    toggle.addEventListener("click", () => {
      details.hidden = !details.hidden;
      toggle.setAttribute("aria-expanded", String(!details.hidden));
      toggle.classList.toggle("is-active", !details.hidden);
      if (!details.hidden) initializeGallery();
      if (details.hidden) clips.forEach((clip) => clip.pause());
      syncRgb();
      updateLanguage();
    });
    previous.addEventListener("click", () => showPage(current - 1));
    next.addEventListener("click", () => showPage(current + 1));
    pages.forEach((page, index) => page.addEventListener("click", () => showPage(index)));
    comparisons.forEach((comparison) => {
      const buttons = Array.from(comparison.querySelectorAll("[data-comparison-button]"));
      const panels = Array.from(comparison.querySelectorAll("[data-comparison-panel]"));
      buttons.forEach((button, index) => button.addEventListener("click", () => {
        panels.forEach((panel, panelIndex) => {
          if (panelIndex !== index) panel.querySelector("video")?.pause();
          panel.hidden = panelIndex !== index;
        });
        buttons.forEach((other, buttonIndex) => {
          other.setAttribute("aria-selected", String(buttonIndex === index));
        });
      }));
    });
    focusViews.forEach((view) => {
      const video = view.querySelector("video");
      const conditions = Array.from(view.querySelectorAll("[data-focus-condition]"));
      const methods = Array.from(view.querySelectorAll("[data-focus-method]"));
      let condition = conditions.find((item) => item.getAttribute("aria-selected") === "true").dataset.focusCondition;
      let method = methods.find((item) => item.getAttribute("aria-selected") === "true").dataset.focusMethod;
      const update = () => {
        const name = `${view.dataset.focusTask}_${condition}/${method}`;
        const base = `${view.dataset.focusFamily}/${name}`;
        video.pause();
        video.src = `/files/clothdojo/focus/${base}.mp4`;
        video.poster = `/images/clothdojo/focus/${base}.jpg`;
        const slide = view.closest("[data-clothdojo-slide]");
        const label = slide.dataset[document.documentElement.lang === "zh-CN" ? "slideLabelZh" : "slideLabelEn"];
        video.setAttribute("aria-label", `${label}: ${methods.find((item) => item.dataset.focusMethod === method).textContent}, ${conditions.find((item) => item.dataset.focusCondition === condition).textContent}`);
        conditions.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.focusCondition === condition)));
        methods.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.focusMethod === method)));
      };
      conditions.forEach((button) => button.addEventListener("click", () => {
        condition = button.dataset.focusCondition;
        update();
      }));
      methods.forEach((button) => button.addEventListener("click", () => {
        method = button.dataset.focusMethod;
        update();
      }));
    });
    clips.forEach((clip) => {
      clip.addEventListener("play", () => {
        fullVideo.pause();
        clips.filter((other) => other !== clip).forEach((other) => other.pause());
        pauseRgb();
      });
    });
    fullVideo.addEventListener("play", () => {
      clips.forEach((clip) => clip.pause());
      pauseRgb();
    });
    details.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showPage(current - 1);
      if (event.key === "ArrowRight") showPage(current + 1);
    });
    details.addEventListener("touchstart", (event) => {
      touchStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
    }, { passive: true });
    details.addEventListener("touchend", (event) => {
      if (!touchStart) return;
      const dx = event.changedTouches[0].clientX - touchStart.x;
      const dy = event.changedTouches[0].clientY - touchStart.y;
      touchStart = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showPage(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
    window.addEventListener("languagechange", updateLanguage);
    updateLanguage();
  });
})();
