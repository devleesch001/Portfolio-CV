import { createTheme, Theme } from '@mui/material/styles';
import '@mui/styles';

let theme: Theme = createTheme({
    palette: {
        primary: {
            light: '#f05545',
            main: '#b71c1c',
            dark: '#7f0000',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#ffffff',
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: theme.palette.primary.main,
                },
            },
        },
    },
};

export default theme;
