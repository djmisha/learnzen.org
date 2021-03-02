import React from "react";

// https://programmingwithmosh.com/react/localstorage-react/

class greetUser extends React.Component {
    state = {
        user: "",
        rememberMe: false,
    };

    componentDidMount() {
        // const rememberMe = localStorage.getItem("rememberMe") === "true";
        const user = localStorage.getItem("user");
        // const user = rememberMe ? localStorage.getItem("user") : "";
        this.setState({ user });
        // console.log(user);
    }

    render() {
        if (this.state.user) {
            return (
                <div className="user-hello">
                    <span>Hi, {this.state.user}</span>
                </div>
            );
        } else {
            return (
                <div className="user-hello">
                    <span></span>
                </div>
            );
        }
    }
}

export default greetUser;
