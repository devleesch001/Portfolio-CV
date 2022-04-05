import React, {memo} from "react";

import {Container, Avatar, Typography} from "@mui/material";

import meImage from "../static/images/avatar/alexis.jpg";

import '../styles/App.css'

const Home = () => {

    return (
        <Container className={"folio-home"}>
            <Typography>
                WIP !
            </Typography>
            <Avatar
                alt="Alexis DEVLEESCHAUWER"
                src={meImage}
                sx={{ width: 256, height: 256 }}
            />
        </Container>
    );
}

export default memo(Home)
