import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { TabProps } from '@mui/material/Tab/Tab';

export const NavTabs = styled(Tabs)(({ theme }) => ({
    indicator: {
        backgroundColor: theme.palette.secondary.dark,
    },
}));

export const NavTab = styled(Tab)(({ theme }) => ({
    ':hover': {
        color: theme.palette.mode == 'light' ? theme.palette.secondary.dark : theme.palette.secondary.main,
        background: theme.palette.primary.contrastText,
    },
    color: theme.palette.primary.contrastText,
    '&.Mui-selected': {
        backgroundColor: theme.palette.primary.contrastText,
    },
}));
