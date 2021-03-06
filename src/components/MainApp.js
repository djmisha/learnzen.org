import React, { useState } from "react";
import dataArray from "../data";
import Study from "./Study";
import NavBar from "./NavBar";
import MyJourney from "./myJourney";
import About from "./about";
import Practice from "./practice";
import Chat from "./chat";
import "../sass/styles.scss";

const TABS = {
    home: <MyJourney />,
    study: <Study poems={dataArray} />,
    about: <About />,
    meditate: <Practice />,
    chat: <Chat />,
};

function MainApp() {
    const [selectedTab, setSelectedTab] = useState("study");

    return (
        <div>
            <NavBar setSelectedTab={setSelectedTab} />
            {/* this is the main content of the page */}
            {TABS[selectedTab]}
        </div>
    );
}

export default MainApp;
