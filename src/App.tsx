import React from 'react';
import Main from './components/Main';

import './styles/App.css';

import { ThemeProvider, useMediaQuery } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { lightTheme, darkTheme } from './themes/FolioTheme';
import reportWebVitals, { Metric } from './reportWebVitals';

import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-JXW259F8LX';
ReactGA.initialize(TRACKING_ID);
ReactGA.send('pageview');

export const ColorModeContext = React.createContext({
    mode: 'light',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectColorMode: (mode: themeSelectorType) => {
        return;
    },
});

const cache = createCache({
    key: 'css',
    prepend: true,
});

export type themeSelectorType = 'light' | 'dark' | 'auto';

export const appConst = { drawerWidth: 240 };

const App = () => {
    const [mode, setMode] = React.useState<themeSelectorType>(() => {
        const theme = localStorage.getItem('theme') ?? 'light';

        if (theme === 'light' || theme === 'dark' || theme === 'auto') {
            return theme;
        }

        return 'light';
    });

    const modeHandler = (mode: themeSelectorType) => {
        setMode(mode);
        localStorage.setItem('theme', mode);
    };

    const colorMode = React.useMemo(
        () => ({
            mode: mode,
            selectColorMode: (mode: themeSelectorType) => {
                modeHandler(mode);
            },
        }),
        [mode]
    );

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            mode === 'light'
                ? lightTheme
                : mode === 'dark'
                  ? darkTheme
                  : mode === 'auto'
                    ? prefersDarkMode
                        ? darkTheme
                        : lightTheme
                    : lightTheme,
        [mode, prefersDarkMode]
    );

    return (
        <CacheProvider value={cache}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <Main />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </CacheProvider>
    );
};

function sendToAnalytics(metric: Metric) {
    const body = JSON.stringify(metric);
    const url = 'https://example.com/analytics';

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body);
    } else {
        fetch(url, { body, method: 'POST', keepalive: true }).then();
    }
}

//reportWebVitals(sendToAnalytics);

export default App;
