/* ===========================================================
   main.js — entry point
   Loads section partials, then wires up everything:
   dark mode, language, navbar, search, contact, reveal-on-scroll.
   =========================================================== */

const sections = ["hero", "techstack", "projects", "experiences", "achievements", "contact"];

async function loadSections() {
  await Promise.all(
    sections.map(async (name) => {
      try {
        const res = await fetch(`sections/${name}.html`);
        const html = await res.text();
        document.getElementById(`mount-${name}`).innerHTML = html;
      } catch (err) {
        console.error(`Failed to load section "${name}":`, err);
      }
    })
  );
  initAll();
}

/* ---------- Dark mode ---------- */
function initDarkMode() {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  const stored = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = stored ? stored === "dark" : prefersDark;

  applyTheme(isDark);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nowDark = !document.body.classList.contains("dark");
      applyTheme(nowDark);
      localStorage.setItem("theme", nowDark ? "dark" : "light");
    });
  }

  function applyTheme(dark) {
    document.body.classList.toggle("dark", dark);
    if (icon) {
      // Show the sun (day-mode) while in dark; moon (night-mode) while in light.
      icon.src = dark ? "assets/icons/day-mode.svg" : "assets/icons/night-mode.svg";
    }
  }
}

/* ---------- Language ---------- */
function initLanguage() {
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = currentLang;
    btn.addEventListener("click", toggleLanguage);
  }
  applyTranslations(currentLang);
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
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

/* ---------- Footer year ---------- */
function initFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Run everything after sections are in the DOM ---------- */
function initAll() {
  renderContent(); // build cards/timeline from js/content.js before anything reads the DOM
  initDarkMode();
  initLanguage();
  initNavbar();
  initSearch();
  initContact();
  initHero();
  initReveal();
  initFooterYear();
}

document.addEventListener("DOMContentLoaded", loadSections);
