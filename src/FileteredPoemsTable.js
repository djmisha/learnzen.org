import React from "react";
import dataArray from "./data";
import Logo from "./logo.js";
import Hello from "./hello.js";
import NavigationBar from "./navigation-bar";
import PoemsTable from "./PoemsTable";
import WelcomeScene from "./welcome";

class FileteredPoemsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            visiblePoem: parseInt(localStorage.currentPoem),
            logoSpinClass: "spin",
        };
        this.handleSearchFilterTextChange = this.handleSearchFilterTextChange.bind(
            this
        );
        this.handleRandomPoemChange = this.handleRandomPoemChange.bind(this);
        this.handleShowAllPoemChange = this.handleShowAllPoemChange.bind(this);
        this.handleNextPoemChange = this.handleNextPoemChange.bind(this);
        this.handlePrevPoemChange = this.handlePrevPoemChange.bind(this);
        this.handleSpecifiedPoemChange = this.handleSpecifiedPoemChange.bind(
            this
        );
    }

    handleSearchFilterTextChange(filterText) {
        this.setState({
            filterText: filterText,
        });
    }
    handleRandomPoemChange(visiblePoem) {
        const randNumber = Math.floor(Math.random() * dataArray.length) + 1;
        const changelogo =
            this.state.logoSpinClass === "spin" ? "spin-more" : "spin";
        this.setState({
            visiblePoem: randNumber,
            filterText: "",
            logoSpinClass: changelogo,
        });
    }

    handleShowAllPoemChange() {
        this.setState({
            visiblePoem: "all",
        });
    }

    handleNextPoemChange(visiblePoem) {
        if (visiblePoem === dataArray.length || visiblePoem === "all") {
            visiblePoem = 1;
        } else {
            visiblePoem = visiblePoem + 1;
        }

        // console.log(Number(localStorage.totalseenPoems 1));
        let updatedPoemCount = Number(localStorage.totalseenPoems) + 1;
        // let updatedPoemCount = 1 + 1;
        // updatedPoemCount = updatedPoemCount + 1;
        localStorage.setItem("totalseenPoems", updatedPoemCount);

        const changelogo =
            this.state.logoSpinClass === "spin" ? "spin-more" : "spin";

        this.setState({
            visiblePoem: visiblePoem,
            filterText: "",
            logoSpinClass: changelogo,
        });
    }

    handlePrevPoemChange(visiblePoem) {
        if (visiblePoem === 1 || visiblePoem === "all") {
            visiblePoem = dataArray.length;
        } else {
            visiblePoem = visiblePoem - 1;
        }

        const changelogo =
            this.state.logoSpinClass === "spin" ? "spin-more" : "spin";

        this.setState({
            visiblePoem: visiblePoem,
            filterText: "",
            logoSpinClass: changelogo,
        });
    }

    handleSpecifiedPoemChange(visiblePoem) {
        this.setState({
            visiblePoem: visiblePoem,
        });
    }

    render() {
        let readcount = localStorage.totalseenPoems;

        return (
            <div>
                <header className={this.state.logoSpinClass}>
                    <Logo />
                    <Hello />
                    <WelcomeScene />
                    <div className="read-count">{readcount}</div>
                </header>
                <NavigationBar
                    visiblePoem={this.state.visiblePoem}
                    filterText={this.state.filterText}
                    onSearchFilterTextChange={this.handleSearchFilterTextChange}
                    onRandomButtonGenerate={this.handleRandomPoemChange}
                    onShowAllButtonClick={this.handleShowAllPoemChange}
                    onNextPoemButtonClick={this.handleNextPoemChange}
                    onPrevPoemButtonClick={this.handlePrevPoemChange}
                    poems={this.props.poems}
                />
                <PoemsTable
                    poems={this.props.poems}
                    filterText={this.state.filterText}
                    visiblePoem={this.state.visiblePoem}
                />
            </div>
        );
    }
}

export default FileteredPoemsTable;
