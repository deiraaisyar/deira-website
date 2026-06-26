/* ===========================================================
   content.js — single source of truth for Projects, Achievements
   and Experiences. Both the home page (latest only) and the full
   pages render from these arrays, so you only edit ONE place.

   HOW TO ADD AN ITEM
   ------------------
   Add an object to the matching array below. `when` is a numeric
   sort key (YYYYMM) — the bigger it is, the newer it is. The home
   page always shows the items with the largest `when`, so a new
   entry with the right `when` automatically becomes "latest" with
   no other edits.

   - Projects:     tags are [logoFileInToolLogos, label] pairs.
   - Achievements: type is "win" (🏆 trophy.svg) or "finalist" (🎖 medal.svg).
   - Experiences:  category is "work" or "org".
   =========================================================== */

const PROJECTS = [
  {
    when: 202605,
    date: "May 2026",
    title: "Traffic Signal Violation Detection",
    desc: "Built an end-to-end violation detection system using YOLO11 for object detection and a SORT Kalman filter for multi-vehicle tracking, with multi-stage image enhancement (Gamma, CLAHE, Unsharp) and HSV traffic-light classification with temporal smoothing — plus polygon ROIs, stop-line crossing logic, and ghost-tracker/ID remapping for occlusions.",
    tags: [["python.svg", "Python"], ["OpenCV.svg", "OpenCV"], ["PyTorch.svg", "YOLO"]],
    link: "https://github.com/deiraaisyar/traffic-light-violation-detection.git",
    linkLabel: "View on GitHub",
  },
  {
    when: 202510,
    date: "Sep 2025 – Oct 2025",
    title: "Crowd Localization via Attention-Guided Density Estimation",
    desc: "Built a crowd-localization model with an EfficientNet-B1 backbone adapting SFANet for multi-scale feature extraction, plus a preprocessing pipeline generating Gaussian-smoothed density maps and binary attention maps. Achieved MAE 19.6 (detection) and 2.0 (localization) on Kaggle.",
    tags: [["python.svg", "Python"], ["PyTorch.svg", "PyTorch"], ["OpenCV.svg", "OpenCV"]],
    link: "https://colab.research.google.com/drive/1Fy880LaIIWWxoB5efu_ny3iqqlCLDEiC",
    linkLabel: "Open in Colab",
  },
  {
    when: 202509,
    date: "Jul 2025 – Sep 2025",
    title: "BISACare-AI",
    desc: "Developed an AI-powered health-insurance assistant for Indonesia integrating Google Document AI for KTP/policy/invoice scanning, Whisper transcription, a RAG chatbot, and Sentence-BERT + FAISS recommendations. Built a modular FastAPI backend with automated coverage analysis, claim-appeal PDF generation via Google Cloud Storage, and Docker deployment.",
    tags: [["python.svg", "Python"], ["FastAPI.svg", "FastAPI"], ["Docker.svg", "Docker"], ["Google Cloud.svg", "Google Cloud"]],
    link: "https://github.com/deiraaisyar/BISAcare-AI.git",
    linkLabel: "View on GitHub",
  },
  {
    when: 202507,
    date: "Jun 2025 – Jul 2025",
    title: "Recommendation Engine for Jobs, Courses, Majors & Careers",
    desc: "Built a multi-domain recommendation system for careers, jobs, courses, majors, and articles based on user interests, RIASEC scores, and skill profiles using Sentence Transformers and FAISS. Deployed scalable FastAPI endpoints integrating O*NET and Google Custom Search, backed by a modular scraping and embedding pipeline (LinkedIn, edX, BAN-PT).",
    tags: [["python.svg", "Python"], ["FastAPI.svg", "FastAPI"]],
    link: "https://github.com/deiraaisyar/SISTECH-MLOps-FinalProject-Group7.git",
    linkLabel: "View on GitHub",
  },
  {
    when: 202507,
    date: "Jul 2025",
    title: "Regional Fiscal Analysis for Indonesia (2023)",
    desc: "Conducted EDA and visualized fiscal patterns across provinces using heatmaps, boxplots, and geospatial maps. Applied PCA and K-Means clustering to identify fiscal-disparity patterns and proposed data-driven recommendations for improving regional equity in fund allocation.",
    tags: [["python.svg", "Python"], ["Pandas.svg", "Pandas"], ["scikit-learn.svg", "scikit-learn"]],
    link: "https://colab.research.google.com/drive/1RiM9VxjrvzxtBcZwB_KD6JpLAl-JKflb?usp=sharing",
    linkLabel: "Open in Colab",
  },
  {
    when: 202505,
    date: "Apr 2025 – May 2025",
    title: "OptiWeight: AI-Integrated Health Recommendation App",
    desc: "Developed a mobile app offering personalized weight-optimization plans by integrating Gemini AI with Android and Firebase for real-time health insights. Built a real-time Express.js backend API handling user data, AI prompt generation, authentication, and scalable cloud storage.",
    tags: [["Android.svg", "Android"], ["javascript.svg", "JavaScript"]],
    link: "https://github.com/deiraaisyar/optiweight-app",
    linkLabel: "View on GitHub",
  },
  {
    when: 202501,
    date: "Jan 2025 – May 2025",
    title: "HelmAware: Smart Safety Monitoring for Construction Workers",
    desc: "Built a safety-monitoring dashboard using YOLOv5 and IoT sensors to detect drowsiness and hazards, with Google Gemini AI providing conversational health guidance from Firebase worker data. Implemented a real-time alert system via Telegram bots and Ubidots, with a Streamlit frontend for sensor insights and AI chat.",
    tags: [["python.svg", "Python"], ["PyTorch.svg", "YOLOv5"], ["Streamlit.svg", "Streamlit"]],
    link: "https://github.com/deiraaisyar/helmaware-final",
    linkLabel: "View on GitHub",
  },
];

