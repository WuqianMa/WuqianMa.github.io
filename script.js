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


  // Website language options. English text remains readable even if JS is disabled.
  // Only fixed authored translations are written to innerHTML, never untrusted input.
  var messages = [[".skip-link","Aller au contenu principal","跳转到主要内容"],[".brand-label small","/ PORTFOLIO","/ 作品集"],[".nav-links a[href='#projects']","Projets","项目"],[".nav-links a[href='#about']","À propos","关于我"],[".nav-links a[href='#background']","Parcours","经历"],[".nav-links a[href='#contact']","Contact","联系"],[".eyebrow","<span class=\"eyebrow-line\"></span> IA APPLIQUÉE <span class=\"eyebrow-sep\">/</span> ANALYSE DE DONNÉES <span class=\"eyebrow-sep\">/</span> RECHERCHE","<span class=\"eyebrow-line\"></span> 应用 AI <span class=\"eyebrow-sep\">/</span> 数据分析 <span class=\"eyebrow-sep\">/</span> 科研"],["#hero-title","Rendre les questions<br>complexes <em>visibles.</em>","让复杂问题<br><em>清晰可见。</em>"],[".hero-lede","Je suis Wuqian. J’aime concevoir des outils à l’intersection de l’intelligence artificielle, des données et de la recherche empirique.","你好，我是 Wuqian。我希望将人工智能、数据与实证研究结合起来，开发真正有用的工具。"],[".hero-actions .button-primary","Voir mes projets <span aria-hidden=\"true\">↗</span>","浏览精选项目 <span aria-hidden=\"true\">↗</span>"],[".hero-actions .button-secondary","Profil GitHub <span aria-hidden=\"true\">↗</span>","GitHub 主页 <span aria-hidden=\"true\">↗</span>"],[".hero-location","<span class=\"status-dot\" aria-hidden=\"true\"></span> Basée près de Paris, France <span class=\"hero-location-separator\">·</span> Recherche interdisciplinaire","<span class=\"status-dot\" aria-hidden=\"true\"></span> 常驻法国巴黎附近 <span class=\"hero-location-separator\">·</span> 跨学科研究与实践"],[".scroll-indicator","DÉFILER POUR DÉCOUVRIR <span>↓</span>","向下探索 <span>↓</span>"],["#projects .section-kicker","01 / PROJETS SÉLECTIONNÉS","01 / 精选项目"],["#projects-title","Des idées <em>concrètes.</em>","让想法<em>落地。</em>"],["#projects .section-intro","Une sélection d’outils de recherche, de visualisations interactives et de projets logiciels, à différents stades de développement.","精选研究工具、交互式可视化和软件项目，涵盖不同的应用场景与开发阶段。"],["[data-filter='all']","Tous les projets <span>04</span>","全部项目 <span>04</span>"],["[data-filter='data']","Données et visualisation","数据与可视化"],["[data-filter='ai']","IA et recherche","人工智能与研究"],["[data-filter='engineering']","Ingénierie","工程开发"],[".project-card:nth-child(1) .project-category","VISUALISATION · PROJET DE GROUPE","数据可视化 · 小组项目"],[".project-card:nth-child(1) .project-content > p","Tableau de bord interactif pour explorer les annonces et les avis Airbnb à Hong Kong : cartes, comparaisons par quartier et visualisations textuelles.","通过交互式仪表板探索香港 Airbnb 房源与评论的地理分布，包括地图、地区比较和评论文本可视化。"],[".project-card:nth-child(1) .project-links a:nth-child(1)","Tableau de bord ↗","在线仪表板 ↗"],[".project-card:nth-child(1) .project-links a:nth-child(2)","Code source ↗","源代码 ↗"],[".project-card:nth-child(2) .project-category","LOGICIEL DE RECHERCHE · HACKATHON","科研软件 · 黑客松"],[".project-card:nth-child(2) .project-content > p","Prototype configurable pour des expériences sur les fils d’actualité dans un navigateur, avec suivi des interactions et export structuré. Développé avec des agents d’IA.","可配置的浏览器新闻信息流实验原型，支持参与者交互记录和结构化数据导出，使用 AI Agent 辅助开发。"],[".project-card:nth-child(2) .project-links a:nth-child(1)","Démo interactive ↗","交互演示 ↗"],[".project-card:nth-child(2) .project-links a:nth-child(2)","Code et démonstrations ↗","源代码与演示 ↗"],[".project-card:nth-child(3) .project-category","ÉVALUATION LLM · EXPLORATION","大语言模型评估 · 探索性研究"],[".project-card:nth-child(3) .project-content > p","Environnement expérimental pour vérifier les références juridiques d’agents d’IA à l’aide d’un corpus local de droit européen. Les premières exécutions ne sont pas statistiquement concluantes.","使用本地欧盟法规语料库核查模拟 AI Agent 的法律引用。初步单次实验仅用于方法展示，不构成统计结论。"],[".project-card:nth-child(3) .project-links a","Découvrir le projet ↗","查看项目 ↗"],[".project-card:nth-child(4) .project-category","GÉNIE LOGICIEL · PROJET UNIVERSITAIRE","软件工程 · 课程项目"],[".project-card:nth-child(4) .project-content > p","Application web universitaire consacrée au backend, aux conteneurs, aux tests automatisés et à l’intégration continue.","探索后端开发、容器化、自动化测试及持续集成的课程 Web 应用。"],[".project-card:nth-child(4) .project-links a","Voir le dépôt ↗","查看仓库 ↗"],[".all-work-link a","Autres projets sur GitHub <span>↗</span>","在 GitHub 查看更多项目 <span>↗</span>"],["#about .section-kicker","02 / MA DÉMARCHE","02 / 工作方式"],["#about-title","Entre recherche<br>et <em>réalisation.</em>","连接研究<br>与<em>实践。</em>"],["#about .about-lead","J’aime les questions qui demandent à la fois une réflexion analytique et des outils concrets.","我喜欢同时需要分析思考与动手实现的研究课题。"],["#about .about-right > p:nth-of-type(2)","Je m’intéresse à la recherche d’information, à l’IA documentaire, à l’évaluation des LLM et à la visualisation de données. J’aime transformer les méthodes de recherche en interfaces qui permettent d’examiner et de comparer l’information.","我的兴趣包括信息检索、文档 AI、大语言模型评估和数据可视化。我喜欢将研究方法转化为帮助人们检查、比较和理解信息的界面。"],["#about .about-right > p:nth-of-type(3)","Mes projets comprennent des travaux universitaires, des prototypes exploratoires et des missions de recherche. Je veille à documenter les méthodes, les limites et l’usage des outils d’IA.","我的项目包括课程实践、探索性原型和科研辅助工作。我重视透明记录研究方法、局限性和 AI 开发工具的使用。"],[".interest-list span:nth-child(1)","Recherche d’information","信息检索"],[".interest-list span:nth-child(2)","IA documentaire","文档 AI"],[".interest-list span:nth-child(3)","Visualisation de données","数据可视化"],[".interest-list span:nth-child(4)","Évaluation des LLM","大语言模型评估"],[".interest-list span:nth-child(5)","Logiciels de recherche","科研软件"],["#background .section-kicker","03 / PARCOURS","03 / 个人经历"],["#background-title","Mon <em>parcours.</em>","一路走来的<em>探索。</em>"],["#background .section-intro","Expériences en recherche, évaluation des modèles d’IA et automatisation des données, et formation pluridisciplinaire.","研究、AI 模型评估与数据自动化经历，以及跨学科学习背景。"],["#background .background-column:nth-child(1) > h3","Expérience professionnelle","工作与研究经历"],["#background .background-column:nth-child(2) > h3","Formation","教育背景"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(1) .timeline-date","FÉV. – JUIN 2026 · PARIS","2026.02 – 2026.06 · 巴黎"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(1) h4","Stagiaire de recherche","研究实习生"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(1) > p:not(.timeline-org)","Extraction et normalisation de PDF académiques ; enrichissement des profils d’articles avec des métadonnées de conférence ; préparation de représentations pour la similarité par embeddings et les recommandations de sessions sous contraintes ; évaluation par des métriques de recherche d’information.","提取并规范化学术 PDF 文本，结合会议元数据构建论文资料，准备基于嵌入向量相似性及约束条件的会议分组推荐，并使用信息检索指标评价结果。"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(1) .timeline-note","Une partie du code et des données de recherche n’est pas publique.","部分科研代码及资料未公开。"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(2) .timeline-date","NOV. 2024 – JANV. 2025 · FRANCE","2024.11 – 2025.01 · 法国"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(2) h4","Évaluatrice de modèles d’IA","AI 模型训练与评估"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(2) > p:not(.timeline-org)","Évaluation de l’exactitude et de la pertinence de réponses d’IA à des problèmes de mathématiques ; création et résolution de questions ; comparaison des réponses selon des critères explicites.","评估 AI 对数学问题的回答准确性与相关性；编写并解答数学题，按既定标准比较和排序模型回答。"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(3) .timeline-date","JANV. 2018 – JUIL. 2019 · HAIKOU","2018.01 – 2019.07 · 海口"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(3) h4","Assistante de recherche · Analyse de données et automatisation","本科科研助理 · 数据分析与自动化"],["#background .background-column:nth-child(1) .timeline-item:nth-of-type(3) > p:not(.timeline-org)","Automatisation des traitements avec Excel VBA ; nettoyage, analyse et visualisation des mesures expérimentales. Participation aux expériences de synthèse de polymères à base de PVA et d’adsorption d’uranium par spectroscopie UV-Visible.","使用 Excel VBA 自动化处理实验数据，清洗、分析及可视化实验测量数据；参与聚乙烯醇（PVA）基聚合物合成及紫外–可见光谱法铀吸附实验。"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(1) .timeline-date","SEPT. 2025 – OCT. 2028 · PÉRIODE INDIQUÉE","2025.09 – 2028.10 · LINKEDIN 所列期间"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(1) h4","Études de master · Intelligence artificielle et société","硕士阶段 · 人工智能与社会"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(1) > p:not(.timeline-org)","M1 validé ; année de césure autorisée. Dates indiquées sur LinkedIn.","已完成 M1，获批间隔年；日期为 LinkedIn 所列期间。"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(2) .timeline-date","AOÛT 2021 – AVR. 2024 · PÉRIODE DE COURS","2021.08 – 2024.04 · 课程学习期间"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(2) h4","Études de niveau master · IA / Big Data","硕士阶段课程 · 人工智能 / 大数据"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(2) > p:not(.timeline-org)","Enseignements terminés ; stage de fin d’études obligatoire encore requis pour obtenir le diplôme. Les dates LinkedIn ne signifient pas que le diplôme est obtenu.","课程已完成，仍须完成规定的毕业实习才能取得学位；LinkedIn 所列时间不代表学位已经授予。"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(3) .timeline-date","JUIN 2016 – JUIN 2020","2016.06 – 2020.06"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(3) h4","Bachelor of Engineering · Matériaux polymères et ingénierie","工学学士 · 高分子材料与工程"],["#background .background-column:nth-child(2) .timeline-item:nth-of-type(3) > p:not(.timeline-org)","Formation d’ingénierie avec une expérience de recherche en laboratoire et d’analyse de données expérimentales.","高分子材料工程本科学习，具有实验室科研与实验数据分析经验。"],["#contact .section-kicker","04 / CONTACT","04 / 联系方式"],["#contact-title","Une question<br>ou une idée ? <em>Échangeons !</em>","有问题或想法？<br><em>欢迎联系。</em>"],["#contact .contact-inner > p:not(.section-kicker)","Un projet en IA appliquée, données ou recherche interdisciplinaire ? Contactez-moi par courriel, GitHub ou LinkedIn.","如果你对应用 AI、数据项目或跨学科研究感兴趣，欢迎通过邮件、GitHub 或 LinkedIn 联系我。"],["#contact .contact-actions .button-primary","Envoyer un courriel <span aria-hidden=\"true\">↗</span>","发送邮件 <span aria-hidden=\"true\">↗</span>"],["#contact .contact-actions .button-secondary:nth-child(2)","Mon GitHub <span aria-hidden=\"true\">↗</span>","GitHub 主页 <span aria-hidden=\"true\">↗</span>"],[".footer-inner > span:nth-child(2)","Créé avec curiosité et soin.","因好奇而探索，用心去构建。"],[".footer-inner > a","Retour en haut ↑","返回顶部 ↑"]];
  var translated = messages.map(function (r) {
    var element = document.querySelector(r[0]);
    return element ? { element: element, en: element.innerHTML, fr: r[1], zh: r[2] } : null;
  }).filter(Boolean);
  var languageLinks = Array.prototype.slice.call(document.querySelectorAll("[data-language]"));
  var activeLanguage = "en";
  function setLanguage(lang, updateUrl) {
    if (["en","fr","zh"].indexOf(lang) === -1) lang = "en";
    activeLanguage = lang;
    translated.forEach(function (r) { r.element.innerHTML = r[lang]; });
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
    languageLinks.forEach(function (link) {
      if (link.getAttribute("data-language") === lang) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    document.title = lang === "fr" ? "Wuqian Ma — IA, données et logiciels de recherche" :
      lang === "zh" ? "Wuqian Ma — 人工智能、数据与科研软件" : "Wuqian Ma — AI, Data & Research Software";
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", lang === "fr" ?
      "Portfolio de Wuqian Ma : IA appliquée, analyse de données et recherche." :
      lang === "zh" ? "Wuqian Ma 的作品集：应用人工智能、数据分析与科研经历。" :
      "Wuqian Ma — portfolio in applied AI, data analytics, information retrieval and research software.");
    try { localStorage.setItem("portfolio-language", lang); } catch (e) { /* optional */ }
    if (updateUrl && window.history && window.URL) {
      var u = new URL(window.location.href);
      if (lang === "en") u.searchParams.delete("lang");
      else u.searchParams.set("lang", lang);
      window.history.replaceState(null, "", u.toString());
    }
  }
  var incomingLanguage = "";
  try {
    incomingLanguage = new URL(window.location.href).searchParams.get("lang") || localStorage.getItem("portfolio-language") || "en";
  } catch (e) { incomingLanguage = "en"; }
  setLanguage(incomingLanguage, false);
  languageLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      setLanguage(link.getAttribute("data-language"), true);
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