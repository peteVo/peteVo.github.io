# Art direction

## Creative North Star

**An annotated simulation atlas.** The visual language grows from the documented RWTH work: constructing 3D simulation environments and OpenStreetMap city models, while studying machine learning and algorithms. It should feel like a precise, readable record of experiments and engineering decisions, with the person and evidence always more prominent than the decoration.

## Signature move

A large, explicitly labeled **schematic city model** occupies the hero beside Trong Phat Vo’s name. Its road grid, blocks, start/end markers, and single route connect data to a Unity world. The route draws once on load; the rest of the site carries the idea through numbered sections, rule lines, dates, and evidence-led experience entries. The illustration does not imply a specific real city or project screenshot.

## Typography

- Self-hosted Lora for the oversized name, section statements, and work titles. Its italic changes the rhythm of the name and contact invitation. Lora includes Vietnamese glyphs and diacritics, so translated headings keep one consistent serif face.
- Segoe UI with Arial fallback for body copy and controls.
- Consolas with Courier New fallback for small labels, dates, and map annotations.

The Lora font files and their OFL license live in `assets/fonts/`. They load from the site itself, with Georgia as a fallback, so the page remains legible while loading or offline without requesting a third-party font service.

## Color and material

- Light: warm paper `#f4f1e9`, graphite `#20292c`, mineral green `#326b61`, and accessible red oxide `#ab4b30`.
- Dark: deep blue-green paper `#17262a`, warm ink `#f1eee3`, and a lighter green for technical labels.
- The contact panel reverses the material in each theme. Its accent is separately tuned for contrast in both modes.
- Fine rules, not shadows or glass, define hierarchy.

## Grid and motion

The desktop first viewport is an asymmetric two-column composition: identity and CV-backed introduction on the left, annotated city model on the right. On phones and tablets, the diagram follows the name and role so the visual identity arrives in the first viewport. Lower sections use a narrow index rail and a wider reading column. Experience gets detailed rows with real project names, education a restrained data table, and technical practice a ruled index with tools tied to use. Section scales and spacing vary according to content density.

Motion expresses one idea: the map route and its underlay trace together once. Links and controls respond quickly, anchors scroll smoothly, and no content waits behind reveal animations. Reduced-motion preference disables the route animation and smooth scrolling.

## Anti-references

1. Black background with a purple or blue glow.
2. Terminal windows, code rain, and pretend command output.
3. Floating cards or glass panels used as default containers.
4. Generic “developer” stock imagery or an invented project screenshot.
5. Skill bars, inflated metrics, and unexplained percentages.
6. Repeated fade-up animations on every section.
7. Rounded-pill overload, gradient buttons, and decorative blobs.
8. Research or robotics claims beyond the supplied CV.
