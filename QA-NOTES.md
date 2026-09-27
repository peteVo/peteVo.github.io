# Redesign and QA notes

## Source and content review

The former site and its HTML/CSS/JS, both CVs, the RWTH transcript, and the full redesign brief were reviewed before implementation. The new copy restores the German tutoring, Phu Nhuan High School, Fizzy Summer School, BWINF grading, awards, languages, AVR LED-matrix work, DeepLearning.AI courses, and documented technical examples. Grade **2.0** and **127/180 ECTS** are labeled as of the transcript dated 19 September 2026. Robotics and reinforcement learning are marked as interests; no projects or employers were added for them.

## Independent critique and polish — 27 September 2026

The actual rendered site was reviewed at desktop, 768px tablet, 390px mobile, and 320px narrow mobile in English, German, and Vietnamese. The review covered both themes, navigation, lower sections, and print output. Severity follows `frontend-master`.

- **P0:** None observed in the inspected states.
- **P1, fixed:** The mobile opening buried its defining city diagram below the first viewport. The three-column skills layout and repeated oversized section statements looked like a portfolio template. Broad slogans obscured concrete CV evidence, while the actual Fizzy-Ball and Bicycle Simulation names were visually secondary. The brand and footer “back to top” links targeted a sticky header and failed to return to the page start. The print layout left an award/contact orphan on a nearly empty extra page. The route's pale underlay appeared ahead of the animated line.
- **P2, fixed:** Navigation and annotation text were too small; the theme/print glyphs were ambiguous; dark map features lacked separation; repeated section padding weakened pace; long German and Vietnamese labels needed more room; the mobile map key obscured its route origin; some technical annotations remained English in translated pages. The small light-theme terracotta text measured only **3.70:1** contrast.

The polish moves the diagram immediately after the name and role on phones and tablets, converts skills to ruled technical rows, varies section scale and spacing, names real projects in the experience hierarchy, uses direct CV-backed copy, gives theme and print controls recognizable SVG icons, localizes map annotations, synchronizes both route strokes, fixes the top anchor, and restores a two-page print layout. The terracotta text now measures **4.92:1** in light mode and **7.20:1** in dark mode. No open P0/P1/P2 issue was observed in the final inspected states.

## Visual passes

1. **Navigation and first viewport:** built a separate hero prototype, rendered it at desktop and mobile sizes, then refined the oversized name, map annotation, type balance, and mobile stacking before extending the system.
2. **Full-site pass 1:** rendered the English desktop page in both themes and the mobile layout. Fixed a hidden mobile menu, sticky-header anchor position, an overlong 320px German heading, and narrow map captions.
3. **Full-site pass 2:** reviewed experience, education, practice, awards, and contact on desktop and German/Vietnamese mobile screens. Corrected the dark contact accent to a 4.55:1 ratio against its panel, rebuilt the social image to match the new art direction, and removed an external font request. A print preview exposed a long, fragmented output; the print stylesheet was tightened to two A4 pages with the education section starting on page two.
4. **Independent polish pass:** reviewed the completed site afresh in a real browser, applied the fixes above, and rendered it again. A second final inspection caught a route underlay during the load animation, a sticky-anchor bug, and print pagination after the skills layout changed; all were corrected and rerendered.

Final screenshots are delivered separately in `qa-screenshots/`, including desktop light/dark, work, German mobile dark/contact, Vietnamese 320px, and 768px/1024px responsive views.

## Functional checks

- Automated browser checks passed at **320px, 390px, 768px, 1024px, 1440px, and 1920px**, with 320px checks in all three locales, without horizontal overflow or console errors.
- All three HTML pages contain localized text, one H1, canonical and alternate-language links, descriptions, Open Graph metadata, and valid `ProfilePage` JSON-LD. Internal anchor targets resolve; stylesheet, script, icon, social PNG, sitemap, robots file, and language routes returned HTTP 200.
- Theme persists through reload and language switching, while a first visit follows the system theme; language switching preserves the section hash. The mobile menu opens/closes, closes on Escape and link selection, and returns focus on Escape.
- Keyboard Tab reveals the skip link with a visible outline. Reduced-motion preference disables the route animation and smooth scrolling.
- Contact accent in dark mode measures **4.55:1** for large text; body text on the contact panel measures **12.74:1**. Email and GitHub links use the CV-provided destinations. The GitHub profile opened successfully in a real browser.
- Print CSS was rendered to PDF and visually reviewed as **two A4 pages**. The map, header, and skip link are hidden in print; the email remains visible.
- The initial English page uses about **15.5 KB HTML, 27.1 KB CSS, and 2.6 KB JavaScript** before compression. The hero graphic is inline SVG; the 76 KB PNG is only for social sharing metadata. There are no runtime packages, videos, canvases, or third-party scripts.

## Vietnamese type correction — 27 September 2026

Georgia fell back on some Vietnamese display characters, visibly splitting words and accents in headings. The display face is now self-hosted Lora, with normal and italic variable files and the OFL license included under `assets/fonts/`. The change keeps the editorial serif direction and removes mixed-font Vietnamese letterforms. Desktop, 390px mobile, and 320px narrow mobile captures confirmed the reported headings render intact. The regular and italic faces loaded successfully, the full browser QA passed without horizontal overflow or console errors, and the existing EN/DE/VI, theme, and reduced-motion checks remained green.

This polish pass updates local site files only. Verify the public URL and search indexing after publishing these changes.