const ACHIEVEMENTS = [
  {
    when: 202605, type: "win", badge: "National",
    title: "1st Place — CIMSAThon",
    org: "CIMSA Nasional · May 2026",
    desc: "Built a mobile & web MVP for personalized medication recommendations using RAG-based doctor verification and a Fuzzy TOPSIS decision framework.",
  },
  {
    when: 202605, type: "finalist", badge: "National",
    title: "Finalist — Data Analytics Competition FindIT 2026",
    org: "Universitas Gadjah Mada · May 2026",
    desc: "Built a face anti-spoofing model (F1-macro 0.97) using NaFlexViT with FPN and CDC, placing 5th out of 300+ teams.",
  },
  {
    when: 202510, type: "win", badge: "National",
    title: "3rd Place — Data Mining HOLOGY 8.0",
    org: "Universitas Brawijaya · Oct 2025",
    desc: "Developed a crowd detection (MAE 19.6) and localization (MAE 2.0) model using SFANet with an EfficientNet-B1 backbone.",
  },
  {
    when: 202509, type: "finalist", badge: "National",
    title: "Finalist — AI Innovation Challenge COMPFEST 17",
    org: "Universitas Indonesia · Sep 2025",
    desc: "Built AI features for BISACare — a health-insurance app with insurance/hospital recommenders, a RAG chatbot, and automated claim-status analysis.",
  },
  {
    when: 202507, type: "win", badge: "National",
    title: "1st Place — Data Analytics TECHFEST 2025",
    org: "BINUS University · Jul 2025",
    desc: "Led regional fiscal analysis of Indonesia's 2023 fund-allocation data, applying PCA and K-Means clustering to surface disparity patterns and actionable recommendations.",
  },
  {
    when: 202410, type: "win", badge: "Department",
    title: "1st Place — Data Royale 2024",
    org: "OmahTI UGM & Kotak Riset Sistem Cerdas UGM · Oct 2024",
    desc: "Developed a top-performing predictive model on Kaggle to win a department-scale data-mining competition.",
  },
];

