import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from '../styles/theme';

const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    // Try to get the saved theme preference from localStorage
    const savedMode = localStorage.getItem('themeMode');
    // Check if user prefers dark mode at system level
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedMode || (prefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Create theme based on current mode
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
