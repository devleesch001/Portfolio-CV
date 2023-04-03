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
    TimelineOppositeContent,
} from '@mui/lab';

import '../styles/App.css';
import { useTranslation } from 'react-i18next';

interface studyInterface {
    school: string;
    date: string;
    degree: string;
    city: string;
}

const studyList: studyInterface[] = [
    { school: 'IMERIR', date: '2020 - 2023', degree: 'Manager système informatique et robotique', city: 'Perpignan' },
    {
        school: 'Simplon.co',
        date: '2019 - 2020',
        degree: "Certification Développeur d'objet connecté",
        city: 'Labege Innopole',
    },
    {
        school: 'LPO JULES FIL',
        date: '2017 - 2019',
        degree: 'BTS Système Numérique Informatique et Réseaux',
        city: 'Carcassonne',
    },
    { school: 'LPO JULES FIL', date: '2014 - 2017', degree: 'BAC PRO SEN TR', city: 'Carcassonne' },
];
const Study = () => {
    const { t } = useTranslation();

    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isOpposable = useMediaQuery(theme.breakpoints.up('lg'));

    const isAlternate = !isOpposable && !isSmallScreen;

    return (
        <>
            <Box>
                <Typography textAlign={'center'} variant={'h2'}>
                    {t('title.study')}
                </Typography>
            </Box>
            <Timeline
                position={isAlternate ? 'alternate' : 'right'}
                sx={
                    isAlternate
                        ? {
                              [`& .${timelineItemClasses.root}:before`]: {
                                  xs: { flex: 0, padding: 0 },
                                  md: { flex: 'auto', padding: ['6px', '8px'] },
                              },
                              padding: { xs: 0 },
                          }
                        : {
                              [`& .${timelineItemClasses.root}:before`]: {
                                  xs: { flex: 0, padding: 0 },
                              },
                              padding: { xs: 0 },
                          }
                }
                onResize={undefined}
                onResizeCapture={undefined}
            >
                {studyList.map((element, index) => (
                    <TimelineItem key={index}>
                        {isAlternate && (
                            <TimelineOppositeContent
                                sx={{
                                    paddingRight: { xs: index % 2 && !isSmallScreen ? 'auto' : 0 },
                                    paddingLeft: { xs: index % 2 && !isSmallScreen ? 0 : 'auto' },
                                }}
                                variant={'h5'}
                            >
                                <Box p={1}>
                                    <Typography variant="h5">{element.date}</Typography>
                                </Box>
                            </TimelineOppositeContent>
                        )}
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent
                            sx={
                                isAlternate
                                    ? {
                                          paddingRight: { xs: index % 2 && !isSmallScreen ? 'auto' : 0 },
                                          paddingLeft: { xs: index % 2 && !isSmallScreen ? 0 : 'auto' },
                                      }
                                    : { paddingRight: 0 }
                            }
                        >
                            <Paper elevation={3}>
                                <Box p={2} textAlign="justify">
                                    {!isAlternate && <Typography variant="subtitle2">{element.date}</Typography>}
                                    <Typography paddingTop={1} variant="h5">
                                        {element.school}
                                    </Typography>
                                    <Typography paddingTop={1}>{element.degree}</Typography>
                                    <Typography paddingTop={1} variant="h6">
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

export default memo(Study);
