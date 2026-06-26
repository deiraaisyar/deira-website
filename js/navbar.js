/* ===========================================================
   navbar.js — hamburger, smooth scroll, active-link highlight
   initNavbar() is called by main.js after sections are loaded.
   =========================================================== */

function initNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // --- Hamburger toggle ---
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
    });
  }

  // --- Smooth scroll for any [data-scroll] link, close mobile menu ---
  document.querySelectorAll("a[data-scroll]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (navLinks) navLinks.classList.remove("open");
      if (hamburger) {
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });

  // --- Active-link highlight via IntersectionObserver ---
  const sections = document.querySelectorAll("main section[id]");
  const linkFor = (id) =>
    document.querySelector(`.nav-links a[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll(".nav-links a")
            .forEach((a) => a.classList.remove("active"));
          const link = linkFor(entry.target.id);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}
