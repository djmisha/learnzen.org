import React from "react";
import dataArray from "./data";
import FileteredPoemsTable from "./FileteredPoemsTable";
import SignIn from "./localStorage";

/* Final Render where we pass in our data as props of FilteredPoemsTable*/

class FinalRender extends React.Component {
    render() {
        /* Use this to clear local storage */
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
                    <h1>What is Zen?</h1>
                    <p>Zen is something we are, our true nature expressing itself moment by moment. Zen is also something we do, a disciplined practice through which we can realize the joy of being. </p>
                    <h2>What is the practice of Zen? </h2>
                    <p>Zen is a path that must be studied, practiced, and actualized. The core of Zen is zazen, which requires motivation, patience, discipline, and dedication, and is cultivated through repeated, consistent practice. </p>
                    <h2>How do I find my Zen? </h2>
                    <p>First, breathe in with full awareness. Appreciate it fully. Then breathe out, slowly, with equal appreciation. Hold onto nothing, give it all away. Breathe in with gratitude; breathe out with love. Receiving and offering is what we are doing each time we inhale and exhale. To do so with conscious awareness, on a regular basis, is the transformative practice we call Zen. </p>
                    <h2>What is a Zen State of Mind? </h2>
                    <p>Formal Zen practice begins with two basic activities: we sit, and we breathe, with awareness. From that basic engagement, we extend the activity to include walking, chanting, eating, working and to every aspect of daily life. </p>
                    <h3>What Zen is Not, Common Misconceptions </h3>
                    <p>There are many common misconceptions about Zen. It is important to know that Zen practice is not religion, is not a belief system, is not a dogma or doctrine.  One does not have to be buddist to achieve a zen state of mind. </p>
                    <h2>Welcome student, <br /> Discover your Zen State of Mind. </h2>
                    <p>What is your name?</p>
                    <SignIn />
                </div>
            );
        }
    }
}

export default FinalRender;
