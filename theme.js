// theme.js
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  const body = document.body;

  // Load theme from localStorage
  let currentTheme = localStorage.getItem('theme') || 'light';

  function updateTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      themeIcon?.classList.remove('fa-sun');
      themeIcon?.classList.add('fa-moon');
      themeText && (themeText.textContent = 'Switch to Light Mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      themeIcon?.classList.remove('fa-moon');
      themeIcon?.classList.add('fa-sun');
      themeText && (themeText.textContent = 'Switch to Dark Mode');
      localStorage.setItem('theme', 'light');
    }
    currentTheme = theme;
  }

  // Apply theme on page load
  updateTheme(currentTheme);

  // Toggle theme
  themeToggle?.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateTheme(newTheme);
  });
});
