import React from "react";
// import dataArray from "./data";
// import FileteredPoemsTable from "./FileteredPoemsTable";
import Tabs from "./Tabs";
import SignIn from "./localStorage";
import ZenInfo from "./zenInfo";

/* Final Render where we pass in our data as props of FilteredPoemsTable*/

class FinalRender extends React.Component {
    render() {
        /* Use this to clear local storage */
        // localStorage.clear();
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
