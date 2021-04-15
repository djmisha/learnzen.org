import React from "react";
import Unsplash from "./study/unsplash";

import Accordion from "./about/accordion";

class About extends React.Component {
    render() {
        return (
            <div className="app-screen">
                <div>
                    <h2>About Zen</h2>
                    <Accordion></Accordion>
                </div>
                <Unsplash />
            </div>
        );
    }
}

export default About;
