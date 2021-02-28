import React from "react";

class SinglePoemRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.className,
        };
        // this.handlePoemClick = this.handlePoemClick.bind(this);
    }

    // handlePoemClick() {
    //     let changeClass = "";

    //     if (this.state.visible === "visiblePoem") {
    //         changeClass = "";
    //     } else {
    //         changeClass = "visiblePoem";
    //     }

    //     // Update Zen Count
    //     let updatedPoemCount = Number(localStorage.zenCount) + 0.01;
    //     updatedPoemCount = updatedPoemCount.toFixed(2);
    //     localStorage.setItem("zenCount", updatedPoemCount);

    //     this.setState({
    //         visible: changeClass,
    //     });
    // }
    render() {
        let number = this.props.number;
        let content = this.props.content;
        content = content
            .split("\n")
            .map((str, index) => <p key={index}>{str}</p>);

        // Updates Current Poem in Local Storage
        localStorage.setItem("currentPoem", this.props.number);

        return (
            <li
                id={number}
                className={this.state.visible}
                // onClick={this.handlePoemClick}
            >
                <span>{number}</span>
                <div className="poem-content">{content}</div>
            </li>
        );
    }
}

export default SinglePoemRow;
