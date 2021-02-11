import React from "react";

// import NavIconSeach from "./images/icon-search.js";
import NavIconNext from "./images/icon-next.js";
import NavIconPrev from "./images/icon-prev.js";
// import NavIconAll from "./images/icon-all.js";
import NavIconRandom from "./images/icon-random.js";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchClass: "nav-search nav-hidden",
        };
        this.handleSearchFilterTextChange = this.handleSearchFilterTextChange.bind(
            this
        );
        this.handleRandomPoemChange = this.handleRandomPoemChange.bind(this);
        this.handleShowAllPoemChange = this.handleShowAllPoemChange.bind(this);
        this.handleNextPoemChange = this.handleNextPoemChange.bind(this);
        this.handlePrevPoemChange = this.handlePrevPoemChange.bind(this);
        this.handleSearchOpen = this.handleSearchOpen.bind(this);
    }

    handleRandomPoemChange() {
        this.props.onRandomButtonGenerate();
    }

    handleShowAllPoemChange() {
        this.props.onShowAllButtonClick();
    }

    handlePrevPoemChange() {
        this.props.onPrevPoemButtonClick(this.props.visiblePoem);
    }

    handleNextPoemChange() {
        this.props.onNextPoemButtonClick(this.props.visiblePoem);
    }

    handleSearchFilterTextChange(e) {
        this.props.onSearchFilterTextChange(e.target.value);
    }

    handleSearchOpen() {
        const change =
            this.state.searchClass === "nav-search nav-hidden"
                ? "nav-search nav-visible"
                : "nav-search nav-hidden";

        this.setState({
            searchClass: change,
        });
    }

    render() {
        // const PoemsForNavigation = []

        // dataArray.forEach((poem) => {
        //   PoemsForNavigation.push(
        //     <SinglePoemNavItem
        //       number={poem.number}
        //       key={poem.number}
        //       visiblePoem={this.state.visiblePoem}
        //      />
        //     );
        // });

        // console.log(PoemsForNavigation);

        return (
            <form>
                {/* <label>
                    <div className="nav-icon" onClick={this.handleSearchOpen}>
                        <NavIconSeach />
                        <span>Search</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.props.filterText}
                        onChange={this.handleSearchFilterTextChange}
                        className={this.state.searchClass}
                    />
                </label> */}

                {/* <div
                    onClick={this.handleShowAllPoemChange}
                    className="nav-all nav-icon"
                >
                    <NavIconAll />
                    <span>Scroll All</span>
                </div> */}

                <div
                    onClick={this.handleRandomPoemChange}
                    className="nav-random nav-icon"
                >
                    <NavIconRandom />
                    <span>Random</span>
                </div>

                <div className="nav-movearound">
                    <div className="current-verse">
                        Verse
                        <div className="nav-count">
                            {this.props.visiblePoem}
                        </div>
                    </div>

                    <div
                        onClick={this.handlePrevPoemChange}
                        className="nav-prev nav-icon"
                    >
                        <NavIconPrev />
                        <span>Prev</span>
                    </div>

                    <div
                        onClick={this.handleNextPoemChange}
                        className="nav-next nav-icon"
                    >
                        <NavIconNext />
                        <span>Next</span>
                    </div>
                </div>

                {/* <div className="all-navigation-row" 
      visiblepoem={this.state.visiblePoem}
     
      >
        {PoemsForNavigation}
      </div> */}
            </form>
        );
    }
}

export default NavigationBar;
