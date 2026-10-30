(function () {
  "use strict";

  var root = document.documentElement;
  var themeButton = document.getElementById("theme-toggle");
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("portfolio-theme"); } catch (e) { /* optional */ }
  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  }
  function updateThemeLabel() {
    if (!themeButton) return;
    var isLight = root.getAttribute("data-theme") === "light";
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeButton.setAttribute("title", isLight ? "Switch to dark theme" : "Switch to light theme");
  }
  updateThemeLabel();
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("portfolio-theme", next); } catch (e) { /* optional */ }
      updateThemeLabel();
    });
  }

  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var projects = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));
  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var selection = button.getAttribute("data-filter");
      filters.forEach(function (b) {
        var active = b === button;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      projects.forEach(function (project) {
        project.hidden = selection !== "all" && project.getAttribute("data-category") !== selection;
      });
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: "0px 0px -25px 0px" });
    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("is-visible"); });
  }
}());