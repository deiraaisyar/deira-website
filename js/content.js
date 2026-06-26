/* ===========================================================
   content.js — single source of truth for Projects, Achievements
   and Experiences. Both the home page (latest only) and the full
   pages render from these arrays, so you only edit ONE place.

   HOW TO ADD AN ITEM
   ------------------
   Add an object to the matching array below. `when` is a numeric
   sort key (YYYYMM) — the bigger it is, the newer it is. The home
   page always shows the items with the largest `when`, so a new
   entry with the right `when` automatically becomes "latest".

   BILINGUAL TEXT
   --------------
   English is the default. To translate a field for Indonesian, add a
   sibling field with the "_id" suffix, e.g.  title / title_id,
   desc / desc_id, date / date_id, org / org_id, badge / badge_id,
   linkLabel / linkLabel_id. If "_id" is missing, the English value
   is used in both languages. The cards re-render on the EN/ID toggle.

   - Projects:     tags are [logoFileInToolLogos, label] pairs.
   - Achievements: type is "win" (🏆 trophy.svg) or "finalist" (🎖 medal.svg).
   - Experiences:  category is "work" or "org".
   =========================================================== */

const PROJECTS = [
  {
    when: 202606,
    date: "Jun 2026",
    title: "UMKM Customer Service AI",
    title_id: "AI Layanan Pelanggan UMKM",
    thumb: "assets/project_thumbnails/csbot-ai.png",
    desc: "Built an AI-powered Telegram customer-service bot for Indonesian SMEs integrating Google Gemini LLM for multi-domain conversation (product, payment, order tracking), multimodal semantic search with clip-ViT-B-32 and ChromaDB, and a Text-to-SQL pipeline for natural-language order lookup with read-only safety guards. Added a real-time Streamlit analytics dashboard tracking sentiment, rating distribution, per-user satisfaction, and response latency (P50/P95) — containerized with Docker and deployed on Google Cloud Platform.",
    desc_id: "Membangun bot layanan pelanggan Telegram bertenaga AI untuk UMKM Indonesia dengan Google Gemini LLM untuk percakapan multi-domain (produk, pembayaran, pelacakan pesanan), pencarian semantik multimodal dengan clip-ViT-B-32 dan ChromaDB, serta pipeline Text-to-SQL untuk pencarian pesanan via bahasa natural dengan pengaman read-only. Menambahkan dashboard analitik Streamlit real-time untuk memantau sentimen, distribusi rating, skor kepuasan per pengguna, dan latensi respons (P50/P95) — dikontainerisasi dengan Docker dan di-deploy di Google Cloud Platform.",
    tags: [["python.svg", "Python"], ["chromadb.svg", "ChromaDB"], ["Streamlit.svg", "Streamlit"], ["Docker.svg", "Docker"], ["Google Cloud.svg", "Google Cloud"]],
    link: "https://github.com/deiraaisyar/umkm-customer-service-ai",
    linkLabel: "View on GitHub",
    linkLabel_id: "Lihat di GitHub",
  },
  {
    when: 202605,
    date: "May 2026",
    date_id: "Mei 2026",
    title: "Traffic Signal Violation Detection",
    title_id: "Deteksi Pelanggaran Lampu Lalu Lintas",
    thumb: "assets/project_thumbnails/finpro-pkac.png",
    desc: "Built an end-to-end violation detection system using YOLO11 for object detection and a SORT Kalman filter for multi-vehicle tracking, with multi-stage image enhancement (Gamma, CLAHE, Unsharp) and HSV traffic-light classification with temporal smoothing — plus polygon ROIs, stop-line crossing logic, and ghost-tracker/ID remapping for occlusions.",
    desc_id: "Membangun sistem deteksi pelanggaran end-to-end menggunakan YOLO11 untuk deteksi objek dan SORT Kalman filter untuk pelacakan multi-kendaraan, dengan peningkatan citra multi-tahap (Gamma, CLAHE, Unsharp) dan klasifikasi status lampu lalu lintas berbasis HSV dengan temporal smoothing — plus polygon ROI, logika pelanggaran garis henti, dan ghost-tracker/ID remapping untuk menangani oklusi.",
    tags: [["python.svg", "Python"], ["OpenCV.svg", "OpenCV"], ["yolo.svg", "YOLO"]],
    link: "https://github.com/deiraaisyar/traffic-light-violation-detection.git",
    linkLabel: "View on GitHub",
    linkLabel_id: "Lihat di GitHub",
  },
  {
    when: 202510,
    date: "Sep 2025 – Oct 2025",
    date_id: "Sep 2025 – Okt 2025",
    title: "Crowd Localization via Attention-Guided Density Estimation",
    title_id: "Lokalisasi Kerumunan via Estimasi Densitas Berbasis Atensi",
    thumb: "assets/project_thumbnails/sfanet-hology.png",
    desc: "Built a crowd-localization model with an EfficientNet-B1 backbone adapting SFANet for multi-scale feature extraction, plus a preprocessing pipeline generating Gaussian-smoothed density maps and binary attention maps. Achieved MAE 19.6 (detection) and 2.0 (localization) on Kaggle.",
    desc_id: "Membangun model lokalisasi kerumunan dengan backbone EfficientNet-B1 yang mengadaptasi SFANet untuk ekstraksi fitur multi-skala, plus pipeline prapemrosesan yang menghasilkan peta densitas Gaussian dan peta atensi biner. Mencapai MAE 19,6 (deteksi) dan 2,0 (lokalisasi) di Kaggle.",
    tags: [["python.svg", "Python"], ["PyTorch.svg", "PyTorch"], ["OpenCV.svg", "OpenCV"]],
    link: "https://colab.research.google.com/drive/1Fy880LaIIWWxoB5efu_ny3iqqlCLDEiC",
    linkLabel: "Open in Colab",
    linkLabel_id: "Buka di Colab",
  },
  {
    when: 202509,
    date: "Jul 2025 – Sep 2025",
    title: "BISACare-AI",
    thumb: "assets/project_thumbnails/bisacare-compfest.png",
    desc: "Developed an AI-powered health-insurance assistant for Indonesia integrating Google Document AI for KTP/policy/invoice scanning, Whisper transcription, a RAG chatbot, and Sentence-BERT + FAISS recommendations. Built a modular FastAPI backend with automated coverage analysis, claim-appeal PDF generation via Google Cloud Storage, and Docker deployment.",
    desc_id: "Mengembangkan asisten asuransi kesehatan bertenaga AI untuk Indonesia yang mengintegrasikan Google Document AI untuk pemindaian KTP/polis/invoice, transkripsi Whisper, chatbot RAG, dan rekomendasi Sentence-BERT + FAISS. Membangun backend FastAPI modular dengan analisis cakupan otomatis, pembuatan PDF banding klaim via Google Cloud Storage, dan deployment Docker.",
    tags: [["python.svg", "Python"], ["FastAPI.svg", "FastAPI"], ["Docker.svg", "Docker"], ["Google Cloud.svg", "Google Cloud"]],
    link: "https://github.com/deiraaisyar/BISAcare-AI.git",
    linkLabel: "View on GitHub",
    linkLabel_id: "Lihat di GitHub",
  },
  {
    when: 202507,
    date: "Jun 2025 – Jul 2025",
    title: "Recommendation Engine for Jobs, Courses, Majors & Careers",
    title_id: "Mesin Rekomendasi untuk Pekerjaan, Kursus, Jurusan & Karier",
    thumb: "assets/project_thumbnails/recommender-sistech.png",
    desc: "Built a multi-domain recommendation system for careers, jobs, courses, majors, and articles based on user interests, RIASEC scores, and skill profiles using Sentence Transformers and FAISS. Deployed scalable FastAPI endpoints integrating O*NET and Google Custom Search, backed by a modular scraping and embedding pipeline (LinkedIn, edX, BAN-PT).",
    desc_id: "Membangun sistem rekomendasi multi-domain untuk karier, pekerjaan, kursus, jurusan, dan artikel berdasarkan minat pengguna, skor RIASEC, dan profil keterampilan menggunakan Sentence Transformers dan FAISS. Men-deploy endpoint FastAPI yang skalabel terintegrasi O*NET dan Google Custom Search, didukung pipeline scraping dan embedding modular (LinkedIn, edX, BAN-PT).",
    tags: [["python.svg", "Python"], ["FastAPI.svg", "FastAPI"]],
    link: "https://github.com/deiraaisyar/SISTECH-MLOps-FinalProject-Group7.git",
    linkLabel: "View on GitHub",
    linkLabel_id: "Lihat di GitHub",
  },
  {
    when: 202507,
    date: "Jul 2025",
    title: "Regional Fiscal Analysis for Indonesia (2023)",
    title_id: "Analisis Fiskal Daerah Indonesia (2023)",
    thumb: "assets/project_thumbnails/tkdd-techfest.png",
    desc: "Conducted EDA and visualized fiscal patterns across provinces using heatmaps, boxplots, and geospatial maps. Applied PCA and K-Means clustering to identify fiscal-disparity patterns and proposed data-driven recommendations for improving regional equity in fund allocation.",
    desc_id: "Melakukan EDA dan memvisualisasikan pola fiskal antarprovinsi menggunakan heatmap, boxplot, dan peta geospasial. Menerapkan PCA dan K-Means clustering untuk mengidentifikasi pola disparitas fiskal serta mengusulkan rekomendasi berbasis data untuk meningkatkan pemerataan alokasi dana daerah.",
    tags: [["python.svg", "Python"], ["Pandas.svg", "Pandas"], ["scikit-learn.svg", "scikit-learn"]],
    link: "https://colab.research.google.com/drive/1RiM9VxjrvzxtBcZwB_KD6JpLAl-JKflb?usp=sharing",
    linkLabel: "Open in Colab",
    linkLabel_id: "Buka di Colab",
  },
  {
    when: 202505,
    date: "Apr 2025 – May 2025",
    date_id: "Apr 2025 – Mei 2025",
    title: "OptiWeight: AI-Integrated Health Recommendation App",
    title_id: "OptiWeight: Aplikasi Rekomendasi Kesehatan Terintegrasi AI",
    desc: "Developed a mobile app offering personalized weight-optimization plans by integrating Gemini AI with Android and Firebase for real-time health insights. Built a real-time Express.js backend API handling user data, AI prompt generation, authentication, and scalable cloud storage.",
    desc_id: "Mengembangkan aplikasi mobile yang menawarkan rencana optimasi berat badan personal dengan mengintegrasikan Gemini AI bersama Android dan Firebase untuk wawasan kesehatan real-time. Membangun API backend Express.js real-time yang menangani data pengguna, pembuatan prompt AI, autentikasi, dan penyimpanan cloud yang skalabel.",
    tags: [["Android.svg", "Android"], ["javascript.svg", "JavaScript"]],
    link: "https://github.com/deiraaisyar/optiweight-app",
    linkLabel: "View on GitHub",
    linkLabel_id: "Lihat di GitHub",
  },
  {
    when: 202501,
    date: "Jan 2025 – May 2025",
    date_id: "Jan 2025 – Mei 2025",
    title: "HelmAware: Smart Safety Monitoring for Construction Workers",
    title_id: "HelmAware: Pemantauan Keselamatan Cerdas untuk Pekerja Konstruksi",
    thumb: "assets/project_thumbnails/helmaware-sic.png",
    desc: "Built a safety-monitoring dashboard using YOLOv5 and IoT sensors to detect drowsiness and hazards, with Google Gemini AI providing conversational health guidance from Firebase worker data. Implemented a real-time alert system via Telegram bots and Ubidots, with a Streamlit frontend for sensor insights and AI chat.",
    desc_id: "Membangun dashboard pemantauan keselamatan menggunakan YOLOv5 dan sensor IoT untuk mendeteksi kantuk dan bahaya, dengan Google Gemini AI yang memberikan panduan kesehatan konversasional dari data pekerja di Firebase. Mengimplementasikan sistem peringatan real-time via bot Telegram dan Ubidots, dengan frontend Streamlit untuk wawasan sensor dan chat AI.",
    tags: [["python.svg", "Python"], ["yolo.svg", "YOLOv5"], ["Streamlit.svg", "Streamlit"]],
    link: "https://github.com/deiraaisyar/helmaware-final",
    linkLabel: "View on GitHub",
    linkLabel_id: "Lihat di GitHub",
  },
];

