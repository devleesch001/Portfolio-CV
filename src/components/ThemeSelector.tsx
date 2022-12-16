import React from 'react';

import { ColorModeContext, themeSelectorType } from '../App';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';

const ThemeSelector: React.FC = () => {
    const colorMode = React.useContext(ColorModeContext);

    const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: themeSelectorType) => {
        colorMode.selectColorMode(newValue);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={colorMode.mode}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton aria-label="light-theme-button" value="light">
                <Brightness7Icon />
            </ToggleButton>
            <ToggleButton aria-label="dark-theme-button" value="dark">
                <Brightness4Icon color="inherit" />
            </ToggleButton>
            <ToggleButton aria-label="auto-theme-button" value="auto">
                <BrightnessAutoIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ThemeSelector;
