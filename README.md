# Wuqian Ma — Trilingual Portfolio

Source for [wuqianma.github.io](https://wuqianma.github.io/), a lightweight portfolio for applied AI, data analytics and research software.

## Languages

Choose **English, Français, or 中文** from the header. Content is translated in place, with a shareable `?lang=fr` or `?lang=zh` URL; English is the default. The selected language is saved locally. The original English page remains visible without JavaScript.

- [English](https://wuqianma.github.io/)
- [Français](https://wuqianma.github.io/?lang=fr)
- [中文](https://wuqianma.github.io/?lang=zh)

The same **experience** (Dauphine–PSL, Outlier, State Key Laboratory) and **education** (PSL, Efrei, Hainan University) appear in all three languages, based on the owner's LinkedIn export. The Efrei coursework is complete but the final internship required to graduate remains outstanding.

## Features

Responsive portfolio, project filtering, dark/light theme, accessible language links, reduced-motion support, and contact information. The site is static HTML, CSS and JavaScript with no build process.

## Local development

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/ and try all three languages, filters and themes. English content is maintained in `index.html`; translated text is kept in `script.js` in the `messages` list. Styling is in `styles.css`.

## Publishing

GitHub repository **Settings → Pages → Deploy from a branch → main → /(root)**. See the deployed site at https://wuqianma.github.io/.

Visual graphics are illustrative rather than screenshots or measured findings. Research materials that are not public remain unpublished.
