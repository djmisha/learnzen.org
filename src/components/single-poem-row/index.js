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

        // console.log(this.props.number, this.props.className);

        console.log(changeClass);

        this.setState({
            visible: changeClass,
        });
    }
    render() {
        const number = this.props.number;
        const content = this.props.content;
        // const className = ;

        return (
            <li
                id={number}
                className={this.state.visible}
                onClick={this.handlePoemClick}
            >
                <span>{number}</span>
                <p>{content}</p>
            </li>
        );
    }
}

export default SinglePoemRow;
