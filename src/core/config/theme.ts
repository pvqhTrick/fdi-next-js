// Custom hook for theme setup
const config = () => {
  const themeSystem =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  document
    .querySelector('html')
    ?.setAttribute('data-theme', localStorage.getItem('theme') ?? themeSystem);
};

export default config;
