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

interface workInterface {
    date: string;
    title: string;
    company: string;
    subject: string;
    city: string;
}

const workList: workInterface[] = [
    {
        date: '2020 - 2022',
        title: 'Apprentissage Développeur Web, Back-end | 18 mois',
        company: 'NumericWave',
        subject: 'PHP8 Projet symfony, Api restful API-Platforme',
        city: 'Perpignan',
    },
    {
        date: '2018',
        title: 'Stage – Technicien Datacenter – 6 semaines',
        company: 'Ataraxie',
        subject: 'Déploiement d’une plateforme DNS (bind9 redondé), Déploiement d’un service de téléphonie (3CX)',
        city: 'Carcassonne',
    },
    {
        date: '2016',
        title: 'Stage – Service Informatique – 8 semaines',
        company: 'Grand Narbonne',
        subject:
            'Maintenance des systèmes informatiques du Grand Narbonne' +
            'Project « Pentesting du portail captif » afin de tester la sécurité.' +
            '(Utilisation de kali linux).',
        city: 'Narbonne',
    },
    {
        date: '2016',
        title: 'Stage - 4 semaine',
        company: 'VERSUS Informatique',
        subject: 'Entreprisse de Maintenance Informatique (montage, nettoyage antivirus).',
        city: 'Narbonne',
    },
    {
        date: '2016',
        title: 'Stage – 4 semaines',
        company: 'CATHALA',
        subject: 'Vente et installation de matériel électro-domestique sur Lézignan-Corbières.',
        city: 'Carcassonne',
    },
    {
        date: '2015',
        title: 'Stage – 6 semaines',
        company: 'Clean Ordi',
        subject: 'Maintenance informatique (montage, nettoyage antivirus de pc).',
        city: 'Carcassonne',
    },
];
const Work = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        // <Paper elevation={3}>
        <Timeline
            position={isSmallScreen ? 'right' : 'alternate'}
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    xs: { flex: 0, padding: 0 },
                    md: { flex: 'auto', padding: ['6px', '16px'] },
                },
                padding: { xs: 0 },
            }}
            onResize={undefined}
            onResizeCapture={undefined}
        >
            {workList.map((element, index) => (
                <TimelineItem key={index}>
                    {!isSmallScreen && (
                        <TimelineOppositeContent>
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
                    <TimelineContent sx={{ paddingRight: { xs: 0 } }}>
                        <Paper elevation={3}>
                            <Box p={2}>
                                {isSmallScreen && <Typography variant={'h5'}>{element.date}</Typography>}
                                <Typography variant={'h6'}>{element.company}</Typography>
                                <Typography>{element.title}</Typography>
                                <Typography>{element.subject}</Typography>
                                <Typography variant={'h6'}>{element.city}</Typography>
                            </Box>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
        // </Paper>
    );
};

export default memo(Work);
