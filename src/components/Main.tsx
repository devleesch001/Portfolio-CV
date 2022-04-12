import React, {FC, Fragment, memo, ReactElement} from "react";

import {t} from "i18next";

import TabPanel from "./NavPanel";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import {Grid, Paper, Slide, useScrollTrigger} from "@mui/material";

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

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Main:FC = (props ) => {

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
            {/*<HideOnScroll {...props}>*/}
                <NavBar handleDrawerToggle={handleDrawerToggle}/>
            {/*</HideOnScroll>*/}
            <TabPanel menu={menus} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
            <Paper>
                <Grid container sx={{
                    paddingLeft: {xs: "40px", sm: "280px"},
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

export default memo(Main);
