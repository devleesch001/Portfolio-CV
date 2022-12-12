import React, { memo } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';

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
    { school: 'CERTIFICATION  Simplon.co', degree: "Développeur d'objet connecté", city: 'Labege Innopole' },
    { school: 'LPO JULES FIL', degree: 'BTS Système Numérique Informatique et Réseaux', city: 'Carcassonne' },
    { school: 'LPO JULES FIL', degree: 'BAC PRO SEN TR', city: 'Carcassonne' },
];
const Study = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
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
            {studyList.map((element, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ paddingRight: { xs: 0 } }}>
                        <Paper elevation={3}>
                            <Box p={2}>
                                <Typography>{element.school}</Typography>
                                <Typography>{element.degree}</Typography>
                            </Box>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default memo(Study);
