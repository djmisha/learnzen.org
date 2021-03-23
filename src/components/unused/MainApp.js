import React, { useState } from "react";
import dataArray from "../../data";
import Study from "../study/Study";
import NavBar from "./NavBar";
import MyZen from "../myzen/myZen";
import About from "../about";
import Practice from "../practice";
import Chat from "../chat";
import "../sass/styles.scss";

const AppScreens = {
    home: <MyZen />,
    study: <Study poems={dataArray} />,
    about: <About />,
    meditate: <Practice />,
    chat: <Chat />,
};

function MainApp() {
    const [selectedScreen, setSelectedScreen] = useState("study");
    return (
        <div>
            <NavBar setSelectedScreen={setSelectedScreen} />
            <div className="app-screen">{AppScreens[selectedScreen]}</div>
        </div>
    );
}

export default MainApp;
