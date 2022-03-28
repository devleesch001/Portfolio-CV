import React, {memo} from "react";
import TabPanel from "./TabPanel";
import {Paper} from "@mui/material";
import Home from "./Home";

export interface Title {
    title: string;
}

const Main = () => {

    const menus: Title[] = [
        {title: "Home"},
        {title: "À propos de moi"},
        {title: "Etudes"},
        {title: "Experience"},
        {title: "Travail"},
        {title: "Contact"},
    ]

    return (
        <Paper>
            <TabPanel menu={menus}/>
            <Home />
        </Paper>
    )
}

export default memo(Main);
