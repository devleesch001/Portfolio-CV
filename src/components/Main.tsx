import React, { FC, ReactElement, useRef } from 'react';

import { t } from 'i18next';

import TabPanel from './NavPanel';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Study from './Study';
import Projects from './Projects';
import Work from './Work';

import { appConst } from '../App';

import { Box, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SchoolIcon from '@mui/icons-material/School';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';

export interface Title {
    hash: string;
    title: string;
    icon: ReactElement;
}

const Main: FC = () => {
    const menus: Title[] = [
        { hash: 'home-panel', title: t('title.home'), icon: <HomeIcon /> },
        { hash: 'about-panel', title: t('title.about'), icon: <AssignmentIndIcon /> },
        { hash: 'study-panel', title: t('title.study'), icon: <SchoolIcon /> },
        { hash: 'work-panel', title: t('title.work'), icon: <WorkIcon /> },
        { hash: 'project-panel', title: t('title.project'), icon: <PlagiarismIcon /> },
        { hash: 'contact-panel', title: t('title.contact'), icon: <ContactsIcon /> },
    ];

    /* mobile detect */
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sectionRefs: React.MutableRefObject<HTMLDivElement | null>[] = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
    ];

    return (
        <>
            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                <NavBar handleDrawerToggle={handleDrawerToggle} />
            </Box>

            <TabPanel
                menu={menus}
                mobileOpen={mobileOpen}
                sectionRefs={sectionRefs}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Grid
                container
                justifyContent="center"
                sx={{
                    paddingLeft: { xs: 2, lg: `${appConst.drawerWidth + 40}px` },
                    paddingRight: { xs: 2, lg: '40px' },
                }}
                spacing={2}
            >
                <Grid item key={0} ref={sectionRefs[0]} xs={12}>
                    <Home />
                </Grid>
                <Grid item key={1} ref={sectionRefs[1]} xs={12}>
                    <About />
                </Grid>
                <Grid item ref={sectionRefs[2]} xs={12} md={6} marginTop={10}>
                    <Study />
                </Grid>
                <Grid item key={3} ref={sectionRefs[3]} xs={12} md={6} marginTop={10}>
                    <Work />
                </Grid>
                <Grid item key={4} ref={sectionRefs[4]} xs={12}>
                    <Projects />
                </Grid>
            </Grid>
        </>
    );
};

export default Main;