const EXPERIENCES = [
  {
    when: 202601, category: "work",
    date: "Jan 2026 – Jul 2026",
    title: "Data Engineer Freelancer",
    org: "PT Global Data Inspirasi · Remote (Yogyakarta, Indonesia)",
    desc: "Analyzed raw Excel datasets from an aviation company to benchmark key data-handling and landing costs, and engineered automated ETL pipelines using Apache Airflow to ingest unstructured flight data into structured databases — supporting CRS documentation to align the architecture with client needs.",
  },
  {
    when: 202512, category: "org",
    date: "Dec 2025 – Present",
    title: "Data Science & Artificial Intelligence Lead",
    org: "OMAH TI UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Mentored 9 junior staff across ML, NLP, computer vision, RAG, MLOps, and AI agents through hands-on sessions — leading 5 of 9 members to win or reach finals in national-level data & AI competitions.",
  },
  {
    when: 202412, category: "org",
    date: "Dec 2024 – Dec 2025",
    title: "Data Science & Artificial Intelligence Member",
    org: "OMAH TI UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Gained hands-on experience in tabular analysis, NLP, and computer vision through collaborative projects and internal training. Served as Project Officer for Data Royale 2025, leading a department-scale competition for 25 freshman teams on multiclass classification of poisonous mushrooms.",
  },
  {
    when: 202411, category: "org",
    date: "Nov 2024 – Jun 2025",
    title: "Hacker Member",
    org: "Google Developer Group on Campus UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Built OptiWeight, a personalized body-composition monitoring app integrating Gemini AI, Express.js, Android, and Firebase. Implemented AI-driven chat support and real-time data sync to deliver smart feedback and actionable health insights.",
  },
];

/* ---------- rendering helpers ---------- */

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}

function byNewest(a, b) {
  return b.when - a.when;
}

function limitOf(el, attr) {
  const v = el.dataset[attr];
  return v ? parseInt(v, 10) : Infinity;
}

function projectCardHTML(p) {
  const tags = p.tags
    .map(([file, label]) => `<span class="tag"><img src="assets/tool-logos/${file}" alt="" />${esc(label)}</span>`)
    .join("");
  const date = p.date ? `<span class="card-date">${esc(p.date)}</span>` : "";
  return `<article class="project-card">
    <div class="card-thumb card-thumb--soon"><span data-i18n="projects.soon">Prototype coming soon</span></div>
    <div class="card-body">
      <h3 class="card-title">${esc(p.title)}</h3>
      <p class="card-desc">${esc(p.desc)}</p>
      <div class="card-tags">${tags}</div>
      ${date}
      <a href="${p.link}" class="card-link" target="_blank" rel="noopener">${esc(p.linkLabel)} &rarr;</a>
    </div>
  </article>`;
}

function achievementCardHTML(a) {
  const icon = a.type === "win" ? "trophy.svg" : "medal.svg";
  return `<article class="achievement-card">
    <div class="achievement-icon"><img src="assets/icons/${icon}" alt="" class="icon achievement-ico" /></div>
    <div class="achievement-body">
      <span class="achievement-badge">${esc(a.badge)}</span>
      <h3 class="achievement-title">${esc(a.title)}</h3>
      <p class="achievement-org">${esc(a.org)}</p>
      <p class="achievement-desc">${esc(a.desc)}</p>
    </div>
  </article>`;
}

function timelineItemHTML(e) {
  return `<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="timeline-date">${esc(e.date)}</span>
      <h3 class="timeline-title">${esc(e.title)}</h3>
      <p class="timeline-org">${esc(e.org)}</p>
      <p class="timeline-desc">${esc(e.desc)}</p>
    </div>
  </div>`;
}

function expSubsectionHTML(i18nKey, fallback, items) {
  if (!items.length) return "";
  return `<div class="exp-subsection reveal">
    <h3 class="exp-subhead" data-i18n="${i18nKey}">${fallback}</h3>
    <div class="timeline">${items.map(timelineItemHTML).join("")}</div>
  </div>`;
}

/* ---------- public render entry ---------- */

function renderContent() {
  const projects = document.getElementById("projects-grid");
  if (projects) {
    const items = [...PROJECTS].sort(byNewest).slice(0, limitOf(projects, "limit"));
    projects.innerHTML = items.map(projectCardHTML).join("");
  }

  const achievements = document.getElementById("achievements-grid");
  if (achievements) {
    const items = [...ACHIEVEMENTS].sort(byNewest).slice(0, limitOf(achievements, "limit"));
    achievements.innerHTML = items.map(achievementCardHTML).join("");
  }

  const experiences = document.getElementById("experiences-list");
  if (experiences) {
    const work = EXPERIENCES.filter((e) => e.category === "work").sort(byNewest).slice(0, limitOf(experiences, "workLimit"));
    const org = EXPERIENCES.filter((e) => e.category === "org").sort(byNewest).slice(0, limitOf(experiences, "orgLimit"));
    experiences.innerHTML =
      expSubsectionHTML("exp.work", "Work Experience", work) +
      expSubsectionHTML("exp.org", "Organizational Experience", org);
  }
}
