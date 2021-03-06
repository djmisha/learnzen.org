import React from "react";
import Meditate from "../Meditate";

class Practice extends React.Component {
    render() {
        return (
            <div className="app-screen-meditate">
                <div>
                    <h2>Your Practice</h2>
                    <Meditate />
                </div>
            </div>
        );
    }
}

export default Practice;
