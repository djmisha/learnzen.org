import React from 'react';
import data from './poems.json';
import iconrandom from './images/icon-random.svg';
import iconall from './images/icon-all.svg';
import iconnext from './images/icon-next.svg';
import iconprev from './images/icon-prev.svg';
import iconsearch from './images/icon-search.svg';


/* Get Our Data into an Array from JSON FORMAT*/
let parsedData = data.poems;
const dataArray = [];

for (let i = 0; i < parsedData.length; i++) {
  dataArray.push(parsedData[i]);
}

class SinglePoemRow extends React.Component {
  render() {
    const number = this.props.number;
    const content = this.props.content;
    const className = this.props.className;
    return (
      <li id={number} className={className}>
      <span>{number}</span>
      {content}
      </li>
      );
  }
}

class PoemsTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const visiblePoem = this.props.visiblePoem;
    const poemRows = [];

    dataArray.forEach((poem) => {

      /*Looks for matching Text*/

      if (poem.content.indexOf(filterText) === -1) {
        return;
      }

      /*Looks for visible Poem*/

      if (visiblePoem === poem.number ) {
         poemRows.push(
          <SinglePoemRow number={poem.number} content={poem.content}
          key={poem.number} className='visiblePoem'
          />
        );
      }
      if (visiblePoem === null ) {
         poemRows.push(
          <SinglePoemRow number={poem.number} content={poem.content}
          key={poem.number} className='visiblePoem'
          />
        );
      }
      // poemRows.push(
      //   <SinglePoemRow number={poem.number} content={poem.content}
      //   key={poem.number} className='visiblePoem'
      //   />
      //   );
    });

    return (
      <ul className='all-poems'>
        {poemRows}
      </ul>
      );
  }
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchFilterTextChange = this.handleSearchFilterTextChange.bind(this);
    this.handleRandomPoemChange = this.handleRandomPoemChange.bind(this);
    this.handleShowAllPoemChange = this.handleShowAllPoemChange.bind(this);
    this.handleNextPoemChange = this.handleNextPoemChange.bind(this);
    this.handlePrevPoemChange = this.handlePrevPoemChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch() {
    console.log('handle search');
  }

  render() {
    return (
      <form>
        <label>
          <span>Search</span>
          <img src={iconsearch} className="nav-icon" alt="Search"
          onClick={this.handleSearch}
           />
          <input
            type="text"
            placeholder="Search Tao..."
            value={this.props.filterText}
            onChange={this.handleSearchFilterTextChange}
            className='nav-search'
          />
        </label>

        <div 
          onClick={this.handlePrevPoemChange}
          className='nav-prev'
          >
          <img src={iconprev} className="nav-icon" alt="Prev" />
        </div>

          <div 
          className='nav-count'
        >{this.props.visiblePoem}
        </div>
        
         <div 
          onClick={this.handleNextPoemChange}
          className='nav-next'
        ><img src={iconnext} className="nav-icon" alt="Next" /></div>

         <div 
          onClick={this.handleShowAllPoemChange}
          className='nav-all'
        ><img src={iconall} className="nav-icon" alt="All" />
         <span>See All</span>
         </div>

        <div 
          onClick={this.handleRandomPoemChange}
          className='nav-random'
        >
          <img src={iconrandom} className="nav-icon" alt="Random" />
          <span>Random</span>
        </div>

      </form>
      )
  }
}

class FileteredPoemsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      visiblePoem: 1,
    };
    this.handleSearchFilterTextChange = this.handleSearchFilterTextChange.bind(this);
    this.handleRandomPoemChange = this.handleRandomPoemChange.bind(this);
    this.handleShowAllPoemChange = this.handleShowAllPoemChange.bind(this);
    this.handleNextPoemChange = this.handleNextPoemChange.bind(this);
    this.handlePrevPoemChange = this.handlePrevPoemChange.bind(this);
  }

  handleSearchFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleRandomPoemChange(visiblePoem) {
    const randNumber = Math.floor(Math.random() * dataArray.length) + 1;
    this.setState({
      visiblePoem: randNumber
    });
  }

  handleShowAllPoemChange() {
    this.setState({
      visiblePoem: null
    })
  }


  handleNextPoemChange(visiblePoem) {
    if (visiblePoem === dataArray.length) {
      visiblePoem = 1;
    }    
    else {
      visiblePoem = visiblePoem + 1;
    }
    this.setState({
      visiblePoem: visiblePoem
    })
  }


  handlePrevPoemChange(visiblePoem) {
    if (visiblePoem === 1 || visiblePoem === null) {
      visiblePoem = dataArray.length;
    }
    else {
      visiblePoem = visiblePoem - 1;
    }
    this.setState({
      visiblePoem: visiblePoem
    })
  }

  render() {
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
      />
      <PoemsTable 
        poems={this.props.poems}
        filterText={this.state.filterText}
        visiblePoem={this.state.visiblePoem}
      />
      </div>
      )
  }
}

/* Final Render where we pass in our data as props of FilteredPoemsTable*/

class FinalRender extends React.Component {
  render() {
    return (
      <div>
        <FileteredPoemsTable poems={dataArray} />
      </div>
    )
  }
}


export default FinalRender;
