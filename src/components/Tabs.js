import React from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";

import dataArray from "../data";
import Study from "./study/Study";
import MyZen from "./myzen/myZen";
import About from "./about";
import Practice from "./practice";
import Chat from "./chat";
import "../sass/styles.scss";

import IconLogo from "../images/icon-logo.js";
import IconBuddah from "../images/icon-buddah.js";
import IconAbout from "../images/icon-about.js";
import IconMeditate from "../images/icon-meditate.js";
import IconChat from "../images/icon-chat.js";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
    const { isActive, onClick } = useTabState("inactive");

    console.log(isActive);

    return (
        <button className={cn("tab", isActive && "active")} onClick={onClick}>
            {children}
        </button>
    );
};

export default () => (
    <Tabs>
        <div className="tabs">
            <div className="tab-list">
                <Tab>
                    <div>
                        <IconBuddah />
                    </div>
                    <div>My Zen</div>
                </Tab>

                <Tab>
                    <div>
                        <IconLogo />
                    </div>
                    <div>Study</div>
                </Tab>

                <Tab>
                    <div>
                        <IconMeditate />
                    </div>
                    <div>Practice</div>
                </Tab>

                <Tab>
                    <div>
                        <IconAbout />
                    </div>
                    <div>About</div>
                </Tab>

                <Tab>
                    <div>
                        <IconChat />
                    </div>
                    <div>Chat</div>
                </Tab>
            </div>
            <div className="tab-progress" />
            <Panel>
                <MyZen />
            </Panel>

            <Panel>
                <Study poems={dataArray} />
            </Panel>

            <Panel>
                <Practice />
            </Panel>

            <Panel>
                <About />
            </Panel>

            <Panel>
                <Chat />
            </Panel>
        </div>
    </Tabs>
);
