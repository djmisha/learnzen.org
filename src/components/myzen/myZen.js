import React from "react";
// import IconBuddah from "../images/icon-buddah.js";
import Unsplash from "../study/unsplash";
import "./myZen.scss";

class MyZen extends React.Component {
    render() {
        let username = localStorage.user;
        let zenCount = localStorage.zenCount;
        let currentPoem = localStorage.currentPoem;
        let meditationCount = localStorage.meditationCount;

        return (
            <div className="screen-myzen">
                <div className="buddah">{/* <IconBuddah /> */}</div>
                <h2>Hello, {username}</h2>
                <p>Your Zen journey...</p>
                <div className="your-journey">
                    <div>
                        <p>Studying chapter</p>
                        <h3>{currentPoem}</h3>
                    </div>
                    <div>
                        <p>Zen Meditations</p>
                        <h3>{meditationCount / 20}</h3>
                    </div>
                    <div>
                        <p>ZenZens</p>
                        <h3> {zenCount} </h3>
                    </div>
                    <div>
                        <p>Shares</p>
                        <h3>Coming soon...</h3>
                    </div>
                </div>
                <br />
                <Unsplash />
            </div>
        );
    }
}

export default MyZen;
