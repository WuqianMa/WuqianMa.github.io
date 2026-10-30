# Wuqian Ma — Portfolio Website

Source for [wuqianma.github.io](https://wuqianma.github.io/), a static portfolio highlighting applied AI, data analytics, and research-oriented software.

## Pages and features

- Responsive landing page and curated project cards
- Project filters for **Data & visualization**, **AI & research**, and **Engineering**
- Dark/light theme switcher (saved locally in the browser)
- Background, education, research experience, and contact sections
- Accessible navigation, visible focus states, and reduced-motion support

## Technologies

Plain HTML, CSS, and JavaScript. No build step or framework is required. Google Fonts are optional and have system fallbacks.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000/.

## Publish with GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**. The website should be hosted at https://wuqianma.github.io/ once deployment succeeds. Publishing is controlled by repository settings, not this README.

## Updating the portfolio

- Update page content and external links in `index.html`.
- Update layout, colors, and decorative illustrations in `styles.css`.
- Update project category filters and the theme switcher in `script.js`.

Project-card graphics are decorative illustrations, **not screenshots or measured research results**. For real interfaces and project details, follow each project’s own repository or demo link.

This public website does not publish private research repositories or a downloadable copy of the applicant's CV.
