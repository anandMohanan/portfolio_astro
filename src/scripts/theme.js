(() => {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch {}
  const hasSavedTheme = saved === 'light' || saved === 'dark';
  const apply = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('.site-theme').forEach(button => {
      button.textContent = theme === 'dark' ? 'Light' : 'Dark';
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    });
  };
  apply(hasSavedTheme ? saved : 'dark');
  const initialize = () => {
    apply(document.documentElement.dataset.theme);
    document.querySelectorAll('.site-theme').forEach(button => button.addEventListener('click', () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', theme); } catch {}
      apply(theme);
    }));
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
