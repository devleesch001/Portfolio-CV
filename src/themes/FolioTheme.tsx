import { createTheme, Theme } from '@mui/material/styles';

const redColorSet = {
    light: '#f05545',
    main: '#b71c1c',
    dark: '#7f0000',
    contrastText: '#ffffff',
};

const blackColorSet = {
    light: '#484848',
    main: '#212121',
    dark: '#000000',
    contrastText: '#ffffff',
};

export const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
        primary: redColorSet,
        secondary: blackColorSet,
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: redColorSet.main,
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: blackColorSet.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    ':hover': {
                        color: blackColorSet.dark,
                        background: redColorSet.contrastText,
                    },
                    color: redColorSet.contrastText,
                    '&.Mui-selected': {
                        color: blackColorSet.dark,
                        backgroundColor: redColorSet.contrastText,
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    ':hover': {
                        color: blackColorSet.dark,
                        background: redColorSet.contrastText,
                    },
                    color: redColorSet.contrastText,
                    '&.Mui-selected': {
                        color: blackColorSet.dark,
                        backgroundColor: redColorSet.contrastText,
                    },
                    '&.Mui-selected:hover': {
                        color: blackColorSet.dark,
                        background: redColorSet.contrastText,
                    },
                },
            },
        },
    },
});

export const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: blackColorSet,
        secondary: redColorSet,
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: blackColorSet.main,
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: redColorSet.main,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    ':hover': {
                        color: redColorSet.main,
                        background: blackColorSet.contrastText,
                    },
                    color: blackColorSet.contrastText,
                    '&.Mui-selected': {
                        color: redColorSet.main,
                        backgroundColor: blackColorSet.contrastText,
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    ':hover&:': {
                        backgroundColor: redColorSet.dark,
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    color: blackColorSet.contrastText,
                    '&.Mui-selected': {
                        color: redColorSet.main,
                        backgroundColor: blackColorSet.contrastText,
                    },
                    '&.Mui-selected:hover': {
                        color: blackColorSet.dark,
                        background: redColorSet.contrastText,
                    },
                },
            },
        },
    },
});
