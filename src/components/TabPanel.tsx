import React from 'react';
import {Tabs, Tab, AppBar} from "@mui/material";
import '../styles/Tab.css'
import theme from "./FolioTheme";
import {useTheme} from "@mui/styles";

const TabPanel = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" className={"folio-tab"}>
            <nav>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="nav tabs"
                >
                    <Tab label="Home" />
                    <Tab label="À propos de moi" />
                    <Tab label="Etudes" />
                    <Tab label="Experience" />
                    <Tab label="Travail" />
                    <Tab label="Contact" />
                </Tabs>
            </nav>
        </AppBar>
    )
}

export default TabPanel