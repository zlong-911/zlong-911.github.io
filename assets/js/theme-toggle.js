(function () {
  "use strict";

  const storageKey = "theme";

  function applyTheme(theme, persist) {
    const isDark = theme === "dark";
    const moonIcon = document.querySelector(".theme-icon--moon");
    const sunIcon = document.querySelector(".theme-icon--sun");

    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    if (moonIcon) moonIcon.classList.toggle("is-visible", !isDark);
    if (sunIcon) sunIcon.classList.toggle("is-visible", isDark);

    if (persist) {
      localStorage.setItem(storageKey, isDark ? "dark" : "light");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    const storedTheme = localStorage.getItem(storageKey);
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    applyTheme(storedTheme === "dark" || storedTheme === "light" ? storedTheme : preferredTheme, false);

    if (!button) {
      return;
    }

    button.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme, true);
    }, true);
  });
})();
