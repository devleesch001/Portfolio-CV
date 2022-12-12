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
                    mx: 'auto',
                }}
            >
                <Grid key={0} ref={sectionRefs[0]} item xs={12}>
                    <Home />
                </Grid>
                <Grid key={1} ref={sectionRefs[1]} item xs={12}>
                    <About />
                </Grid>
                <Grid
                    key={2}
                    ref={sectionRefs[2]}
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    marginTop={10}
                    sx={{
                        marginLeft: { md: 5 },
                    }}
                >
                    <Study />
                </Grid>
                <Grid md={1}></Grid>
                <Grid
                    key={3}
                    ref={sectionRefs[3]}
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    marginTop={10}
                    sx={{
                        marginRight: { md: 5 },
                    }}
                >
                    <Work />
                </Grid>
                <Grid key={4} ref={sectionRefs[4]} item xs={12} sm={8}>
                    {/*<Project />*/}
                </Grid>
            </Grid>
        </>
    );
};

export default Main;
