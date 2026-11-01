# EliteHomes

A static recreation of the supplied EliteHomes reference using **Bootstrap 5.3.3**, custom CSS, and the supplied local Font Awesome files. No build step, package installation, or internet connection is needed to display the page.

Open `index.html` directly or use your editor's Live Server. An optional local server:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173`.

- `index.html`: complete static page with Bootstrap components.
- `css/main.css`: extracted design tokens, component customization, and responsive rules.
- `js/main.js`: property filtering, favorites, inquiry prefilling, and form feedback.
- `js/theme.js`: light/dark theme selection, device color preference, and saved theme restoration before the page renders.
- `DESIGN-SYSTEM.md`: measurements, palette, typography, and responsive plan.
- `.reference/`: reference screenshots, local screenshots, measurements, and browser QA results. These files are development evidence and are not loaded by the page.

Bootstrap CSS/JS, icons, fonts, and images are local. The original supplied assets are preserved; additional matching reference assets use the `reference-` prefix.

The contact form validates input but has no delivery backend. Search filters the three displayed properties. Favorites last for the current page session.

Use the sun/moon button in the header to switch between light and dark mode on desktop or mobile. The site follows the device color setting until you choose a theme, then remembers that choice in local storage and synchronizes it across tabs. Theme switching also works for the current page when storage is unavailable.

Verified in Chrome at 320, 390, 640, 768, 992, 1024, 1440, and 1920px, including responsive navigation, all five service tabs, carousel controls, FAQ accordion, property filters, and required form fields.
