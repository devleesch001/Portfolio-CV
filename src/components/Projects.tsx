import React, { memo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import '../styles/Mask.css';
import '../styles/App.css';

import ProjectImages from '../assets/Projects';

import { Card, CardMedia, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material';

import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardInterface {
    title: string;
    img?: string;
    label: string;
    subtitle?: string;
    url?: string;
    srcUrlProject?: string;
}

const itemData: ProjectCardInterface[] = [
    {
        title: 'Linky Adapter',
        img: ProjectImages.linky,
        label: 'Iot',
        subtitle: 'Linky TIC version converter',
        srcUrlProject: 'https://github.com/devleesch001/Linky-TIC-version-converter',
    },
    {
        img: ProjectImages.smartTraficLight,
        title: 'Smart Trafic Light',
        label: 'Iot',
        subtitle: 'Smart Trafic Light IOT with cloud system',
        srcUrlProject: 'https://github.com/devleesch001/smart-trafic-light',
    },
    {
        img: ProjectImages.portFolio,
        title: 'Portfolio',
        label: 'Web',
        subtitle: 'This Portfolio React',
        srcUrlProject: 'https://github.com/devleesch001/Portfolio-CV',
        url: 'https://devleeschauwer.fr',
    },
    {
        img: ProjectImages.weatherCard,
        title: 'WeatherCard',
        label: 'Web',
        subtitle: 'Weather Application',
        srcUrlProject: 'https://github.com/devleesch001/WeatherCard',
        url: 'https://weather.dev-analysis.com/',
    },
];

const filters = ['Tous', 'Iot', 'Web'];

const Projects = () => {
    const { t } = useTranslation();

    const [filter, setFilter] = useState<string>('Tous');

    return (
        <>
            <Typography textAlign={'center'} variant={'h2'}>
                {t('title.project')}
            </Typography>
            <Tabs
                value={filter}
                onChange={(_, v) => setFilter(v)}
                textColor="secondary"
                indicatorColor="secondary"
                centered
                aria-label="secondary tabs example"
            >
                {filters.map((filter) => (
                    <Tab value={filter} label={filter} />
                ))}
            </Tabs>
            <Grid container spacing={5} marginTop={2}>
                {itemData
                    .filter((item) => filter === 'Tous' || item.label === filter)
                    .map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProjectCard cardInfo={item} />
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

export default memo(Projects);

interface ProjectCardProps {
    cardInfo: ProjectCardInterface;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { cardInfo } = props;

    return (
        <Card className={'img-content'}>
            <CardMedia
                component="img"
                image={cardInfo.img ?? ProjectImages.noProject}
                style={{ filter: 'blur(2.5px)' }}
                alt={'project image unavailable'}
                height="100%"
            />
            <div className={'img-mask'} />
            <div className={'img-detail'} style={{ left: '50' }}>
                <span className={'term'}>{cardInfo.label}</span>
                <div className={'action'}>
                    {cardInfo.url && (
                        <IconButton
                            className={'button'}
                            href={cardInfo.url}
                            aria-label={'content-button'}
                            target="_blank"
                        >
                            <PublicIcon />
                        </IconButton>
                    )}
                </div>
                <div className={'info'}>
                    {cardInfo.srcUrlProject && (
                        <IconButton
                            className={'button'}
                            href={cardInfo.srcUrlProject}
                            aria-label={'source-button'}
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                    )}
                </div>
                <div className={'title'}>
                    <Typography variant={'h5'}>{cardInfo.title}</Typography>
                    <Typography>{cardInfo.subtitle}</Typography>
                </div>
            </div>
        </Card>
    );
};
