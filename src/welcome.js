import React from "react";
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
        let username = localStorage.user;
        let zenCount = localStorage.zenCount;
        let currentPoem = localStorage.currentPoem;

        return (
            <div className={this.state.infoClass}>
                <div className="info" onClick={this.handleinfoChange}>
                    <IconBuddah />
                </div>
                <div className={this.state.overlayClass}>
                    <div onClick={this.handleinfoChange} className="buddah">
                        <IconBuddah />
                    </div>
                    <p>Zen Master</p>
                    <h2>{username}</h2>
                    <p>You have achieved</p>
                    <h3> {zenCount} ZENS</h3>
                    <p>You are studying chapter</p>
                    <h3>{currentPoem}</h3>
                    <br />
                    <br />
                    <div onClick={this.handleinfoChange}>
                        <div className="button">Do, Not Doing</div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeScene;
