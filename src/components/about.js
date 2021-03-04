import React from "react";
// import ZenInfo from "./zenInfo";
import Accordion from "./about/accordion";

class About extends React.Component {
    render() {
        return (
            <div className="app-screen">
                <div>
                    <h2>About Zen</h2>
                    <Accordion></Accordion>
                </div>
            </div>
        );
    }
}

export default About;
