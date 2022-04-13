import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Avatar, Grid, Paper, Typography } from '@mui/material';

import '../styles/App.css';
import meImage from '../static/images/avatar/alexis.jpg';

const About = () => {
    const { t } = useTranslation();

    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">{t('title.about')}</Typography>
            </Grid>
            <Grid item xs={0} sm={8} />

            <Grid item xs={12} sm={2}>
                <Avatar alt={`${t('me.firstname')} ${t('me.name')}`} src={meImage} sx={{ width: 96, height: 96 }} />
            </Grid>
            <Grid item xs={12} sm={10}>
                <Paper elevation={3}>{t('about.content')}</Paper>
            </Grid>

            <Grid item>
                <Typography align={'justify'}>
                    <p>aaaaaaa</p>
                    {t('about.content')}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default memo(About);
