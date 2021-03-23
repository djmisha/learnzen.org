import React from "react";
import IconLogo from "../../images/icon-logo.js";
import IconBuddah from "../../images/icon-buddah.js";
import IconAbout from "../../images/icon-about.js";
import IconMeditate from "../../images/icon-meditate.js";
import IconChat from "../../images/icon-chat.js";
import NavIcon from "../nav-icon.js";

function NavBar({ setSelectedScreen }) {
    // console.log(setSelectedScreen());
    return (
        <nav>
            <NavIcon />
            <div
                onClick={() => {
                    setSelectedScreen("home");
                }}
            >
                <div>
                    <IconBuddah />
                </div>
                <div>My Zen</div>
            </div>
            <div onClick={() => setSelectedScreen("study")}>
                <div>
                    <IconLogo />
                </div>
                <div>Study</div>
            </div>
            <div onClick={() => setSelectedScreen("meditate")}>
                <div>
                    <IconMeditate />
                </div>
                <div>Practice</div>
            </div>
            <div onClick={() => setSelectedScreen("about")}>
                <div>
                    <IconAbout />
                </div>
                <div>About</div>
            </div>
            <div onClick={() => setSelectedScreen("chat")}>
                <div>
                    <IconChat />
                </div>
                <div>Chat</div>
            </div>
        </nav>
    );
}

export default NavBar;
