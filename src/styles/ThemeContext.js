import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../themes/default';
import GlobalStyles from './globals';

const STORAGE_KEY = 'zia-portfolio-theme';

const ThemeToggleContext = createContext({
  themeName: 'dark',
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeToggleContext);

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  } catch (e) {
    // ignore
  }
  return 'dark';
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeName(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, themeName);
    } catch (e) {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', themeName);
    }
  }, [themeName, mounted]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const activeTheme = themeName === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeToggleContext.Provider value={{ themeName, toggleTheme }}>
      <StyledThemeProvider theme={activeTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
