import React, { memo } from 'react';
import {Tabs, Tab, AppBar} from "@mui/material";
import '../styles/Tab.css'
import clsx from 'clsx';
import {makeStyles, useTheme} from "@mui/styles";
import {map, isEqual} from "lodash";

import {Title} from './Main'

const a: Title = {title: "ok"}

const useStyles = makeStyles((theme) => ({
      tabItem : {
          '&:hover': {
              backgroundColor: theme.palette.primary.contrastText,
              color: theme.palette.primary.main
          },
          color: theme.palette.primary.contrastText
      },
    tabItemActive : {
        background: theme.palette.primary.contrastText
    }
}));

const TabPanel = ({menu = []}) => {
    const theme = useTheme();
    const classes = useStyles();

    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
