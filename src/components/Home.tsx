import React, {memo} from "react";

import {Container} from "@mui/material";
import Avatar from '@mui/material/Avatar';

import '../styles/App.css'

const Home = () => {

    return (
        <Container className={"folio-home"}>
            Hello World!
            <Avatar>H</Avatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src="../static/images/avatar/alexis.jpg" />*/}
        </Container>
    );
}

export default memo(Home)