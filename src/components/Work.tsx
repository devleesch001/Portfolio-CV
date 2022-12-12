import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

import '../styles/App.css';

const studyList = [
    {
        company: 'Apprenti développeur Web - Back-end – NumericWave',
        techno: 'PHP8 Projet symfony, Api restful  API-Platforme',
        city: 'Perpignan',
    },
    {
        company: 'Stage – Technicien supérieur – 6 semaines Ataraxie',
        techno: 'Déploiement d’une plateforme DNS (bind9 redondé), Déploiement d’un service de téléphonie (3CX)',
        city: 'Carcassonne',
    },
    {
        company: 'Stage – Technicien Service Informatique – 8 semaines Grand Narbonne',
        techno: 'Maintenance des systèmes informatiques du Grand Narbonne Projet « Pentesting du portail captif » afin de tester la sécurité. (Utilisation de kali linux).',
        city: 'Carcassonne',
    },
    { school: 'LPO JULES FIL', degree: 'BAC PRO SEN TR', city: 'CARCASSONNE 11' },
];
const Work = () => {
    const { t } = useTranslation();

    return (
        <Paper elevation={3}>
            <Timeline position="alternate" onResize={undefined} onResizeCapture={undefined}>
                {studyList.map((element, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography>{element.school}</Typography>
                            <Typography>{element.degree}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Paper>
    );
};

export default memo(Work);
