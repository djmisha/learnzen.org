import React from "react";

// https://programmingwithmosh.com/react/localstorage-react/

class SignIn extends React.Component {
    state = {
        user: "",
        currentPoem: null,
        totalseenPoems: 0,
        zenCount: null,
        meditationCount: 0,
    };

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === "checkbox" ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { user, currentPoem } = this.state;

        localStorage.setItem("user", user);
        localStorage.setItem("totalseenPoems", 0);

        if (currentPoem === null) {
            localStorage.setItem("zenCount", 0.05);
            localStorage.setItem("currentPoem", 1);
            localStorage.setItem("meditationCount", 0.1);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="call-by-name">
                {/* <div className="call-by-name">{this.state.user}</div> */}
                {/* <label>{this.state.user}</label> */}
                <label>
                    {/* Name{" "} */}
                    <input
                        name="user"
                        value={this.state.user}
                        onChange={this.handleChange}
                    />
                </label>
                {/* <label>
                        <input
                            name="rememberMe"
                            checked={this.state.rememberMe}
                            onChange={this.handleChange}
                            type="checkbox"
                        />{" "}
                        Zen me out
                    </label> */}
                <button type="submit button">Begin My Journey</button>
            </form>
        );
    }
}

export default SignIn;
