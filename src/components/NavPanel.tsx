import React, {FC, memo} from 'react';

import {Tabs, Tab, Toolbar, Box} from "@mui/material";
import {Drawer} from "@mui/material";

import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material/styles";
import clsx from 'clsx';

import {map, isEqual} from "lodash";

import {NavProps} from './Main';

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

const NavPanel:FC<NavProps> = (props) => {
    const {menu, mobileOpen, handleDrawerToggle, window} = props;

    const classes = useStyles();

    /* Tabs trigger */
    const [value, setValue] = React.useState(1);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                aria-label="navbar box"
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

            </Box>
        </Box>
    )
}

export default memo(NavPanel)
