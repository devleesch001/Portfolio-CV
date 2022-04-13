import React, { Fragment, memo } from 'react';

import { Alert, Avatar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import meImage from '../static/images/avatar/alexis.jpg';

import '../styles/App.css';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <Alert severity="error"> WIP! </Alert>
            <Avatar alt={`${t('me.firstname')} ${t('me.name')}`} src={meImage} sx={{ mx: 'auto', width: 256, height: 256 }} />
            <Typography variant="h4" align="center">
                {t('me.firstname')} {t('me.name')}
            </Typography>
        </Fragment>
    );
};

export default memo(Home);
