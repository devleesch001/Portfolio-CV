import React, { memo } from 'react';

import {Tabs, Tab, AppBar} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import {Theme} from "@mui/material/styles";
import clsx from 'clsx';

import {map, isEqual} from "lodash";

import {Title} from './Main'
import '../styles/Tab.css'

const useStyles = makeStyles((theme: Theme) => ({
    tabItem : {
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main
        },
        color: theme.palette.primary.contrastText,
    },
    tabItemActive : {
        background: theme.palette.secondary.contrastText,
    }
}));

interface Props {
    menu: Title[]
}

const TabPanel = ({menu}: Props) => {
    const theme = useTheme();
    const classes = useStyles();

    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" className={"folio-tab"}>
            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="nav tabs"
            >
                {map(menu, ({title}, index) => (
                    <Tab key={index} label={title} className={clsx(classes.tabItem,
                        isEqual(index, value) && classes.tabItemActive)} />
                ))}
            </Tabs>
        </AppBar>
    )
}

export default memo(TabPanel)
