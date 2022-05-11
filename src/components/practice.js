import React from "react";
import Meditate from "./meditate/Meditate";

class Practice extends React.Component {
    render() {
        return (
            <div className="app-screen-meditate">
                <div>
                    <h2>Practice Zen Meditation</h2>
                    <Meditate />
                </div>
            </div>
        );
    }
}

export default Practice;
