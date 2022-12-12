import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

import '../styles/App.css';

const studyList = [
    { school: 'IMERIR', degree: 'Manager système informatique et robotique', city: 'Perpignan' },
    { school: 'CERTIFICATION  Simplon.co', degree: "Développeur d'objet connecté", city: 'LABEGE INNOPOLE' },
    { school: 'LPO JULES FIL', degree: 'BTS Système Numérique Informatique et Réseaux', city: 'CARCASSONNE 11' },
    { school: 'LPO JULES FIL', degree: 'BAC PRO SEN TR', city: 'CARCASSONNE 11' },
];
const Study = () => {
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

export default memo(Study);
