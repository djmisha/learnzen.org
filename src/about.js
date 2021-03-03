import React from "react";
import IconInfo from "./images/icon-info.js";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoClass: "the-info-icon info-change",
            // overlayClass: "info-overlay info-visible",
        };
        //this.handleinfoChange = this.handleinfoChange.bind(this);
    }

    render() {
        return (
            <div className={this.state.infoClass}>
                <div className="info">
                    <IconInfo />
                </div>
                <div>
                    <span>道德经</span>
                    <span>Tao Te Ching</span>
                    <p>
                        The Tao Te Ching is traditionally credited to the
                        6th-century BC sage Laozi, it is the fundamental text
                        for philosophical Taoism.
                        <br />
                        <br />
                        Explore the teaching of the Tao by using the navigation
                        below, you can read all verses, view one at at time or
                        get a random verse using the buttons.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
