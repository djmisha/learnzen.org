import React from "react";
import Tabs from "./Tabs";
import SignIn from "./localStorage";
import ZenInfo from "./zenInfo";

class FinalRender extends React.Component {
    render() {
        if (localStorage.currentPoem) {
            return (
                <div>
                    <Tabs />
                </div>
            );
        } else {
            return (
                <div className="onboarding">
                    <p>
                        <strong>
                            Welcome student, <br /> discover your Zen State of
                            Mind.
                        </strong>
                    </p>
                    <p>What is your name?</p>
                    <SignIn />
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <ZenInfo />
                </div>
            );
        }
    }
}

export default FinalRender;
