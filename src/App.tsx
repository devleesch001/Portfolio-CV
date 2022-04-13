import React from 'react';

import Main from "./components/Main";

import {ThemeProvider} from '@mui/material';
import theme from "./components/FolioTheme";
import './styles/App.css'

import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
    key: 'css',
    prepend: true
});

export interface Provider {
    drawerWidth: bigint;
}

export const appConst = {drawerWidth: 240}

const App = () => {

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <Main/>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
