import React from "react";

// https://programmingwithmosh.com/react/localstorage-react/

class SignIn extends React.Component {
    state = {
        user: "",
        rememberMe: false,
    };

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === "checkbox" ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem("rememberMe", rememberMe);
        localStorage.setItem("user", rememberMe ? user : "");
    };

    

    componentDidMount() {
        const rememberMe = localStorage.getItem("rememberMe") === "true";
        const user = rememberMe ? localStorage.getItem("user") : "";
        this.setState({ user, rememberMe });
        console.log(user);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="call-by-name">
                <label>{this.state.user}</label>
                <label>
                    Name:{" "}
                    <input
                        name="user"
                        value={this.state.user}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <input
                        name="rememberMe"
                        checked={this.state.rememberMe}
                        onChange={this.handleChange}
                        type="checkbox"
                    />{" "}
                    Zen me out
                </label>
                <button type="submit button button-primary">Let's Zen</button>
            </form>
        );
    }
}

export default SignIn;
