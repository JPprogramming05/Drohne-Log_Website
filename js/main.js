// ============================================================
// Drone-Log.de – Landingpage Interaktionen
// ============================================================

(function () {
  "use strict";

  // Header: Schatten/Border beim Scrollen
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile Navigation
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });

    // Menü nach Klick auf einen Link schließen
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll-Reveal via IntersectionObserver
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // Hero-Drohne: blendet beim Scrollen nach und nach aus
  const heroDrone = document.getElementById("heroDrone");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (heroDrone && !reducedMotion) {
    const fadeDrone = () => {
      const f = Math.min(1, window.scrollY / 550);
      heroDrone.style.opacity = String(1 - f);
      heroDrone.style.transform = `translateY(${f * -70}px) scale(${1 - f * 0.18})`;
    };
    window.addEventListener("scroll", fadeDrone, { passive: true });
    fadeDrone();
  }

  // Aktuelles Jahr im Footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
