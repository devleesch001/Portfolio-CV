import React, {memo, ReactElement} from "react";

import {t} from "i18next";

import TabPanel from "./TabPanel";
import Home from "./Home";
import About from "./About";

import {Alert, Paper} from "@mui/material";
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
        {title: t("title.home"), icon: <HomeIcon />},
        {title: t("title.about"), icon: <AssignmentIndIcon />},
        {title: t("title.study"), icon: <SchoolIcon />},
        {title: t("title.project"), icon: <PlagiarismIcon />},
        {title: t("title.work"), icon: <WorkIcon />},
        {title: t("title.contact"), icon: <ContactsIcon />},
    ]

    return (
        <Paper>
            <TabPanel menu={menus} children={
                <>
                    <Alert severity="error"> WIP! </Alert>
                    <Home />
                    <About />
                </>
            }/>

        </Paper>
    )
}

export default memo(Main);
