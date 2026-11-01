'use strict';

// Apply the theme before styles load so a saved dark theme never flashes light.
(() => {
  const storageKey = 'elitehomes-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;

  const isTheme = value => value === 'light' || value === 'dark';

  try {
    const saved = localStorage.getItem(storageKey);
    if (isTheme(saved)) preference = saved;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function applyTheme() {
    const theme = preference || (systemTheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', theme);

    const button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    }

    const browserColor = document.querySelector('meta[name="theme-color"]');
    if (browserColor) browserColor.content = theme === 'dark' ? '#12101b' : '#7f22fe';
  }

  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    document.getElementById('theme-toggle').addEventListener('click', () => {
      preference = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selected theme for this page even without storage access.
      }
      applyTheme();
    });
  });

  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme();
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) {
      preference = isTheme(event.newValue) ? event.newValue : null;
      applyTheme();
    }
  });
})();
