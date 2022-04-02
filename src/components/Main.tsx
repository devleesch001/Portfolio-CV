import React, {memo, ReactElement} from "react";
import TabPanel from "./TabPanel";
import {Paper} from "@mui/material";
import Home from "./Home";

import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SchoolIcon from '@mui/icons-material/School';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';

export interface Title {
    title: string,
    icon: ReactElement,
}

const Main = () => {

    const menus: Title[] = [
        {title: "Home", icon: <HomeIcon />},
        {title: "À propos de moi", icon: <AssignmentIndIcon />},
        {title: "Etudes", icon: <SchoolIcon />},
        {title: "Experience", icon: <PlagiarismIcon />},
        {title: "Travail", icon: <WorkIcon />},
        {title: "Contact", icon: <ContactsIcon />},
    ]

    return (
        <Paper>
            <TabPanel menu={menus}/>
            <Home />
        </Paper>
    )
}

export default memo(Main);
