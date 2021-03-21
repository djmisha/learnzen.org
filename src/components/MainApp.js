import React, { useState } from "react";
import dataArray from "../data";
import Study from "./study/Study";
import NavBar from "./NavBar";
import MyZen from "./myzen/myZen";
import About from "./about";
import Practice from "./practice";
import Chat from "./chat";
import "../sass/styles.scss";

const Screens = {
    home: <MyZen />,
    study: <Study poems={dataArray} />,
    about: <About />,
    meditate: <Practice />,
    chat: <Chat />,
};

function MainApp() {
    const [selectedScreen, setSelectedScreen] = useState("study");
    const [activeClass, setActiveClass] = useState("not-active");

    return (
        <div>
            <NavBar
                setSelectedScreen={setSelectedScreen}
                setActiveClass={setActiveClass}
                activeClass={activeClass}
            />
            {/* this is the main content of the page */}
            {Screens[selectedScreen]}
        </div>
    );
}

export default MainApp;
