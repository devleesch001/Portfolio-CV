import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';

import '../styles/App.css';
import meImage from '../static/images/avatar/alexis.jpg';

const About = () => {
    const { t } = useTranslation();

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item container xs={12} sm={2} direction="column" alignItems="center">
                <Grid item>
                    <Typography variant="h6">{t('title.about')}</Typography>
                </Grid>

                <Grid item>
                    <Box justifyContent={'center'}>
                        <Avatar
                            alt={`${t('me.firstname')} ${t('me.name')}`}
                            src={meImage}
                            sx={{ width: 96, height: 96 }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={8}>
                <Paper elevation={3}>
                    <Typography p={2}>{t('about.content')}</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default memo(About);