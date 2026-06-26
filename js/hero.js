/* ===========================================================
   hero.js — looping typewriter location + photo carousel
   initHero() is called by main.js after sections are loaded.
   =========================================================== */

/* Cities cycled by the typewriter. Edit this list to change them. */
const LOCATIONS = [
  "Yogyakarta, Indonesia",
  "Jakarta, Indonesia",
  "Remote, Anywhere",
];

function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  // Reduced motion: just show the first location, no animation.
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = LOCATIONS[0];
    return;
  }

  const TYPE_SPEED = 80;    // ms per character typed
  const ERASE_SPEED = 40;   // ms per character erased
  const HOLD_FULL = 1600;   // pause once a word is fully typed
  const HOLD_EMPTY = 350;   // pause once a word is fully erased

  let wordIndex = 0;
  let charIndex = 0;
  let erasing = false;

  function tick() {
    const word = LOCATIONS[wordIndex];

    if (!erasing) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        erasing = true;
        return setTimeout(tick, HOLD_FULL);
      }
      return setTimeout(tick, TYPE_SPEED);
    }

    charIndex--;
    el.textContent = word.slice(0, charIndex);
    if (charIndex === 0) {
      erasing = false;
      wordIndex = (wordIndex + 1) % LOCATIONS.length;
      return setTimeout(tick, HOLD_EMPTY);
    }
    return setTimeout(tick, ERASE_SPEED);
  }

  tick();
}

function initCarousel() {
  const track = document.getElementById("carousel-track");
  const prev = document.getElementById("carousel-prev");
  const next = document.getElementById("carousel-next");
  const dotsWrap = document.getElementById("carousel-dots");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll(".carousel-slide"));
  if (!slides.length) return;

  let index = 0;

  // Build dots
  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to photo ${i + 1}`);
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function go(i) {
    index = (i + slides.length) % slides.length;
    render();
  }

  // ----- Autoplay (auto-advance) -----
  const AUTOPLAY_MS = 4000;
  let timer = null;
  const start = () => {
    stop();
    timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
  };
  const stop = () => {
    if (timer) { clearInterval(timer); timer = null; }
  };
  // call after a manual interaction so the next auto-advance waits a full cycle
  const bump = () => { start(); };

  // Rebind dot clicks to also reset the timer
  dots.forEach((dot, i) => dot.addEventListener("click", bump));

  if (prev) prev.addEventListener("click", () => { go(index - 1); bump(); });
  if (next) next.addEventListener("click", () => { go(index + 1); bump(); });

  // Keyboard arrows when the carousel is focused/hovered
  const carousel = document.getElementById("hero-carousel");
  if (carousel) {
    carousel.setAttribute("tabindex", "0");
    carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); bump(); }
      if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); bump(); }
    });
    // Pause while the user is hovering / interacting
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);
  }

  // Basic touch swipe
  let startX = null;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; stop(); }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    startX = null;
    start();
  });

  render();
  start();
}

function initHero() {
  initTypewriter();
  initCarousel();
}
