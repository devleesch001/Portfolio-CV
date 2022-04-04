import React, {memo} from 'react';

import {Tabs, Tab, Toolbar, Drawer, Box} from "@mui/material";

import Home from "./Home";

import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material/styles";
import clsx from 'clsx';

import {map, isEqual} from "lodash";

import {Title} from './Main'
import '../styles/Tab.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        backgroundColor: "red",
    },
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
        <div>
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
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
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
                        display: {xs: "block", sm: "none"},
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
                        display: {xs: "none", sm: "block"},
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
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                <Home />

            </Box>
        </Box>
    )
}

export default memo(TabPanel)
