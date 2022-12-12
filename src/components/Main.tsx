import React, { FC, ReactElement, useRef } from 'react';

import { t } from 'i18next';

import TabPanel from './NavPanel';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Study from './Study';
import Project from './Project';
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
        { hash: 'project-panel', title: t('title.project'), icon: <PlagiarismIcon /> },
        { hash: 'work-panel', title: t('title.work'), icon: <WorkIcon /> },
        { hash: 'contact-panel', title: t('title.contact'), icon: <ContactsIcon /> },
    ];

    /* mobile detect */
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

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
                    paddingLeft: { xs: '40px', lg: `${appConst.drawerWidth + 40}px` },
                    paddingRight: '40px',
                    mx: 'auto',
                }}
            >
                <Grid key={0} ref={sectionRefs[0]} item xs={12}>
                    <Home />
                </Grid>
                <Grid key={1} ref={sectionRefs[1]} item xs={12}>
                    <About />
                </Grid>
                <Grid key={2} ref={sectionRefs[2]} item xs={12} sm={10}>
                    <Study />
                </Grid>
                <Grid key={3} ref={sectionRefs[3]} item xs={12} sm={10}>
                    <Project />
                </Grid>
                <Grid key={4} ref={sectionRefs[4]} item xs={12} sm={10}>
                    <Work />
                </Grid>
            </Grid>
        </>
    );
};

export default Main;
