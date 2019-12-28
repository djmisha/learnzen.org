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
      {number} {content}
      </li>
      );
  }
}


class PoemsTable extends React.Component {
  render() {
    const visiblePoem = this.props.visiblePoem;
    const poemRows = [];

    dataArray.forEach((poem) => {
      poemRows.push(
        <SinglePoemRow number={poem.number} content={poem.content}
        key={poem.number} className='visiblePoem'
        />
        );
    });

    return (
      <ul className='all-poems'>
        {poemRows}
      </ul>
      );
  }
}


class GenerateRandomPoemButton extends React.Component {
  constructor(props) {
    super(props);
    this.handlePoemChange = this.handlePoemChange.bind(this);
  }

  handlePoemChange() {
    this.props.onFilterPoemChange();
  }

  render() {
    return (
      <div className='button' onClick={this.handlePoemChange}>
       Change {this.props.visiblePoem}
      </div>
      )
  }
}

class FileteredPoemsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePoem: 3,
    };
    this.handlePoemChange = this.handlePoemChange.bind(this);
  }
  handlePoemChange(visiblePoem) {
    this.setState({
      visiblePoem: visiblePoem
    });
  }
  render() {
    return (
      <div>
      <GenerateRandomPoemButton 
        visiblePoem= {this.state.visiblePoem}
        onFilterPoemChange={this.handlePoemChange} 
      />
      <PoemsTable 
        poems={this.props.poems}
        visiblePoem={this.state.visiblePoem}
      />
      </div>
      )
  }
}


export default FileteredPoemsTable;
