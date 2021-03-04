import React from "react";
import IconBuddah from "../images/icon-buddah.js";

class MyJourney extends React.Component {
    render() {
        let username = localStorage.user;
        let zenCount = localStorage.zenCount;
        let currentPoem = localStorage.currentPoem;
        let meditationCount = localStorage.meditationCount;

        return (
            <div className="info-overlay info-normal">
                <div className="buddah">
                    <IconBuddah />
                </div>
                <h2>Hello, {username}</h2>
                <p>Your journey...</p>
                <div className="your-journey">
                    <div>
                        <p>ZenZens</p>
                        <h3> {zenCount} </h3>
                    </div>
                    <div>
                        <p>Studying chapter</p>
                        <h3>{currentPoem}</h3>
                    </div>
                    <div>
                        <p>Zen Meditations</p>
                        <h3>{meditationCount}</h3>
                    </div>
                    <div>
                        <p>Shares</p>
                        <h3>soon...</h3>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default MyJourney;
