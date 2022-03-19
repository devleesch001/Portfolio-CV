import * as React from 'react';
import Button from '@mui/material/Button';

import logo from './logo.svg';
import './App.css';
import TabPanel from './components/TabPanel'

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <p>*/}
            {/*         Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*     </p>*/}
            {/*     <a*/}
            {/*        className="App-link"*/}
            {/*        href="https://reactjs.org"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Learn React*/}
            {/*    </a>*/}
            {/*</header>*/}

            <header>
                <TabPanel />
            </header>
            <body>
                Alexis DEVLEESCHAUWER
            </body>
            <footer>

            </footer>

        </div>
    );
}

export default App;
