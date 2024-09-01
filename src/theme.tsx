import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00BCD4', // Example primary color for light mode
    },
    secondary: {
      main: '#673AB7', // Example secondary color for light mode
    },
    success: {
      main: '#8bc34a',
    }
    // ... other light theme customizations
  },
  typography: {
    allVariants: {
      fontWeight: 500
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4DD0E1', // Example primary color for dark mode
    },
    secondary: {
      main: '#9575CD', // Example secondary color for dark mode
    },
    success: {
      main: '#a2cf6e',
    },
    // ... other dark theme customizations
    background: {
      default: '#1a1a1a',
    },
    text: {
      secondary: "#848484",
      disabled: "#484848"
    }
  },
  typography: {
    allVariants: {
      color: '#bbbbbb',
      
    }
  }
});

export { lightTheme, darkTheme }; 