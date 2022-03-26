import React from "react";
import TabPanel from "./TabPanel";

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
        <TabPanel menu={menus}/>
    )
}

export default Main;
