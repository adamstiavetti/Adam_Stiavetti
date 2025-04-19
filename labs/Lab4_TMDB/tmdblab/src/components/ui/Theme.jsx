
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1e1e1e',       // ASRV black
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#7e8082',       // muted slate gray
            contrastText: '#ffffff',
        },
        background: {
            default: '#111111',    // very dark background
            paper: '#1a1a1a',      // card-style panels
        },
        text: {
            primary: '#f5f5f5',    // soft white
            secondary: '#b0b0b0',  // light gray
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        button: {
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
    },
});

export default function ThemeWrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
