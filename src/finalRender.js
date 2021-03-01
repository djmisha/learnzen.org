import React from "react";
import dataArray from "./data";
import FileteredPoemsTable from "./FileteredPoemsTable";
import SignIn from "./localStorage";

/* Final Render where we pass in our data as props of FilteredPoemsTable*/

class FinalRender extends React.Component {
    render() {
        // localStorage.clear();
        if (localStorage.currentPoem) {
            return (
                <div>
                    <FileteredPoemsTable poems={dataArray} />
                </div>
            );
        } else {
            return (
                <div className="onboarding">
                    <br></br>
                    <h1>Tao Te Ching</h1>
                    <br></br>
                    <h2>
                        Welcome student. <br /> Discover the meaning of Zen.
                    </h2>
                    <p>What is your name?</p>
                    <SignIn />
                </div>
            );
        }
    }
}

export default FinalRender;