const ACHIEVEMENTS = [
  {
    when: 202605, type: "win", badge: "National", badge_id: "Nasional",
    title: "1st Place — CIMSAThon",
    title_id: "Juara 1 — CIMSAThon",
    org: "CIMSA Nasional · May 2026",
    org_id: "CIMSA Nasional · Mei 2026",
    desc: "Built a mobile & web MVP for personalized medication recommendations using RAG-based doctor verification and a Fuzzy TOPSIS decision framework.",
    desc_id: "Membangun MVP mobile & web untuk rekomendasi obat yang dipersonalisasi menggunakan verifikasi dokter berbasis RAG dan kerangka keputusan Fuzzy TOPSIS.",
  },
  {
    when: 202605, type: "finalist", badge: "National", badge_id: "Nasional",
    title: "Finalist — Data Analytics Competition FindIT 2026",
    title_id: "Finalis — Kompetisi Data Analytics FindIT 2026",
    org: "Universitas Gadjah Mada · May 2026",
    org_id: "Universitas Gadjah Mada · Mei 2026",
    desc: "Built a face anti-spoofing model (F1-macro 0.97) using NaFlexViT with FPN and CDC, placing 5th out of 300+ teams.",
    desc_id: "Membangun model anti-spoofing wajah (F1-macro 0,97) menggunakan NaFlexViT dengan FPN dan CDC, meraih peringkat 5 dari 300+ tim.",
  },
  {
    when: 202510, type: "win", badge: "National", badge_id: "Nasional",
    title: "3rd Place — Data Mining HOLOGY 8.0",
    title_id: "Juara 3 — Data Mining HOLOGY 8.0",
    org: "Universitas Brawijaya · Oct 2025",
    org_id: "Universitas Brawijaya · Okt 2025",
    desc: "Developed a crowd detection (MAE 19.6) and localization (MAE 2.0) model using SFANet with an EfficientNet-B1 backbone.",
    desc_id: "Mengembangkan model deteksi kerumunan (MAE 19,6) dan lokalisasi (MAE 2,0) menggunakan SFANet dengan backbone EfficientNet-B1.",
  },
  {
    when: 202509, type: "finalist", badge: "National", badge_id: "Nasional",
    title: "Finalist — AI Innovation Challenge COMPFEST 17",
    title_id: "Finalis — AI Innovation Challenge COMPFEST 17",
    org: "Universitas Indonesia · Sep 2025",
    desc: "Built AI features for BISACare — a health-insurance app with insurance/hospital recommenders, a RAG chatbot, and automated claim-status analysis.",
    desc_id: "Membangun fitur AI untuk BISACare — aplikasi asuransi kesehatan dengan rekomendasi asuransi/rumah sakit, chatbot RAG, dan analisis status klaim otomatis.",
  },
  {
    when: 202507, type: "win", badge: "National", badge_id: "Nasional",
    title: "1st Place — Data Analytics TECHFEST 2025",
    title_id: "Juara 1 — Data Analytics TECHFEST 2025",
    org: "BINUS University · Jul 2025",
    desc: "Led regional fiscal analysis of Indonesia's 2023 fund-allocation data, applying PCA and K-Means clustering to surface disparity patterns and actionable recommendations.",
    desc_id: "Memimpin analisis fiskal daerah atas data alokasi dana Indonesia 2023, menerapkan PCA dan K-Means clustering untuk mengungkap pola disparitas dan rekomendasi yang actionable.",
  },
  {
    when: 202410, type: "win", badge: "Department", badge_id: "Departemen",
    title: "1st Place — Data Royale 2024",
    title_id: "Juara 1 — Data Royale 2024",
    org: "OmahTI UGM & Kotak Riset Sistem Cerdas UGM · Oct 2024",
    org_id: "OmahTI UGM & Kotak Riset Sistem Cerdas UGM · Okt 2024",
    desc: "Developed a top-performing predictive model on Kaggle to win a department-scale data-mining competition.",
    desc_id: "Mengembangkan model prediktif berperforma terbaik di Kaggle untuk memenangkan kompetisi data mining skala departemen.",
  },
  {
    when: 202311, type: "win", badge: "National", badge_id: "Nasional",
    title: "3rd Place — Logic Competition CITE UP 2023",
    title_id: "Juara 3 — Logic Competition CITE UP 2023",
    org: "Universitas Pertamina · Nov 2023",
    desc: "Recognized for logical problem solving and algorithmic thinking in a competition involving C++ code analysis and puzzles.",
    desc_id: "Diakui atas pemecahan masalah logis dan pemikiran algoritmik dalam kompetisi yang melibatkan analisis kode C++ dan teka-teki.",
  },
  {
    when: 202308, type: "finalist", badge: "National", badge_id: "Nasional",
    title: "Finalist — National Paper Research",
    title_id: "Finalis — Riset Paper Nasional",
    org: "Ministry of Environment and Forestry, Republic of Indonesia · Aug 2023",
    org_id: "Kementerian Lingkungan Hidup dan Kehutanan RI · Agu 2023",
    desc: "Selected as a national finalist (top 10) with a proposed eco-enzyme strategy to reduce water pollutants in Setu Babakan.",
    desc_id: "Terpilih sebagai finalis nasional (10 besar) dengan strategi eco-enzyme untuk mengurangi polutan air di Setu Babakan.",
  },
];

