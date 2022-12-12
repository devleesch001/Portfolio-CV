import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import Masonry from '@mui/lab/Masonry';

import { Avatar, Box, Grid, ImageList, Paper, Typography } from '@mui/material';

import '../styles/App.css';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Project = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <Masonry columns={4} spacing={2}>
                {heights.map((height, index) => (
                    <Paper key={index} sx={{ height }}>
                        {index + 1}
                    </Paper>
                ))}
            </Masonry>
        </Box>
    );
};

export default memo(Project);
