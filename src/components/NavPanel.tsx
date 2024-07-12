import React, { FC, memo } from 'react';

import useScrollSpy from 'react-use-scrollspy';

import { Box, Drawer } from '@mui/material';

import { Title } from './Main';
import { appConst } from '../App';
import ThemeSelector from './ThemeSelector';
import { NavTab, NavTabs } from './NavTabs';

interface DrawerContentInterface {
    menu: Title[];
    sectionRefs: React.MutableRefObject<HTMLDivElement | null>[];
    handleDrawerToggle?(): void;
}

const DrawerContent: FC<DrawerContentInterface> = (props) => {
    const { menu, sectionRefs, handleDrawerToggle } = props;

    const activeIndex = useScrollSpy({ activeSectionDefault: 0, sectionElementRefs: sectionRefs, offsetPx: -80 });
    const closeHandler = () => {
        handleDrawerToggle &&
            setTimeout(() => {
                handleDrawerToggle();
            }, 1000);
    };

    return (
        <>
            <NavTabs
                value={activeIndex}
                orientation="vertical"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="nav-tabs"
                className={'folio-tabs'}
                selectionFollowsFocus
                sx={{
                    marginTop: 'calc((100vh - 432px) / 2)',
                }}
            >
                {menu.map(({ title, icon }, index) => (
                    <NavTab
                        key={index}
                        onClick={() => {
                            sectionRefs[index]?.current?.scrollIntoView({ behavior: 'smooth' });
                            closeHandler();
                        }}
                        label={title}
                        icon={icon}
                        iconPosition={'start'}
                    />
                ))}
            </NavTabs>
            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.primary',
                    bottom: 0,
                    py: 3,
                }}
            >
                <ThemeSelector />
            </Box>
        </>
    );
};

export interface NavProps {
    menu: Title[];
    mobileOpen: boolean;
    sectionRefs: React.MutableRefObject<HTMLDivElement | null>[];
    handleDrawerToggle(): void;
    window?: () => Window;
}
const NavPanel: FC<NavProps> = (props) => {
    const { menu, mobileOpen, sectionRefs, handleDrawerToggle, window } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                component="nav"
                sx={{ width: { lg: appConst.drawerWidth }, flexShrink: { lg: 0 } }}
                aria-label="navbar-box"
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
                    <DrawerContent menu={menu} sectionRefs={sectionRefs} handleDrawerToggle={handleDrawerToggle} />
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
        </Box>
    );
};

export default memo(NavPanel);
