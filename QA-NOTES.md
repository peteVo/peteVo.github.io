# Redesign and QA notes

## Source and content review

The former site and its HTML/CSS/JS, both CVs, the RWTH transcript, and the full redesign brief were reviewed before implementation. The new copy restores the German tutoring, Phu Nhuan High School, Fizzy Summer School, BWINF grading, awards, languages, AVR LED-matrix work, DeepLearning.AI courses, and documented technical examples. Grade **2.0** and **127/180 ECTS** are labeled as of the transcript dated 19 September 2026. Robotics and reinforcement learning are marked as interests; no projects or employers were added for them.

## Visual passes

1. **Navigation and first viewport:** built a separate hero prototype, rendered it at desktop and mobile sizes, then refined the oversized name, map annotation, type balance, and mobile stacking before extending the system.
2. **Full-site pass 1:** rendered the English desktop page in both themes and the mobile layout. Fixed a hidden mobile menu, sticky-header anchor position, an overlong 320px German heading, and narrow map captions.
3. **Full-site pass 2:** reviewed experience, education, practice, awards, and contact on desktop and German/Vietnamese mobile screens. Corrected the dark contact accent to a 4.55:1 ratio against its panel, rebuilt the social image to match the new art direction, and removed an external font request. A print preview exposed a long, fragmented output; the print stylesheet was tightened to two A4 pages with the education section starting on page two.

Final screenshots are delivered separately as `desktop-en-light.png`, `desktop-en-work.png`, `desktop-en-dark.png`, `mobile-de-dark.png`, `mobile-de-contact-dark.png`, and `mobile-vi-320-light.png`.

## Functional checks

- Automated browser checks passed at **320px, 390px, 768px, 1024px, 1440px, and 1920px**, with 320px checks in all three locales, without horizontal overflow or console errors.
- All three HTML pages contain localized text, one H1, canonical and alternate-language links, descriptions, Open Graph metadata, and valid `ProfilePage` JSON-LD. Internal anchor targets resolve; stylesheet, script, icon, social PNG, sitemap, robots file, and language routes returned HTTP 200.
- Theme persists through reload and language switching, while a first visit follows the system theme; language switching preserves the section hash. The mobile menu opens/closes, closes on Escape and link selection, and returns focus on Escape.
- Keyboard Tab reveals the skip link with a visible outline. Reduced-motion preference disables the route animation and smooth scrolling.
- Contact accent in dark mode measures **4.55:1** for large text; body text on the contact panel measures **12.74:1**. Email and GitHub links use the CV-provided destinations. The GitHub profile opened successfully in a real browser.
- Print CSS was rendered to PDF and visually reviewed as **two A4 pages**. The map, header, and skip link are hidden in print; the email remains visible.
- The initial English page uses about **15 KB HTML, 21 KB CSS, and 2.3 KB JavaScript** before compression. The hero graphic is inline SVG; the 76 KB PNG is only for social sharing metadata. There are no runtime packages, web fonts, videos, canvases, or third-party scripts.

Publishing has not been performed. The planned canonical address returned GitHub Pages 404 at delivery; search indexing can be checked only after the site is live there.
