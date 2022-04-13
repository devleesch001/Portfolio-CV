import React, { Fragment, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import '../styles/App.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <Typography align={'justify'}>
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
                {t('about.content')}
            </Typography>
        </Fragment>
    );
};

export default memo(About);
