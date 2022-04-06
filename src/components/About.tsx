import React, {memo} from "react";

import { useTranslation } from "react-i18next";

import { Typography, Box } from "@mui/material";


import '../styles/App.css'

const About = () => {

    const { t } = useTranslation();

    return (
        <Box sx={{
            mx: "auto",
        }}
        >
            <Typography>
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
                { t("about.content") }
            </Typography>
        </Box>
    );
}

export default memo(About)
