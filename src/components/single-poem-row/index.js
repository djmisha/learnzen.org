import React from "react";

class SinglePoemRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.className,
        };
        this.handlePoemClick = this.handlePoemClick.bind(this);
    }

    handlePoemClick() {
        let changeClass = "";

        if (this.state.visible === "visiblePoem") {
            changeClass = "";
        } else {
            changeClass = "visiblePoem";
        }

        let updatedPoemCount = Number(localStorage.totalseenPoems) + 1;
        // let updatedPoemCount = 1 + 1;
        // updatedPoemCount = updatedPoemCount + 1;
        localStorage.setItem("totalseenPoems", updatedPoemCount);

        console.log(changeClass);

        this.setState({
            visible: changeClass,
        });
    }
    render() {
        const number = this.props.number;
        let content = this.props.content;
        content = content
            .split("\n")
            .map((str, index) => <p key={index}>{str}</p>);

        // Updates Current Poem
        localStorage.setItem("currentPoem", this.props.number);
        // console.log(localStorage.currentPoem);

        return (
            <li
                id={number}
                className={this.state.visible}
                onClick={this.handlePoemClick}
            >
                <span>{number}</span>
                <div className="poem-content">{content}</div>
            </li>
        );
    }
}

export default SinglePoemRow;
