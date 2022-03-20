import { createTheme } from '@mui/material/styles';

const FolioTheme = createTheme({
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

export default FolioTheme