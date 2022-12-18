import React, { FC, ReactElement, useRef } from 'react';

import { appConst } from '../App';
import { t } from 'i18next';

import TabPanel from './NavPanel';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Study from './Study';
import Projects from './Projects';

import Contacts from './Contacts';

import Work from './Work';

import { Box, Divider, Fab, Grid, Paper, Slide, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SchoolIcon from '@mui/icons-material/School';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Theme } from '@mui/material/styles';
import useScrollSpy from 'react-use-scrollspy';

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

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

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
        useRef<HTMLDivElement | null>(null),
    ];

    const activeIndex = useScrollSpy({ activeSectionDefault: 0, sectionElementRefs: sectionRefs, offsetPx: -80 });

    return (
        <Paper>
            <Box>
                {isSmallScreen && (
                    <Slide direction={'up'} in={activeIndex !== 0} mountOnEnter unmountOnExit>
                        <Fab
                            size="medium"
                            aria-label={'fab-nav-up'}
                            color="primary"
                            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
                            sx={{ position: 'fixed', bottom: 16, right: 16 }}
                        >
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </Slide>
                )}

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
                        paddingLeft: { xs: 2, lg: `${appConst.drawerWidth + 10}px` },
                        paddingRight: { xs: '10px' },
                    }}
                    spacing={2}
                >
                    <Grid item key={0} ref={sectionRefs[0]} xs={12}>
                        <Home />
                    </Grid>
                    <Grid item key={1} ref={sectionRefs[1]} xs={12} marginY={5} sx={{ maxWidth: { lg: '1200px' } }}>
                        <About />
                    </Grid>
                    <Divider sx={{ width: '80%' }} />
                    <Grid
                        item
                        key={2}
                        ref={sectionRefs[2]}
                        xs={12}
                        lg={6}
                        marginY={5}
                        sx={{ maxWidth: { lg: '600px' } }}
                    >
                        <Study />
                    </Grid>
                    <Divider sx={{ width: { xs: '80%', lg: 0 } }} />
                    <Grid
                        item
                        key={3}
                        ref={sectionRefs[3]}
                        xs={12}
                        lg={6}
                        marginY={5}
                        sx={{ maxWidth: { lg: '600px' } }}
                    >
                        <Work />
                    </Grid>
                    <Divider sx={{ width: '80%' }} />
                    <Grid
                        item
                        key={4}
                        ref={sectionRefs[4]}
                        xs={12}
                        marginY={5}
                        sx={{ maxWidth: { lg: '1200px' }, marginX: { lg: 10 } }}
                    >
                        <Projects />
                    </Grid>
                    <Divider sx={{ width: '80%' }} />
                    <Grid
                        minHeight={'95vh'}
                        item
                        key={5}
                        ref={sectionRefs[5]}
                        xs={12}
                        marginY={5}
                        sx={{ maxWidth: { lg: '1200px' }, marginX: { lg: 10 } }}
                    >
                        <Contacts />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default Main;
