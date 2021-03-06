import React, { useRef } from "react";
import Delayed from "../delayDisplay";

class SinglePoemRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.className,
        };
    }

    render() {
        localStorage.setItem("currentPoem", this.props.number);

        let number = this.props.number;
        let content = this.props.content;

        content = content.split("\n").map((str, index) => (
            <Delayed waitBeforeShow={1500 * index} key={index}>
                <p>{str}</p>
            </Delayed>
        ));

        return (
            <li id={number} className={this.state.visible}>
                <span>{number}</span>
                <div className="poem-content">{content}</div>
            </li>
        );
    }
}

export default SinglePoemRow;
