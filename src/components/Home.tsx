import {Tabs, Tab} from "@mui/material";
import '../styles/Tab.css'
const Home = () => (
    <nav className={"folio-tab"}>
        <Tabs aria-label="nav tabs"
              orientation="vertical"
              textColor="primary"
        >
            <Tab label="Home" color={"#ffffff"} />
            <Tab label="À propos de moi" />
            <Tab label="Etudes" />
            <Tab label="Experience" />
            <Tab label="Travail" />
            <Tab label="Contact" />
        </Tabs>
    </nav>
)

export default Home