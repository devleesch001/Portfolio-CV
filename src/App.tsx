import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import TabPanel from "./components/TabPanel";
import Main from "./components/Main";
import theme from "./components/FolioTheme";

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
    key: 'css',
    prepend: true
});

const App = () => {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
