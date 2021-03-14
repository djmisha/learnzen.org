import React from "react";
import IconBuddah from "../../images/icon-buddah.js";
import Unsplash from "../study/unsplash";
import IntroVideo from "./youTube.js";
import "./myZen.scss";

class MyZen extends React.Component {
    render() {
        let username = localStorage.user;
        let zenCount = localStorage.zenCount;
        let currentPoem = localStorage.currentPoem;
        let meditationCount = localStorage.meditationCount;

        return (
            <div className="screen-myzen">
                <h2>
                    <div className="buddah">
                        <IconBuddah />
                    </div>
                    Hello, {username}
                </h2>
                <p>
                    This is your Zen journey so far so you'll see your progress
                    here.
                </p>
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
                <h2>Introduction to Taoism</h2>
                <p>
                    Watch this video to get an introduction to Taoism to get an
                    understanding of Tao Te Ching philosophies and teachings.
                </p>
                <IntroVideo />
                <Unsplash />
            </div>
        );
    }
}

export default MyZen;