const EXPERIENCES = [
  {
    when: 202601, category: "work",
    date: "Jan 2026 – Jul 2026",
    title: "Data Engineer Freelancer",
    org: "PT Global Data Inspirasi · Remote (Yogyakarta, Indonesia)",
    desc: "Analyzed raw Excel datasets from an aviation company to benchmark key data-handling and landing costs, and engineered automated ETL pipelines using Apache Airflow to ingest unstructured flight data into structured databases — supporting CRS documentation to align the architecture with client needs.",
    desc_id: "Menganalisis dataset Excel mentah dari perusahaan penerbangan untuk membandingkan biaya penanganan data dan pendaratan utama, serta merancang pipeline ETL otomatis menggunakan Apache Airflow untuk memasukkan data penerbangan tak terstruktur ke basis data terstruktur — mendukung dokumentasi CRS agar arsitektur selaras dengan kebutuhan klien.",
  },
  {
    when: 202512, category: "org",
    date: "Dec 2025 – Present",
    date_id: "Des 2025 – Sekarang",
    title: "Data Science & Artificial Intelligence Lead",
    org: "OMAH TI UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Mentored 9 junior staff across ML, NLP, computer vision, RAG, MLOps, and AI agents through hands-on sessions — leading 5 of 9 members to win or reach finals in national-level data & AI competitions.",
    desc_id: "Membimbing 9 staf junior di bidang ML, NLP, computer vision, RAG, MLOps, dan AI agents melalui sesi praktik langsung — mengantar 5 dari 9 anggota menang atau menjadi finalis di kompetisi data & AI tingkat nasional.",
  },
  {
    when: 202512, category: "org",
    date: "Dec 2025 – Present",
    date_id: "Des 2025 – Sekarang",
    title: "Data Mining & Artificial Intelligence Vice Lead",
    org: "KOMATIK UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Assisted in mentoring 18 members in preparation for data science and AI competitions.",
    desc_id: "Membantu membimbing 18 anggota dalam persiapan kompetisi data science dan AI.",
  },
  {
    when: 202412, category: "org",
    date: "Dec 2024 – Dec 2025",
    date_id: "Des 2024 – Des 2025",
    title: "Data Science & Artificial Intelligence Member",
    org: "OMAH TI UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Gained hands-on experience in tabular analysis, NLP, and computer vision through collaborative projects and internal training. Served as Project Officer for Data Royale 2025, leading a department-scale competition for 25 freshman teams on multiclass classification of poisonous mushrooms.",
    desc_id: "Memperoleh pengalaman langsung dalam analisis tabular, NLP, dan computer vision melalui proyek kolaboratif dan pelatihan internal. Menjadi Project Officer Data Royale 2025, memimpin kompetisi skala departemen untuk 25 tim mahasiswa baru tentang klasifikasi multiclass jamur beracun.",
  },
  {
    when: 202411, category: "org",
    date: "Nov 2024 – Dec 2025",
    date_id: "Nov 2024 – Des 2025",
    title: "Data Mining & Artificial Intelligence Member",
    org: "KOMATIK UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Learned machine learning, computer vision, and neural networks through training and collaborative projects.",
    desc_id: "Mempelajari machine learning, computer vision, dan neural network melalui pelatihan dan proyek kolaboratif.",
  },
  {
    when: 202411, category: "org",
    date: "Nov 2024 – Jun 2025",
    title: "Hacker Member",
    org: "Google Developer Group on Campus UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Built OptiWeight, a personalized body-composition monitoring app integrating Gemini AI, Express.js, Android, and Firebase. Implemented AI-driven chat support and real-time data sync to deliver smart feedback and actionable health insights.",
    desc_id: "Membangun OptiWeight, aplikasi pemantauan komposisi tubuh personal yang mengintegrasikan Gemini AI, Express.js, Android, dan Firebase. Mengimplementasikan dukungan chat berbasis AI dan sinkronisasi data real-time untuk memberikan umpan balik cerdas dan wawasan kesehatan yang actionable.",
  },
  {
    when: 202503, category: "org",
    date: "Mar 2025 – Mar 2026",
    title: "Junior Staff of Data Research",
    org: "BEM KM UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Built GamaData #1 by conducting sentiment analysis on public responses regarding the TNI Bill using Twitter data through web scraping. Developed GamaData #2 by forecasting Indonesia's poverty line from 2025 to 2030 using real economic and demographic datasets with Prophet and ARIMA models.",
    desc_id: "Membangun GamaData #1 dengan melakukan analisis sentimen atas respons publik terhadap RUU TNI menggunakan data Twitter melalui web scraping. Mengembangkan GamaData #2 dengan memprediksi garis kemiskinan Indonesia 2025–2030 menggunakan dataset ekonomi dan demografi nyata dengan model Prophet dan ARIMA.",
  },
  {
    when: 202409, category: "org",
    date: "Sep 2024 – Present",
    date_id: "Sep 2024 – Sekarang",
    title: "Staff of Bureau of Student Resource Management",
    org: "BEM KM FMIPA UGM · On-site (Yogyakarta, Indonesia)",
    desc: "Contributed to the organizational and strategic planning of BEM KM FMIPA UGM, focusing on human-resource management and student engagement. Supported coordination across internal bureaus to ensure smooth event execution and administrative documentation.",
    desc_id: "Berkontribusi pada perencanaan organisasi dan strategis BEM KM FMIPA UGM, berfokus pada manajemen sumber daya manusia dan keterlibatan mahasiswa. Mendukung koordinasi antar-biro internal untuk memastikan kelancaran pelaksanaan acara dan dokumentasi administrasi.",
  },
];

