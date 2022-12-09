import React, { FC, memo } from 'react';

import { isEqual, map } from 'lodash';
import useScrollSpy from 'react-use-scrollspy';

import { Box, Drawer, Tab, Tabs, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Theme } from '@mui/material/styles';
import clsx from 'clsx';

import { Title } from './Main';
import { appConst } from '../App';

import '../styles/Tab.css';

const useStyles = makeStyles((theme: Theme) => ({
    tabItem: {
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
        },
        color: theme.palette.primary.contrastText,
    },
    tabItemActive: {
        background: theme.palette.secondary.contrastText,
    },
}));

interface DrawerContentInterface {
    menu: Title[];
    sectionRefs: React.MutableRefObject<null>[];
}
const DrawerContent: FC<DrawerContentInterface> = (props) => {
    const { menu, sectionRefs } = props;

    const classes = useStyles();

    /* Tabs trigger */
    // const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // setValue(newValue);
    };

    const activeIndex = useScrollSpy({ sectionElementRefs: sectionRefs, offsetPx: -80 });

    return (
        <Tabs
            value={activeIndex}
            onChange={handleChange}
            orientation="vertical"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="nav tabs"
            className={'folio-tabs'}
            selectionFollowsFocus
        >
            {map(menu, ({ title, icon }, index) => (
                <Tab
                    key={index}
                    label={title}
                    icon={icon}
                    iconPosition={'start'}
                    className={clsx(classes.tabItem, isEqual(index, activeIndex) && classes.tabItemActive)}
                />
            ))}
        </Tabs>
    );
};

export interface NavProps {
    menu: Title[];
    mobileOpen: boolean;
    window?: () => Window;
    sectionRefs: React.MutableRefObject<null>[];

    handleDrawerToggle(): void;
}
const NavPanel: FC<NavProps> = (props) => {
    const { menu, mobileOpen, window, sectionRefs, handleDrawerToggle } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                component="nav"
                sx={{ width: { lg: appConst.drawerWidth }, flexShrink: { lg: 0 } }}
                aria-label="navbar box"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: appConst.drawerWidth,
                        },
                    }}
                >
                    <DrawerContent menu={menu} sectionRefs={sectionRefs} />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', lg: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: appConst.drawerWidth,
                        },
                    }}
                    open
                >
                    <DrawerContent menu={menu} sectionRefs={sectionRefs} />
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${appConst.drawerWidth}px)` } }}>
                <Toolbar />
            </Box>
        </Box>
    );
};

export default memo(NavPanel);
