import React from "react";
import dataArray from "../../data";
import NavigationBar from "./navPoems";
import PoemsTable from "./PoemsTable";
import Unsplash from "./unsplash";

class Study extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            visiblePoem: parseInt(localStorage.currentPoem),
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

        // Update Zen Count
        let updatedPoemCount = Number(localStorage.zenCount) - 0.1;
        updatedPoemCount = updatedPoemCount.toFixed(2);
        localStorage.setItem("zenCount", updatedPoemCount);

        this.setState({
            visiblePoem: randNumber,
            filterText: "",
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

        // Update Zen Count in Local Stora ge
        let updatedPoemCount = Number(localStorage.zenCount) + 0.01;
        updatedPoemCount = updatedPoemCount.toFixed(2);
        localStorage.setItem("zenCount", updatedPoemCount);

        this.setState({
            visiblePoem: visiblePoem,
            filterText: "",
        });
    }

    handlePrevPoemChange(visiblePoem) {
        if (visiblePoem === 1 || visiblePoem === "all") {
            visiblePoem = dataArray.length;
        } else {
            visiblePoem = visiblePoem - 1;
        }

        this.setState({
            visiblePoem: visiblePoem,
            filterText: "",
        });
    }

    handleSpecifiedPoemChange(visiblePoem) {
        this.setState({
            visiblePoem: visiblePoem,
        });
    }

    render() {
        return (
            <div className="app-screen">
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
            </div>
        );
    }
}

export default Study;
