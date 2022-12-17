import React, { memo, ReactElement } from 'react';

import '../styles/Mask.css';

import { Box, Button, Grid, Typography } from '@mui/material';

import '../styles/App.css';

import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FaGitlab } from 'react-icons/fa';

interface ContactsCardInterface {
    logo: ReactElement;
    content: string;
    url: string;
}

const itemData: ContactsCardInterface[] = [
    {
        logo: <EmailIcon fontSize={'inherit'} />,
        content: 'alexis@devleeschauwer.fr',
        url: 'mailto:alexis@devleeschauwer.fr',
    },
    // {
    //     logo: <PhoneIcon fontSize={'inherit'} />,
    //     content: '+33 6 00 00 00 00',
    //     url: 'tel:+33600000000',
    // },
    {
        logo: <GitHubIcon fontSize={'inherit'} />,
        content: 'github',
        url: 'https://github.com/devleesch001',
    },
    {
        logo: <FaGitlab fontSize={'inherit'} />,
        content: 'gitlab',
        url: 'https://gitlab.com/devleesch',
    },
    {
        logo: <LinkedInIcon fontSize={'inherit'} />,
        content: 'linkedin',
        url: 'https://www.linkedin.com/in/alexis-devleeschauwer/',
    },
];

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <>
            <Box>
                <Typography textAlign={'center'} variant={'h2'}>
                    {t('title.contact')}
                </Typography>
            </Box>
            <Grid container spacing={5} justifyContent="center" alignContent={'center'} marginTop={2}>
                {itemData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                        <ProjectCard cardInfo={item} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default memo(Contacts);

interface ProjectCardProps {
    cardInfo: ContactsCardInterface;
}
const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { cardInfo } = props;

    return (
        <Button variant="contained" href={cardInfo.url} target={'_blank'} sx={{ textTransform: 'none' }} fullWidth>
            <Box
                p={5}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                    borderRadius: 1,
                }}
            >
                <Box sx={{ fontSize: '100px' }}>{cardInfo.logo}</Box>
                <Typography variant={'h6'}>{cardInfo.content}</Typography>
            </Box>
        </Button>
    );
};
