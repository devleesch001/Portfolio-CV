import React, { memo } from 'react';

import { Alert, Avatar, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import meImage from '../static/images/avatar/alexis.jpg';

import '../styles/App.css';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ height: '50vh' }}>
            <Box sx={{ marginTop: '50vh', transform: 'translateY(-100%)' }}>
                <Alert severity="warning">Work in Progress!</Alert>
                <Avatar
                    alt={`${t('me.firstname')} ${t('me.name')}`}
                    src={meImage}
                    sx={{ mx: 'auto', width: 256, height: 256 }}
                />
                <Typography variant="h4" align="center">
                    {t('me.firstname')} {t('me.name')}
                </Typography>
            </Box>
        </Box>
    );
};

export default memo(Home);
