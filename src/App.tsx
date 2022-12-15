import React from 'react';

import Main from './components/Main';

import { ThemeProvider, useMediaQuery } from '@mui/material';
import { lightTheme, darkTheme } from './components/FolioTheme';
import './styles/App.css';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
    key: 'css',
    prepend: true,
});

export const appConst = { drawerWidth: 240 };

const App = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() => (prefersDarkMode ? darkTheme : lightTheme), [prefersDarkMode]);

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
