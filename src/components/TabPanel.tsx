import {IconButton, Tabs, Tab, Box} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

const TabPanel = () => (
    <Box>
        <Tabs aria-label="nav tabs" orientation="vertical">
            <Tab label="Home" />
            <Tab label="À propos de moi" />
            <Tab label="Etudes" />
            <Tab label="Experience" />
            <Tab label="Travail" />
            <Tab label="Contact" />
        </Tabs>
    </Box>
)

export default TabPanel