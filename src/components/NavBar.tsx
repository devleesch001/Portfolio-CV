import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { AppBar, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { appConst } from '../App';

import MenuIcon from '@mui/icons-material/Menu';

interface NavBarProps {
    handleDrawerToggle(): void;
}
const NavBar: FC<NavBarProps> = (props) => {
    const { handleDrawerToggle } = props;

    const trigger = useScrollTrigger();

    const { t } = useTranslation();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar
                position="fixed"
                sx={{
                    width: { lg: `calc(100% - ${appConst.drawerWidth}px)` },
                    ml: { lg: `${appConst.drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {t('appbar.title')}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default memo(NavBar);
