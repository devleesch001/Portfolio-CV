import React, { FC, ReactElement, useRef } from 'react';

import { t } from 'i18next';

import TabPanel from './NavPanel';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
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

    const sectionRefs = [useRef(null), useRef(null), useRef(null)];

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
                <Grid key={0} ref={sectionRefs[0]} item>
                    <Home />
                </Grid>
                <Grid key={1} ref={sectionRefs[1]} item>
                    <About />
                </Grid>
            </Grid>
        </>
    );
};

export default Main;
