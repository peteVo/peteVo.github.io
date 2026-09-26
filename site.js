(() => {
  const root = document.documentElement;
  const language = document.querySelector('[data-language]');
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.getElementById('mobile-nav');

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('tpv-theme'); } catch { savedTheme = null; }
  function applyTheme(theme, persist = false) {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#17262a' : '#f4f1e9');
    themeButton?.setAttribute('aria-label', theme === 'dark' ? themeButton.dataset.toLight : themeButton.dataset.toDark);
    if (persist) {
      try { localStorage.setItem('tpv-theme', theme); } catch { /* Keep the visible choice for this visit. */ }
    }
  }
  applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme.matches ? 'dark' : 'light');
  systemTheme.addEventListener?.('change', (event) => {
    if (savedTheme !== 'light' && savedTheme !== 'dark') applyTheme(event.matches ? 'dark' : 'light');
  });
  themeButton?.addEventListener('click', () => {
    savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(savedTheme, true);
  });

  language?.addEventListener('change', () => {
    const locale = language.value;
    const path = locale === 'en' ? '/' : `/${locale}/`;
    location.assign(path + location.hash);
  });
  document.querySelector('[data-print]')?.addEventListener('click', () => print());

  function closeMenu(returnFocus = false) {
    if (!menuButton || !mobileNav) return;
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', menuButton.dataset.openLabel);
    if (returnFocus) menuButton.focus();
  }
  menuButton?.addEventListener('click', () => {
    const willOpen = mobileNav.hidden;
    mobileNav.hidden = !willOpen;
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menuButton.setAttribute('aria-label', willOpen ? menuButton.dataset.closeLabel : menuButton.dataset.openLabel);
  });
  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav && !mobileNav.hidden) closeMenu(true);
  });
})();
