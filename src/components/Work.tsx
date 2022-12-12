import React, { memo } from 'react';

import { Paper, Typography, useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses,
} from '@mui/lab';

import '../styles/App.css';
import { useTheme } from '@mui/material/styles';

interface workInterface {
    company: string;
    subject: string;
    city: string;
}

const workList: workInterface[] = [
    {
        company: 'Apprenti développeur Web - Back-end – NumericWave',
        subject: 'PHP8 Projet symfony, Api restful  API-Platforme',
        city: 'Perpignan',
    },
    {
        company: 'Stage – Technicien supérieur – 6 semaines Ataraxie',
        subject: 'Déploiement d’une plateforme DNS (bind9 redondé), Déploiement d’un service de téléphonie (3CX)',
        city: 'Carcassonne',
    },
    {
        company: 'Stage – Technicien Service Informatique – 8 semaines Grand Narbonne',
        subject:
            'Maintenance des systèmes informatiques du Grand Narbonne Projet ' +
            '« Pentesting du portail captif » afin de tester la sécurité. (Utilisation de kali linux).',
        city: 'Carcassonne',
    },
    { company: 'LPO JULES FIL', subject: 'BAC PRO SEN TR', city: 'CARCASSONNE 11' },
];
const Work = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Paper elevation={3}>
            <Timeline
                position={isSmallScreen ? 'right' : 'alternate'}
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        xs: { flex: 0, padding: 0 },
                        md: { flex: 'auto', padding: ['6px', '16px'] },
                    },
                }}
                onResize={() => console.log('resize')}
                onResizeCapture={() => console.log('resize')}
            >
                {workList.map((element, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography>{element.company}</Typography>
                            <Typography>{element.subject}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Paper>
    );
};

export default memo(Work);
