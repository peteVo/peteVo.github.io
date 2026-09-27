# Trong Phat Vo — portfolio

A static, multilingual portfolio built from the supplied English and German CVs and RWTH transcript. The city model in the hero is an original **schematic illustration**, not a screenshot or a claimed research result. Reinforcement learning and robotics appear only as areas of interest.

## Site

- English: `/` · German: `/de/` · Vietnamese: `/vi/`. Each language has its own rendered HTML and metadata.
- Light and dark themes with a saved preference; responsive navigation; keyboard focus states; reduced-motion support; and a two-page A4 print layout.
- Canonical links, `hreflang`, localized descriptions, Open Graph image, `ProfilePage`/`Person` structured data, `robots.txt`, and `sitemap.xml`.
- No runtime framework, tracking script, or external font request. The only JavaScript handles theme, language, mobile navigation, the year, and printing.

The public contact surface uses the RWTH email and GitHub profile. Street address, phone, birth date, and student identifiers from the source documents are intentionally omitted.

## Preview and edit

Serve this folder as a static site, for example with `python -m http.server 8000`, then open `http://localhost:8000/`. Opening `index.html` directly from disk will not make root-relative language switching behave like a deployed site.

Edit copy in `src/translations.json`, markup in `src/template.html`, and styling in `styles.css`. Run `node build.mjs` to regenerate `/index.html`, `/de/index.html`, and `/vi/index.html`. Node is only needed when editing; published pages have no build requirement.

## Publish and indexing

The current canonical address is `https://petevo.github.io/`. To use it, publish the website files at the root of a public GitHub Pages repository named `peteVo.github.io` under the matching GitHub account. A static host such as Cloudflare Pages also works. If the final public hostname differs, update the domain in `build.mjs`, `src/template.html`, `robots.txt`, and `sitemap.xml`, regenerate the HTML, and deploy **one** canonical site.

After publishing local changes, verify the public pages and submit `/sitemap.xml` in Google Search Console. Search appearance and timing depend on the search engine; metadata cannot guarantee indexing or ranking.

See `DESIGN.md` for art direction and `QA-NOTES.md` for the completed browser and print checks.
