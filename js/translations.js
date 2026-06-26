/* ===========================================================
   translations.js — EN / ID string map
   Add a key to BOTH objects, then use data-i18n="your.key"
   on the element. For attributes (e.g. placeholder) also add
   data-i18n-attr="placeholder".
   =========================================================== */

const translations = {
  EN: {
    "nav.brand":         "Deira",
    "nav.techstack":     "Tech Stack",
    "nav.projects":      "Projects",
    "nav.experiences":   "Experiences",
    "nav.achievements":  "Achievements",
    "nav.contact":       "Contact",

    "techstack.heading":   "Tech Stacks",
    "techstack.languages": "Programming Languages",
    "techstack.aiml":      "AI / ML & Data",
    "techstack.web":       "Web & App Dev",
    "techstack.db":        "Databases & Storage",
    "techstack.cloud":     "Cloud & DevOps",
    "techstack.tools":     "Tools & Design",

    "hero.location":     "Bandung & Samarinda, Indonesia",
    "hero.greeting":     "Hi! I'm Deira",
    "hero.role":         "An Aspiring AI Engineer/Data Scientist",
    "hero.edu":          "CS Undergraduate @ Universitas Gadjah Mada",
    "hero.desc":         "Bridging data science and engineering to build intelligent systems — from data pipelines to production deployment.",

    "latest.experiences":"Latest Experiences",
    "latest.projects":   "Latest Projects",
    "latest.achievements":"Latest Achievements",
    "common.seemore":    "See more",
    "common.back":       "Back to home",
    "exp.work":          "Work Experience",
    "exp.org":           "Organizational Experience",

    "projects.empty":    "Projects coming soon.",
    "projects.soon":     "Prototype coming soon",
    "experiences.empty": "Experiences coming soon.",
    "achievements.empty":"Achievements coming soon — check back shortly.",

    "contact.heading":   "Contact",
    "contact.sub":       "Got a project or opportunity? Let's talk.",
    "contact.name":      "Your name",
    "contact.email":     "your@email.com",
    "contact.subject":   "Project inquiry, job offer, collaboration…",
    "contact.message":   "Hi Deira, I'd like to discuss… (feel free to include your timeline, budget, or any relevant details)",
    "contact.send":      "Send Message",
    "contact.sending":   "Sending…",
    "contact.success":   "Message sent! I'll get back to you soon.",
    "contact.error":     "Something went wrong. Please try again.",

    "search.placeholder":"Search the page…",
    "search.none":       "No matches found.",
    "search.hint":       "Press Enter to jump to the first match · Esc to close",

    "footer.built":      "Built with HTML, CSS & vanilla JS.",
  },

  ID: {
    "nav.brand":         "Deira",
    "nav.techstack":     "Teknologi",
    "nav.projects":      "Proyek",
    "nav.experiences":   "Pengalaman",
    "nav.achievements":  "Prestasi",
    "nav.contact":       "Kontak",

    "techstack.heading":   "Tech Stacks",
    "techstack.languages": "Bahasa Pemrograman",
    "techstack.aiml":      "AI / ML & Data",
    "techstack.web":       "Web & Aplikasi",
    "techstack.db":        "Basis Data & Storage",
    "techstack.cloud":     "Cloud & DevOps",
    "techstack.tools":     "Alat & Desain",

    "hero.location":     "Bandung & Samarinda, Indonesia",
    "hero.greeting":     "Hai! Saya Deira",
    "hero.role":         "Calon AI Engineer/Data Scientist",
    "hero.edu":          "Mahasiswa S1 Ilmu Komputer @ Universitas Gadjah Mada",
    "hero.desc":         "Menghubungkan data science dan rekayasa untuk membangun sistem cerdas — dari pipeline data hingga deployment produksi.",

    "latest.experiences":"Pengalaman Terbaru",
    "latest.projects":   "Proyek Terbaru",
    "latest.achievements":"Prestasi Terbaru",
    "common.seemore":    "Lihat semua",
    "common.back":       "Kembali ke beranda",
    "exp.work":          "Pengalaman Kerja",
    "exp.org":           "Pengalaman Organisasi",

    "projects.empty":    "Proyek segera hadir.",
    "projects.soon":     "Prototipe segera hadir",
    "experiences.empty": "Pengalaman segera hadir.",
    "achievements.empty":"Prestasi segera hadir — nantikan ya.",

    "contact.heading":   "Kontak",
    "contact.sub":       "Punya proyek atau tawaran pekerjaan? Ayo bicara.",
    "contact.name":      "Nama kamu",
    "contact.email":     "email@kamu.com",
    "contact.subject":   "Inquiry proyek, tawaran kerja, kolaborasi…",
    "contact.message":   "Halo Deira, saya ingin mendiskusikan… (silakan sertakan timeline, budget, atau detail relevan lainnya)",
    "contact.send":      "Kirim Pesan",
    "contact.sending":   "Mengirim…",
    "contact.success":   "Pesan terkirim! Saya akan segera membalas.",
    "contact.error":     "Terjadi kesalahan. Silakan coba lagi.",

    "search.placeholder":"Cari di halaman…",
    "search.none":       "Tidak ada hasil.",
    "search.hint":       "Tekan Enter untuk ke hasil pertama · Esc untuk menutup",

    "footer.built":      "Dibuat dengan HTML, CSS & vanilla JS.",
  },
};

// Active language, persisted across reloads.
let currentLang = localStorage.getItem("lang") || "EN";

/** Translate the value for a key in the active (or given) language. */
function t(key, lang = currentLang) {
  return (translations[lang] && translations[lang][key]) || key;
}

/** Apply translations to every [data-i18n] element in the document. */
function applyTranslations(lang = currentLang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key, lang);
    if (value == null) return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  });
}

/** Toggle EN <-> ID, persist, re-apply, and update the toggle label. */
function toggleLanguage() {
  currentLang = currentLang === "EN" ? "ID" : "EN";
  localStorage.setItem("lang", currentLang);
  // Re-render data-driven cards (content.js) so their EN/ID text updates too,
  // then translate any [data-i18n] nodes (including freshly injected ones).
  if (typeof renderContent === "function") renderContent();
  applyTranslations(currentLang);
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = currentLang;
}
