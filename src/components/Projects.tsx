import React, { memo } from 'react';

import '../styles/Mask.css';

import { Card, CardMedia, Grid } from '@mui/material';

import ProjectImages from '../assets/Projects';

import '../styles/App.css';

interface ProjectCardInterface {
    img: string;
    title: string;
    subtitle?: string;
    url?: string;
    srcUrlProject?: string;
}

const itemData: ProjectCardInterface[] = [
    {
        img: ProjectImages.linky,
        title: 'Linky Adapter',
        subtitle: 'Linky TIC version converter',
        srcUrlProject: 'https://github.com/devleesch001/Linky-TIC-version-converter',
    },
    {
        img: ProjectImages.smartTraficLight,
        title: 'Smart Trafic Light',
        subtitle: 'Smart Trafic Light IOT with cloud system',
        srcUrlProject: 'https://github.com/devleesch001/smart-trafic-light',
        url: 'https://github.com/devleesch001/smart-trafic-light',
    },
    {
        img: ProjectImages.portFolio,
        title: 'Portfolio',
        subtitle: 'This Portfolio React',
        srcUrlProject: 'https://github.com/devleesch001/Portfolio-CV',
    },
    {
        img: ProjectImages.weatherCard,
        title: 'WeatherCard',
        subtitle: 'Weather Application',
        srcUrlProject: 'https://github.com/devleesch001/WeatherCard',
    },
];

const Projects = () => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {itemData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProjectCard cardInfo={item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default memo(Projects);

interface ProjectCardProps {
    cardInfo: ProjectCardInterface;
}
const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { cardInfo } = props;

    return (
        <Card>
            <div className={'img-content'}>
                <CardMedia component="img" image={cardInfo.img} style={{ filter: 'blur(3px)' }} />
                <div className={'img-mask'} />
            </div>
        </Card>
    );
};
