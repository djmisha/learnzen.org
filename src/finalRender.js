import React from "react";
import dataArray from "./data";
import FileteredPoemsTable from "./FileteredPoemsTable";
// import SignIn from "./localStorage";
// import Hello from "./hello"

/* Final Render where we pass in our data as props of FilteredPoemsTable*/

class FinalRender extends React.Component {
    render() {
        return (
            <div>
                <FileteredPoemsTable poems={dataArray} />
            </div>
        );
    }
}

export default FinalRender;
