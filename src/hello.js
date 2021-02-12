import React from "react";

// https://programmingwithmosh.com/react/localstorage-react/

class Hello extends React.Component {
    state = {
        user: "",
        rememberMe: false,
    };

    componentDidMount() {
        const rememberMe = localStorage.getItem("rememberMe") === "true";
        const user = rememberMe ? localStorage.getItem("user") : "";
        this.setState({ user, rememberMe });
        console.log(user);
    }

    render() {
        return (
            <div className="user-hello">
                <span>{this.state.user}</span>
            </div>
        );
    }
}

export default Hello;
