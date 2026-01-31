import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8', // Indigo - lighter for dark theme
      light: '#a5b4fc',
      dark: '#6366f1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f472b6', // Pink - lighter for dark theme
      light: '#f9a8d4',
      dark: '#ec4899',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f172a',  // Dark slate background
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',  // Light primary text
      secondary: '#94a3b8', // Light gray for secondary text
    },
    success: {
      main: '#34d399',
    },
    warning: {
      main: '#fbbf24',
    },
    error: {
      main: '#f87171',
    },
    divider: '#334155',
  },
  typography: {
    fontFamily: '"Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
    htmlFontSize: 16,
    fontSize: 16,
    
    // Headings with improved hierarchy
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      '@media (max-width:600px)': {
        fontSize: '1.875rem',
      },
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.33,
      letterSpacing: '0em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.005em',
    },
    
    // Body text with improved readability
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0em',
      color: '#475569',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
      letterSpacing: '0em',
      color: '#64748b',
    },
    
    // Additional text variants
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '-0.005em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: '0.005em',
    },
    
    // Button text
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.005em',
      textTransform: 'none',
    },
    
    // Caption text
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
      color: '#94a3b8',
    },
  },
  
  shape: {
    borderRadius: 12,
  },
  
  spacing: 8, // Base spacing unit (8px)
  
  components: {
    // Button styling
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '12px 28px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          border: 'none',
        },
        contained: {
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.15)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.25)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: 'currentColor',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(37, 99, 235, 0.04)',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
          },
        },
      },
    },
    
    // Chip styling for skill badges
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6,
          height: 'auto',
          padding: '4px 12px',
          fontSize: '0.875rem',
          border: '1px solid #e2e8f0',
          backgroundColor: '#f1f5f9',
          color: '#334155',
        },
        outlined: {
          borderColor: '#cbd5e1',
        },
      },
    },
    
    // Card styling
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e2e8f0',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
            borderColor: '#cbd5e1',
          },
        },
      },
    },
    
    // TextField styling
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.3s ease',
            backgroundColor: '#f8fafc',
            '&:hover': {
              backgroundColor: '#f1f5f9',
            },
            '&.Mui-focused': {
              backgroundColor: '#ffffff',
              boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
            },
          },
        },
      },
    },
    
    // Container padding adjustments
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
          '@media (min-width: 1200px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
  },
});

export default theme;

