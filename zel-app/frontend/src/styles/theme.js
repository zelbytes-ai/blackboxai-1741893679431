import { createTheme } from '@mui/material/styles';

// Custom theme options for light and dark modes
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#2E7D32',
      light: mode === 'dark' ? '#5CAF50' : '#4CAF50',
      dark: mode === 'dark' ? '#1B5E20' : '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1976D2',
      light: mode === 'dark' ? '#52A5F5' : '#42A5F5',
      dark: mode === 'dark' ? '#1565C0' : '#1565C0',
      contrastText: '#FFFFFF',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#F5F5F5',
      paper: mode === 'dark' ? '#1E1E1E' : '#FFFFFF',
    },
    text: {
      primary: mode === 'dark' ? '#FFFFFF' : '#000000',
      secondary: mode === 'dark' ? '#B0B0B0' : '#666666',
    },
    error: {
      main: mode === 'dark' ? '#F44336' : '#D32F2F',
      light: mode === 'dark' ? '#E57373' : '#EF5350',
      dark: mode === 'dark' ? '#C62828' : '#C62828',
    },
    warning: {
      main: mode === 'dark' ? '#FFA726' : '#ED6C02',
      light: mode === 'dark' ? '#FFB74D' : '#FF9800',
      dark: mode === 'dark' ? '#F57C00' : '#E65100',
    },
    success: {
      main: mode === 'dark' ? '#66BB6A' : '#2E7D32',
      light: mode === 'dark' ? '#81C784' : '#4CAF50',
      dark: mode === 'dark' ? '#388E3C' : '#1B5E20',
    },
    divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: mode === 'dark' 
            ? '0 4px 6px rgba(0, 0, 0, 0.3)'
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: mode === 'dark' ? '#424242' : '#616161',
          fontSize: '0.875rem',
          padding: '8px 12px',
          borderRadius: 4,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
        },
      },
    },
  },
  spacing: 8,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});

// Create and export a default theme (this will be overridden by ThemeContext)
const theme = createTheme(getDesignTokens('light'));

export default theme;
