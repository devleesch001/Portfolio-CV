import React, {memo} from 'react';

import {Tabs, Tab, Toolbar, IconButton, Drawer, Box} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material/styles";
import clsx from 'clsx';

import {map, isEqual} from "lodash";

import {Title} from './Main'
import '../styles/Tab.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    tabItem: {
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main
        },
        color: theme.palette.primary.contrastText,
    },
    tabItemActive: {
        background: theme.palette.secondary.contrastText,
    },
}));

interface Props {
    menu: Title[]
    window?: () => Window;
}

const TabPanel = ({menu, window}: Props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="nav tabs"
                className={"folio-tabs"}
                selectionFollowsFocus
            >
                {map(menu, ({title, icon}, index) => (
                    <Tab key={index} label={title} icon={icon} iconPosition={"start"} className={
                        clsx(classes.tabItem, isEqual(index, value) && classes.tabItemActive)
                    }/>
                ))}
            </Tabs>
        </>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth
                    }
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth
                    }
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default memo(TabPanel)
