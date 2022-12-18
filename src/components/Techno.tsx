import React, { memo } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Button, Paper, Typography, useMediaQuery } from '@mui/material';

import Carousel from 'react-material-ui-carousel';

import '../styles/App.css';
import { useTranslation } from 'react-i18next';

interface studyInterface {
    school: string;
    date: string;
    degree: string;
    city: string;
}

const technoList = [
    {
        name: 'Random Name #1',
        description: 'Probably the most random thing you have ever seen!',
    },
    {
        name: 'Random Name #2',
        description: 'Hello World!',
    },
];
const Techno = () => {
    const { t } = useTranslation();

    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isOpposable = useMediaQuery(theme.breakpoints.up('lg'));

    const isAlternate = !isOpposable && !isSmallScreen;

    return (
        <>
            <Box>
                <Typography textAlign={'center'} variant={'h2'}>
                    {t('title.study')}
                </Typography>
            </Box>
            <Carousel>
                {technoList.map((item, i) => (
                    <Paper key={i}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>

                        <Button className="CheckButton">Check it out!</Button>
                    </Paper>
                ))}
            </Carousel>
        </>
    );
};

export default memo(Techno);
