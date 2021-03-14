import React from "react";
import IconLogo from "../images/icon-logo.js";
import IconBuddah from "../images/icon-buddah.js";
import IconAbout from "../images/icon-about.js";
import IconMeditate from "../images/icon-meditate.js";
import IconChat from "../images/icon-chat.js";

function NavBar({ setSelectedScreen }) {
    // console.log(setActiveClass);
    // function setActive() {
    //     return "active";
    // }
    return (
        <nav>
            <div
                onClick={() => {
                    setSelectedScreen("home");
                    // setActive();
                    // setActiveClass("item-active");
                }}
                // className={""}
            >
                <div>
                    <IconBuddah />
                </div>
                <div>My Zen</div>
            </div>
            <div
                onClick={() => setSelectedScreen("study")}
                className={"item-active"}
            >
                <div>
                    <IconLogo />
                </div>
                <div>Study</div>
            </div>
            <div
                onClick={() => setSelectedScreen("meditate")}
                className={"item-active"}
            >
                <div>
                    <IconMeditate />
                </div>
                <div>Practice</div>
            </div>
            <div
                onClick={() => setSelectedScreen("about")}
                className={"item-active"}
            >
                <div>
                    <IconAbout />
                </div>
                <div>About</div>
            </div>
            <div
                onClick={() => setSelectedScreen("chat")}
                className={"item-active"}
            >
                <div>
                    <IconChat />
                </div>
                <div>Chat</div>
            </div>
        </nav>
    );
}

export default NavBar;
