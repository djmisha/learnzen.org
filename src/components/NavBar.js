import React from "react";
import IconLogo from "../images/icon-logo.js";
import IconBuddah from "../images/icon-buddah.js";
import IconAbout from "../images/icon-about.js";
import IconMeditate from "../images/icon-meditate.js";
import IconChat from "../images/icon-chat.js";

function NavBar({ setSelectedScreen, activeClass }) {
    return (
        <nav>
            <div
                onClick={() => setSelectedScreen("home")}
                className={activeClass}
            >
                <div>
                    <IconBuddah />
                </div>
                <div>My Zen</div>
            </div>
            <div
                onClick={() => setSelectedScreen("study")}
                className={activeClass}
            >
                <div>
                    <IconLogo />
                </div>
                <div>Study</div>
            </div>
            <div
                onClick={() => setSelectedScreen("meditate")}
                className={activeClass}
            >
                <div>
                    <IconMeditate />
                </div>
                <div>Practice</div>
            </div>
            <div
                onClick={() => setSelectedScreen("about")}
                className={activeClass}
            >
                <div>
                    <IconAbout />
                </div>
                <div>About</div>
            </div>
            <div
                onClick={() => setSelectedScreen("chat")}
                className={activeClass}
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
