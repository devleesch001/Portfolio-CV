import React, { memo } from 'react';

import { useTheme } from '@mui/material/styles';
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

interface studyInterface {
    school: string;
    degree: string;
    city: string;
}

const studyList: studyInterface[] = [
    { school: 'IMERIR', degree: 'Manager système informatique et robotique', city: 'Perpignan' },
    { school: 'CERTIFICATION  Simplon.co', degree: "Développeur d'objet connecté", city: 'LABEGE INNOPOLE' },
    { school: 'LPO JULES FIL', degree: 'BTS Système Numérique Informatique et Réseaux', city: 'CARCASSONNE 11' },
    { school: 'LPO JULES FIL', degree: 'BAC PRO SEN TR', city: 'CARCASSONNE 11' },
];
const Study = () => {
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
                onResize={undefined}
                onResizeCapture={undefined}
            >
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
