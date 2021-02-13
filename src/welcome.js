import React from "react";
import SignIn from "./localStorage";
import IconBuddah from "./images/icon-buddah.js";

class WelcomeScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoClass: "the-info-icon info-normal",
            overlayClass: "info-overlay info-hidden",
        };
        this.handleinfoChange = this.handleinfoChange.bind(this);
    }
    handleinfoChange() {
        const changeinfo =
            this.state.infoClass === "the-info-icon info-normal"
                ? "the-info-icon info-change"
                : "the-info-icon info-normal";
        const changeOverlay =
            this.state.overlayClass === "info-overlay info-hidden"
                ? "info-overlay info-visible"
                : "info-overlay info-hidden";
        this.setState({
            infoClass: changeinfo,
            overlayClass: changeOverlay,
        });
    }
    render() {
        return (
            <div className={this.state.infoClass}>
                <div className="info" onClick={this.handleinfoChange}>
                    <IconBuddah />
                </div>
                <div className={this.state.overlayClass}>
                    <p>Hello, Zen Master</p>
                    <SignIn />
                    <div onClick={this.handleinfoChange} className="buddah">
                        <br />
                        <br />
                        <IconBuddah />
                        {/* <span>道德经</span> */}
                        {/* <span>Tao Te Ching</span> */}
                        {/* <p>
                            The Tao Te Ching is the fundamental text for
                            philosophical Taoism, it is traditionally credited
                            to the 6th-century BC sage Laozi.
                            <br />
                            <br />
                            Ready to for enlightenment? Click on the Budah to
                            start exploring
                            <br /> <br />
                        </p> */}
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeScene;
