# Hongyi Wang — Academic homepage

A minimal, responsive academic homepage for GitHub Pages. No build step or external assets are required.

## Files

- `index.html`: biography and current research.
- `papers.html`, `talks.html`, `background.html`, `personal.html`: separate pages for each section.
- `styles.css`: responsive typography and layout.
- `script.js`: accessible mobile menu and skip-link focus. Navigation between sections uses separate HTML pages. Without JavaScript, the mobile navigation remains visible.
- `assets/hongyi-wang-cv.pdf`: the current academic CV, including the homepage link.
- `assets/hongyi-wang.jpg`: the supplied portrait; displayed with CSS cropping.
- `assets/slides/`: the three original talk PDFs, renamed in English and linked from Talks.

Run locally with `python3 -m http.server 8767`, then open `http://127.0.0.1:8767`.

## Updating content

Keep publication states explicit: accepted articles remain **Accepted** until publication; unfinished work remains **Manuscript in preparation**. Add manuscript downloads only when a public version is ready. The published AiML paper links to its EPTCS DOI.

The About page uses the user-supplied real photograph. Keep its identity and original pixels; cropping is controlled by CSS. About contains the current affiliation, supervisor, research focus, a brief undergraduate-degree introduction and portrait; papers, talks and full background have their own pages. The contact footer stays fixed at the bottom of the viewport, in its own layout row. Long content scrolls within the main area so the footer never covers text.

## References for information structure

- [Jack McKoen](https://mckoen.ca/): concise student profile and publications on one page.
- [Yifeng Ding](https://voidprove.github.io/research.html): clear paper metadata and publication states.
- [Adam Bjorndahl](https://www.adambjorndahl.com/papers): the Papers label.
- [Wesley Holliday](https://sites.google.com/site/wesholliday/): clear separation of paper and publisher links.

The design and code were created afresh; the former sample website was not used as a template.
