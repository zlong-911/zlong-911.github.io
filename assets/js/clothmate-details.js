(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(
      "[data-clothmate-details-toggle]",
    );
    const details = document.querySelector("[data-clothmate-details]");

    if (!toggleButton || !details) return;

    toggleButton.addEventListener("click", () => {
      const willOpen = details.hidden;
      details.hidden = !willOpen;
      toggleButton.setAttribute("aria-expanded", String(willOpen));
      toggleButton.classList.toggle("is-active", willOpen);
      toggleButton.innerHTML = `Details <span aria-hidden="true">${willOpen ? "↑" : "↓"}</span>`;
    });
  });
})();
