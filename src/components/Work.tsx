import React, { memo } from 'react';

import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses,
    TimelineOppositeContent,
} from '@mui/lab';

import '../styles/App.css';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

interface workInterface {
    date: string;
    title: string;
    duration: string;
    company: string;
    subject: string;
    city: string;
}

const workList: workInterface[] = [
    {
        date: '2020 - 2022',
        title: 'Apprenti – Développeur Back-end',
        duration: '18 mois',
        company: 'NumericWave',
        subject: 'PHP8 Projet symfony, Api restful API-Platforme',
        city: 'Perpignan',
    },
    {
        date: '2018',
        title: 'Stage – Technicien Datacenter',
        duration: '6 semaines',
        company: 'Ataraxie',
        subject: 'Déploiement d’une plateforme DNS (bind9 redondé), Déploiement d’un service de téléphonie (3CX)',
        city: 'Carcassonne',
    },
    {
        date: '2016',
        title: 'Stage – Service Informatique',
        duration: '8 semaines',
        company: 'Grand Narbonne',
        subject:
            'Maintenance des systèmes informatiques du Grand Narbonne' +
            'Project « Pentesting du portail captif » afin de tester la sécurité.' +
            '(Utilisation de kali linux).',
        city: 'Narbonne',
    },
    // {
    //     date: '2016',
    //     title: 'Stage - Technicien Informatique',
    //     duration: '4 semaines',
    //     company: 'VERSUS Informatique',
    //     subject: 'Entreprisse de Maintenance Informatique (montage, nettoyage antivirus).',
    //     city: 'Narbonne',
    // },
    // {
    //     date: '2016',
    //     title: 'Stage - Technicien Installateur',
    //     duration: '4 semaines',
    //     company: 'CATHALA',
    //     subject: 'Vente et installation de matériel électro-domestique sur Lézignan-Corbières.',
    //     city: 'Carcassonne',
    // },
    // {
    //     date: '2015',
    //     title: 'Stage - Technicien Informatique',
    //     duration: '6 semaines',
    //     company: 'Clean Ordi',
    //     subject: 'Maintenance informatique (montage, nettoyage antivirus de pc).',
    //     city: 'Carcassonne',
    // },
];
const Work = () => {
    const { t } = useTranslation();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Box>
                <Typography textAlign={'center'} variant={'h2'}>
                    {t('title.work')}
                </Typography>
            </Box>

            <Timeline
                position={isSmallScreen ? 'right' : 'alternate'}
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        xs: { flex: 0, padding: 0 },
                        md: { flex: 'auto', padding: ['6px', '8px'] },
                    },
                    [`& .${timelineItemClasses.root}:after`]: {
                        xs: { flex: 0, padding: 0 },
                        md: { flex: 'auto', padding: ['6px', '8px'] },
                    },
                    padding: { xs: 0 },
                }}
                onResize={undefined}
                onResizeCapture={undefined}
            >
                {workList.map((element, index) => (
                    <TimelineItem key={index}>
                        {!isSmallScreen && (
                            <TimelineOppositeContent
                                sx={{
                                    paddingRight: { xs: index % 2 && !isSmallScreen ? 'auto' : 0 },
                                    paddingLeft: { xs: index % 2 && !isSmallScreen ? 0 : 'auto' },
                                }}
                                variant={'h5'}
                            >
                                <Box p={1}>
                                    <Typography variant={'h5'}>{element.date}</Typography>
                                </Box>
                            </TimelineOppositeContent>
                        )}

                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                                <WorkIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{
                                paddingRight: { xs: index % 2 && !isSmallScreen ? 'auto' : 0 },
                                paddingLeft: { xs: index % 2 && !isSmallScreen ? 0 : 'auto' },
                            }}
                        >
                            <Paper elevation={3}>
                                <Box p={2} textAlign={'justify'}>
                                    {isSmallScreen && (
                                        <Typography variant={'subtitle2'}>
                                            {element.date} ({element.duration})
                                        </Typography>
                                    )}
                                    <Typography paddingTop={1} variant={'h5'}>
                                        {element.company}
                                    </Typography>
                                    <Typography paddingTop={1} variant={'overline'}>
                                        {element.title}
                                    </Typography>
                                    <Typography paddingTop={1}>{element.subject}</Typography>
                                    <Typography paddingTop={1} variant={'h6'}>
                                        {element.city}
                                    </Typography>
                                </Box>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </>
    );
};

export default memo(Work);
