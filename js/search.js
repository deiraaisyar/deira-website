/* ===========================================================
   search.js — search overlay
   Searches visible text across sections, highlights matches,
   and smooth-scrolls to the first one. Esc closes.
   initSearch() is called by main.js after sections are loaded.
   =========================================================== */

function initSearch() {
  const toggle = document.getElementById("search-toggle");
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("search-input");
  const closeBtn = document.getElementById("search-close");
  const hint = document.getElementById("search-hint");

  if (!toggle || !overlay || !input) return;

  // Elements we search within (section text content).
  const searchRoots = () =>
    Array.from(document.querySelectorAll("main section"));

  function clearHighlights() {
    document.querySelectorAll("mark.search-hit").forEach((mark) => {
      const parent = mark.parentNode;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  function openSearch() {
    overlay.hidden = false;
    hint.textContent = t("search.hint");
    input.focus();
  }

  function closeSearch() {
    overlay.hidden = true;
    input.value = "";
    clearHighlights();
    hint.textContent = "";
  }

  // Highlight every match; return the first highlighted element (or null).
  function runSearch(query) {
    clearHighlights();
    if (!query || query.trim().length < 2) {
      hint.textContent = t("search.hint");
      return null;
    }

    const q = query.trim().toLowerCase();
    let firstHit = null;
    let count = 0;

    searchRoots().forEach((root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          const tag = node.parentNode.nodeName;
          if (tag === "SCRIPT" || tag === "STYLE")
            return NodeFilter.FILTER_REJECT;
          return node.nodeValue.toLowerCase().includes(q)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      });

      const matches = [];
      let n;
      while ((n = walker.nextNode())) matches.push(n);

      matches.forEach((textNode) => {
        const text = textNode.nodeValue;
        const frag = document.createDocumentFragment();
        const lower = text.toLowerCase();
        let i = 0;
        let idx;
        while ((idx = lower.indexOf(q, i)) !== -1) {
          if (idx > i) frag.appendChild(document.createTextNode(text.slice(i, idx)));
          const mark = document.createElement("mark");
          mark.className = "search-hit";
          mark.textContent = text.slice(idx, idx + q.length);
          frag.appendChild(mark);
          if (!firstHit) firstHit = mark;
          count++;
          i = idx + q.length;
        }
        if (i < text.length) frag.appendChild(document.createTextNode(text.slice(i)));
        textNode.parentNode.replaceChild(frag, textNode);
      });
    });

    hint.textContent = count
      ? `${count} match${count > 1 ? "es" : ""}`
      : t("search.none");
    return firstHit;
  }

  // --- Events ---
  toggle.addEventListener("click", () => {
    overlay.hidden ? openSearch() : closeSearch();
  });

  if (closeBtn) closeBtn.addEventListener("click", closeSearch);

  let debounce;
  input.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => runSearch(input.value), 180);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const first = runSearch(input.value);
      if (first) {
        first.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeSearch();
    // Quick-open with "/" when not typing in a field.
    if (
      e.key === "/" &&
      overlay.hidden &&
      !/^(INPUT|TEXTAREA)$/.test(document.activeElement.nodeName)
    ) {
      e.preventDefault();
      openSearch();
    }
  });
}
