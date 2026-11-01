# EliteHomes design system

Reference: https://elite-homes-lovat.vercel.app/ (resolved from the supplied TinyURL).
Inspected before implementation at 1440 × 900, 768 × 1024, and 390 × 844.
Reference screenshots and measurements are retained in `.reference/`.

## Foundation

- Framework: local Bootstrap 5.3.3 CSS and bundle; local Font Awesome 7.3.1.
- Font: `Arial, sans-serif`. The reference declares `EXO, sans-serif`, but does not load EXO; the rendered fallback is Arial. The linked Inter font is not used by its body.
- Body: 16px / 24px. Small: 14px / 20px. Caption: 12px / 16px.
- Weights: normal 400, medium 500, semibold 600, bold 700, display 900.
- Hero: 48px / 60px, increasing to 60px / 75px at 1024px.
- Section titles: 30px / 36px; 36px / 40px at 768px; 48px / 48px at 1024px.
- Section descriptions: 20px / 28px, max width 672px (contact uses 32.5px line height).
- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px.
- Section padding: 80px vertically; contact 96px; footer 48px.
- Container side padding: 24px. Reference container widths: 640 / 768 / 1024 / 1280 / 1536px at the corresponding breakpoints. At 1440px it is 1280px wide, including padding.
- Inner widths: hero/FAQ 896px, services/carousel 1152px.
- Radii: controls 8px; contact controls 12px; cards 16px; pills 999px.
- Shadows: `0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a`; hero uses a larger 25px shadow.

## Palette

CSS variables in `css/main.css` preserve the reference's exact OKLCH colors, avoiding approximations from screenshots.

| Role | Reference color |
| --- | --- |
| Primary violet | `oklch(54.1% .281 293.009)` |
| Secondary purple | `oklch(55.8% .288 302.321)` |
| Dark violet | `oklch(38% .189 293.745)` |
| Dark purple | `oklch(38.1% .176 304.987)` |
| Amber title accent | `oklch(76.9% .188 70.08)` |
| Pale violet | `oklch(96.9% .016 293.756)` |
| Violet border | `oklch(89.4% .057 293.283)` |
| Main text | `oklch(21% .034 264.665)` |
| Secondary text | `oklch(44.6% .03 256.802)` |
| Muted text | `oklch(55.1% .027 264.364)` |
| Section background | `oklch(98.5% .002 247.839)` |
| Base background | `#fafaf9` |

## Responsive plan

1. Header: fixed 80px content plus 1px border. Desktop navigation from 1024px; Bootstrap Collapse below that. Properties uses a Bootstrap Dropdown with four menu columns on desktop and stacked groups on mobile.
2. Hero: viewport minimum height, fixed centered background with the reference overlay. Desktop padding 80px top; below 1024px, 160px top and 80px bottom. Search first row is 2:1:1 desktop and stacked below; second row four columns desktop and two below. Statistics follow the same 4-to-2 behavior.
3. Properties: three Bootstrap Cards in equal columns from 1024px; one column below. Fixed 256px image height, 24px bodies, 32px gaps.
4. Services: Bootstrap Tabs wrap into multiple lines on phones. Two equal columns from 1024px, stacked below with 48px gap. Image 384px high and statistic badge offset 24px.
5. Testimonials: Bootstrap Carousel, 32px card padding, 16px slide side padding. Arrow controls and 80px side gutters from 768px; stacked author details below 768px. Four 12px indicators, 8px apart.
6. FAQ: Bootstrap Accordion, all initially collapsed, 24px between cards. Buttons use 24px vertical and 32px horizontal padding.
7. Contact: four cards desktop, two tablet, one phone. Main content 1:2 desktop and stacked below 1024px. Form pairs from 768px; 32px phone / 40px tablet padding. Decorative circles desktop only.
8. Footer: horizontal from 768px; stacked below. Preserve reference text and spacing.

## Verification

Compare each section and complete-page screenshots against the reference at the three measured sizes. Check additional narrow and breakpoint widths for horizontal overflow. Exercise Bootstrap navigation, dropdown, tabs, carousel, accordion, and form validation. Static page interactions do not imply a property database or a contact delivery service.

### Completed checks

- All six main sections match the reference's measured vertical positions and heights at 1440px, 768px, and 390px. Hero, service text/image, FAQ, contact cards, and contact form measurements were compared directly.
- No horizontal page overflow, broken images, failed asset requests, or JavaScript errors at the eight tested widths (320–1920px).
- Desktop dropdown and Escape handling, mobile menu and property submenu, all service tabs, carousel arrows/indicators, exclusive FAQ expansion, filtering/reset, favorite state, tour inquiry prefilling, and native form validation passed.
- Carousel height remains stable across slides, matching the reference behavior.
- Minor icon shape differences can remain because the supplied Font Awesome is version 7 while the reference uses version 6 SVG icons.
