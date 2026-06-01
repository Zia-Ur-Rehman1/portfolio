import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme } from '../themes/default';
import GlobalStyles from './globals';

export const useThemeMode = () => ({ themeName: 'dark', toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={darkTheme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