/* ---------- rendering helpers ---------- */

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}

/* Pick the EN or ID value for a field. ID uses `<key>_id` when present. */
function L(item, key) {
  const idKey = key + "_id";
  if (typeof currentLang !== "undefined" && currentLang === "ID" && item[idKey] != null) {
    return item[idKey];
  }
  return item[key];
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
  const date = p.date ? `<span class="card-date">${esc(L(p, "date"))}</span>` : "";
  const thumb = p.thumb
    ? `<div class="card-thumb"><img src="${p.thumb}" alt="${esc(L(p, "title"))}" loading="lazy" /></div>`
    : `<div class="card-thumb card-thumb--soon"><span data-i18n="projects.soon">Prototype coming soon</span></div>`;
  return `<article class="project-card">
    ${thumb}
    <div class="card-body">
      <h3 class="card-title">${esc(L(p, "title"))}</h3>
      <p class="card-desc">${esc(L(p, "desc"))}</p>
      <div class="card-tags">${tags}</div>
      ${date}
      <a href="${p.link}" class="card-link" target="_blank" rel="noopener">${esc(L(p, "linkLabel"))} &rarr;</a>
    </div>
  </article>`;
}

function achievementCardHTML(a) {
  const icon = a.type === "win" ? "trophy.svg" : "medal.svg";
  return `<article class="achievement-card">
    <div class="achievement-icon"><img src="assets/icons/${icon}" alt="" class="icon achievement-ico" /></div>
    <div class="achievement-body">
      <span class="achievement-badge">${esc(L(a, "badge"))}</span>
      <h3 class="achievement-title">${esc(L(a, "title"))}</h3>
      <p class="achievement-org">${esc(L(a, "org"))}</p>
      <p class="achievement-desc">${esc(L(a, "desc"))}</p>
    </div>
  </article>`;
}

function timelineItemHTML(e) {
  return `<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="timeline-date">${esc(L(e, "date"))}</span>
      <h3 class="timeline-title">${esc(L(e, "title"))}</h3>
      <p class="timeline-org">${esc(L(e, "org"))}</p>
      <p class="timeline-desc">${esc(L(e, "desc"))}</p>
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
