import React from "react";

class SinglePoemRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.handlePoemClick = this.handlePoemClick.bind(this);  
    }
        
    handlePoemClick() {
        const changeClass =
        this.props.className === "visiblePoem"
        ? ""
        : "visiblePoem";
        console.log(this.props.number, this.props.className);
        console.log(changeClass);
        this.setState({
            visible: changeClass,
        });
    }
    render() {
        const number = this.props.number;
        const content = this.props.content;
        const className = this.props.className;

        return (
            <li id={number} className={className} onClick={this.handlePoemClick}>
                <span>{number}</span>
                <p>{content}</p>
            </li>
        );
    }
}

export default SinglePoemRow;
