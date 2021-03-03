import React, { useState } from "react";
// import FinalRender from "./finalRender.js";
import dataArray from "./data";
import FileteredPoemsTable from "./FileteredPoemsTable";
import NavBar from "./NavBar";
import MyJourney from "./myJourney";
import "./sass/styles.scss";

const TABS = {
    home: <MyJourney />,
    study: <FileteredPoemsTable poems={dataArray} />,
    // 'contact': <Contact />
};

function MainApp() {
    const [selectedTab, setSelectedTab] = useState("home");

    return (
        <div>
            <NavBar setSelectedTab={setSelectedTab} />
            {/* this is the main content of the page */}
            {TABS[selectedTab]}
        </div>
    );
}

// function App() {
//     return (
//         <main className="App">
//             <FinalRender />
//         </main>
//     );
// }

export default MainApp;
