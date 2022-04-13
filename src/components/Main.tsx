import React, {FC, Fragment, ReactElement} from "react";

import {t} from "i18next";

import TabPanel from "./NavPanel";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { appConst } from '../App';

import {Grid, Paper} from "@mui/material";

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

export interface NavProps {
    menu: Title[],
    mobileOpen: boolean,
    handleDrawerToggle: any,
    window?: () => Window,
}

const Main: FC = () => {

    const menus: Title[] = [
        {title: t("title.home"), icon: <HomeIcon/>},
        {title: t("title.about"), icon: <AssignmentIndIcon/>},
        {title: t("title.study"), icon: <SchoolIcon/>},
        {title: t("title.project"), icon: <PlagiarismIcon/>},
        {title: t("title.work"), icon: <WorkIcon/>},
        {title: t("title.contact"), icon: <ContactsIcon/>},
    ]

    /* mobile detect */
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Fragment>
            <NavBar handleDrawerToggle={handleDrawerToggle}/>
            <TabPanel menu={menus} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
            <Paper>
                <Grid container sx={{
                    paddingLeft: {xs: "40px", sm: `${appConst.drawerWidth + 40}px`},
                    paddingRight: "40px"
                }}
                >
                    <Home/>
                    <About/>
                </Grid>
            </Paper>

        </Fragment>
    )
}

export default Main;
