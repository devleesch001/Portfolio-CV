import React from 'react';
import Main from "./components/Main";
import { ThemeProvider } from '@mui/material';
import theme from "./components/FolioTheme";
import './styles/App.css'

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
    key: 'css',
    prepend: true
});

const App = () => {
    return (
        <CacheProvider value={cache}>
            <link rel="icon" href="public/favicon.ico"/>

            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
