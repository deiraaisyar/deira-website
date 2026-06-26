/* ===========================================================
   subpage.js — bootstraps the standalone full pages
   (experiences.html, projects.html, achievements.html).
   Reuses translations.js globals; content is inline (no fetch).
   =========================================================== */

function initSubpage() {
  /* ---------- Render data-driven content first ---------- */
  if (typeof renderContent === "function") renderContent();

  /* ---------- Dark mode ---------- */
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const stored = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  function applyTheme(dark) {
    document.body.classList.toggle("dark", dark);
    if (themeIcon) {
      themeIcon.src = dark ? "assets/icons/day-mode.svg" : "assets/icons/night-mode.svg";
    }
  }
  applyTheme(stored ? stored === "dark" : prefersDark);
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nowDark = !document.body.classList.contains("dark");
      applyTheme(nowDark);
      localStorage.setItem("theme", nowDark ? "dark" : "light");
    });
  }

  /* ---------- Language ---------- */
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = currentLang;
    langBtn.addEventListener("click", toggleLanguage);
  }
  applyTranslations(currentLang);

  /* ---------- Hamburger (mobile) ---------- */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- Footer year ---------- */
  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll ---------- */
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
  }
}

document.addEventListener("DOMContentLoaded", initSubpage);
