import React, { memo } from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import meImage from '../assets/alexis.webp';

import '../styles/App.css';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ height: '100vh' }}>
            <Box sx={{ marginY: '25vh' }}>
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
