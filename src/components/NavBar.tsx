import React, {FC, memo} from 'react';

import {useTranslation} from "react-i18next";

import {AppBar, Toolbar, Typography, IconButton} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const NavBar:FC<{ handleDrawerToggle: any }> = (props) => {

    const {handleDrawerToggle} = props;

    const {t} = useTranslation();

    return (

        <AppBar
            position="fixed"
            sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    {t("appbar.title")}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default memo(NavBar);