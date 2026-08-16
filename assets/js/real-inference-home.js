(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("[data-real-inference-toggle]");
    const details = document.querySelector("[data-real-inference-demo]");

    if (!toggleButton || !details) return;

    const setToggleLabel = () => {
      const label = document.documentElement.lang === "zh-CN" ? "详情" : "Details";
      const arrow = details.hidden ? "↓" : "↑";
      toggleButton.innerHTML = `${label} <span aria-hidden="true">${arrow}</span>`;
    };

    toggleButton.addEventListener("click", () => {
      const willOpen = details.hidden;
      details.hidden = !willOpen;
      toggleButton.setAttribute("aria-expanded", String(willOpen));
      toggleButton.classList.toggle("is-active", willOpen);
      setToggleLabel();
    });

    window.addEventListener("languagechange", setToggleLabel);
  });
})();
