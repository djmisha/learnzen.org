import React from "react";
import dataArray from "./data";
import Logo from "./logo.js";
import Hello from "./hello.js";
import NavigationBar from "./navigation-bar";
import PoemsTable from "./PoemsTable";
import WelcomeScene from "./welcome";
import Unsplash from "./unsplash";

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

        // Update Zen Count
        let updatedPoemCount = Number(localStorage.zenCount) - 0.02;
        updatedPoemCount = updatedPoemCount.toFixed(2);
        localStorage.setItem("zenCount", updatedPoemCount);

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

        // Update Zen Count
        let updatedPoemCount = Number(localStorage.zenCount) + 0.01;
        updatedPoemCount = updatedPoemCount.toFixed(2);
        localStorage.setItem("zenCount", updatedPoemCount);

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
        let zenCount = localStorage.zenCount;

        return (
            <div>
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
                <Unsplash />
                <PoemsTable
                    poems={this.props.poems}
                    filterText={this.state.filterText}
                    visiblePoem={this.state.visiblePoem}
                />
                <footer className={this.state.logoSpinClass}>
                    <Logo />
                    <Hello />
                    <WelcomeScene />
                    <div className="zenzen-count"> {zenCount}</div>
                </footer>
            </div>
        );
    }
}

export default FileteredPoemsTable;
