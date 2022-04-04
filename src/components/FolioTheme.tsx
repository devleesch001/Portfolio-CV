import { Theme, createTheme } from '@mui/material/styles';
import "@mui/styles";

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}


let theme = createTheme({
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
                }
            }
        }
    }
}

export default theme
