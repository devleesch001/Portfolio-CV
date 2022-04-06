import React, {memo} from "react";

import { Avatar, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import meImage from "../static/images/avatar/alexis.jpg";

import '../styles/App.css'

const Home = () => {

    const { t } = useTranslation();

    return (
        <Box sx={{
            mx: "auto",
        }}
        >
            <Avatar
                alt={ `${t("me.firstname")} ${t("me.name")}`}
                src={meImage}
                sx={{mx: "auto", width: 256, height: 256}}
            />
            <Typography variant="h3" align="center">
                {t("me.firstname")} {t("me.name")}
            </Typography>
        </Box>
    );
}

export default memo(Home)
