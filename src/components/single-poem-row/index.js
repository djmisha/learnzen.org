import React from "react";

class SinglePoemRow extends React.Component {
    render() {
        const number = this.props.number;
        const content = this.props.content;
        const className = this.props.className;

        return (
            <li id={number} className={className}>
                <span>{number}</span>
                <p>{content}</p>
            </li>
        );
    }
}

export default SinglePoemRow;
