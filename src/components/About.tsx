import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Avatar, Grid, Paper, Typography } from '@mui/material';

import '../styles/App.css';
import meImage from '../assets/alexis.webp';

const About = () => {
    const { t } = useTranslation();

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item container xs={12} md={3} direction="column" alignItems="center">
                <Grid item pb={5}>
                    <Typography noWrap variant="h5">
                        {t('title.about')}
                    </Typography>
                </Grid>

                <Grid item pb={2}>
                    <Avatar alt={`${t('me.firstname')} ${t('me.name')}`} src={meImage} sx={{ width: 96, height: 96 }} />
                </Grid>
            </Grid>

            <Grid item xs={12} md={9}>
                <Paper elevation={3}>
                    <Typography textAlign={'justify'} p={2}>
                        {t('about.me')}
                    </Typography>
                    <Typography textAlign={'justify'} px={2} pb={2}>
                        {t('about.pro')}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default memo(About);
