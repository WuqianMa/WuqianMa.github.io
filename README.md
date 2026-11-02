# Wuqian Ma — Trilingual Portfolio

Source for [wuqianma.github.io](https://wuqianma.github.io/), a lightweight portfolio for applied AI, data analytics and research software.

## Languages

Choose **English, Français, or 中文** from the header. Content is translated in place, with a shareable `?lang=fr` or `?lang=zh` URL; English is the default. The selected language is saved locally. The original English page remains visible without JavaScript.

- [English](https://wuqianma.github.io/)
- [Français](https://wuqianma.github.io/?lang=fr)
- [中文](https://wuqianma.github.io/?lang=zh)

The same **experience** (Dauphine–PSL, Outlier, State Key Laboratory) and **education** (PSL, Efrei, Hainan University) appear in all three languages, based on the owner's LinkedIn export. The Efrei coursework is complete but the final internship required to graduate remains outstanding.

## Features

Responsive portfolio with eight verified public projects grouped into Data & Visualization, Machine Learning, AI & Research and Engineering; project filtering, dark/light theme, accessible language links, reduced-motion support, and contact information. The site is static HTML, CSS and JavaScript with no build process.

## Local development

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/ and try all three languages, filters and themes. English content is maintained in `index.html`; translated text is kept in `script.js` in the `messages` list. Styling is in `styles.css`.

## Publishing

GitHub repository **Settings → Pages → Deploy from a branch → main → /(root)**. See the deployed site at https://wuqianma.github.io/.

Visual graphics are illustrative rather than screenshots or measured findings. Research materials that are not public remain unpublished.

## Recently refreshed work (November 2026)

- **[ADHD & Sex Prediction / WiDS 2025](https://github.com/WuqianMa/ADHD_Gender_classification)** — [live HTML EDA reports](https://wuqianma.github.io/adhd-eda/) (demographic, questionnaire and connectome reports); an academic competition project, not a diagnostic tool.
- **[Facial Keypoint Detection](https://github.com/WuqianMa/Course_Project_Face_Keypoint)** — group deep learning course project on landmark regression, three architectures, deduplication and augmentation ablations; [report](https://github.com/WuqianMa/Course_Project_Face_Keypoint/blob/main/report.pdf). Original training data and checkpoints not included.
- **[Dog Breed Classification](https://github.com/WuqianMa/Course_Project_Dog_Breed_classification)** — controlled image cropping / computer vision study and report.
- **[Connected Components with Spark](https://github.com/WuqianMa/Course_Project_Big_Data_Paradigm)** — PySpark versus Scala iterative connected-components, 20 graphs / 40 experiment logs (group project).
- **[NewsLab](https://github.com/WuqianMa/NewsLab-Controlled-News-Feed-Experiments-in-the-Browser)**, **[Hong Kong Airbnb](https://github.com/WuqianMa/Group-Projects-AI-and-Society)** and **[EU Court LLM agents](https://github.com/WuqianMa/Course_Project_LLM-agent-EUcourt)** are retained and categorized.

Online ADHD reports are copied to `adhd-eda/` for GitHub Pages hosting, with image assets loaded from the originating public repository and its Plotly bundle through the jsDelivr GitHub mirror. Offline self-contained reports remain in the ADHD repository.
