import React from "react";
// import IconInfo from "./images/icon-info.js";
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
                    <div onClick={this.handleinfoChange} className="buddah">
                        <IconBuddah />
                    </div>
                    <span>道德经</span>
                    <span>Tao Te Ching</span>
                    <p>
                        The Tao Te Ching is the fundamental text for
                        philosophical Taoism, it is traditionally credited to
                        the 6th-century BC sage Laozi.
                        {/* <br />
                        <br />
                        Ready to for enlightenment? */}
                        <br /> <br />
                    </p>
                    May we call you by name?
                    {/* <form>
                        <label>
                            <span></span>
                            <input
                                type="text"
                                placeholder="Your name..."
                                value={this.props.filterText}
                                onChange={this.handleSearchFilterTextChange}
                                className={this.state.searchClass}
                            />
                        </label>
                    </form> */}
                    <br />
                    <div
                        onClick={this.handleinfoChange}
                        className=" button button-primary"
                    >
                        Lets Zen
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeScene;
