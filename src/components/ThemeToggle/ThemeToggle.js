import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useThemeMode } from '../../styles/ThemeContext';
import { ToggleButton } from './ThemeToggleStyles';

const ThemeToggle = () => {
  const { themeName, toggleTheme } = useThemeMode();
  const isDark = themeName === 'dark';

  return (
    <ToggleButton
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FiSun size="2rem" /> : <FiMoon size="2rem" />}
    </ToggleButton>
  );
};

export default ThemeToggle;
