import React from 'react';
import data from './poems.json';


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
      // console.log(visiblePoem)
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
  }

  handleRandomPoemChange() {
    this.props.onRandomButtonGenerate();
  }

  handleShowAllPoemChange() {
    this.props.onShowAllButtonClick();
  }

  handleNextPoemChange() {
    console.log(this.props.visiblePoem)
    this.props.onNextPoemButtonClick();
  }

  handleSearchFilterTextChange(e) {
    this.props.onSearchFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search Tao..."
          value={this.props.filterText}
          onChange={this.handleSearchFilterTextChange}
        />

         <div 
          onClick={this.handleShowAllPoemChange}
          className='button'
        >All</div>

  {/*       <div 
          onClick={this.handleNextPoemChange}
          className='button'
        >Next</div>
*/}
        <div 
          onClick={this.handleRandomPoemChange}
          className='button'
        >Rand</div>

      </form>
      )
  }
}

class FileteredPoemsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      visiblePoem: null,
    };
    this.handleSearchFilterTextChange = this.handleSearchFilterTextChange.bind(this);
    this.handleRandomPoemChange = this.handleRandomPoemChange.bind(this);
    this.handleShowAllPoemChange = this.handleShowAllPoemChange.bind(this);
    this.handleNextPoemChange = this.handleNextPoemChange.bind(this);
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
    console.log(visiblePoem)
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
