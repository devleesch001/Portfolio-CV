import { createTheme, Theme } from '@mui/material/styles';

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
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: theme.palette.secondary.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    ':hover': { background: theme.palette.secondary.contrastText, color: theme.palette.secondary.dark },
                    color: theme.palette.primary.contrastText,
                    '&.Mui-selected': {
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.primary.contrastText,
                    },
                },
            },
        },
    },
};

export default theme;
