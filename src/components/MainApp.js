import React, { useState } from "react";
import dataArray from "../data";
import FileteredPoemsTable from "./fileteredPoemsTable";
import NavBar from "./NavBar";
import MyJourney from "./myJourney";
import About from "./about";
import Practice from "./practice";
import "../sass/styles.scss";

const TABS = {
    home: <MyJourney />,
    study: <FileteredPoemsTable poems={dataArray} />,
    about: <About />,
    meditate: <Practice />,
};

function MainApp() {
    const [selectedTab, setSelectedTab] = useState("meditate");

    return (
        <div>
            <NavBar setSelectedTab={setSelectedTab} />
            {/* this is the main content of the page */}
            {TABS[selectedTab]}
        </div>
    );
}

export default MainApp;
