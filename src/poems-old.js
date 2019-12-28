import React from 'react';
import data from './poems.json';


/* Get Our Data into an Array from JSON FORMAT*/
let parsedData = data.poems;
const dataArray = [];

for (let i = 0; i < parsedData.length; i++) {
  dataArray.push(parsedData[i]);
}

class CreatePoems extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      className: 'all-poems',
      visibleClass: 'visible-poem',
      manyPoems: dataArray,
    }
    // console.log(this.state.manyPoems);
  }
  render() {
      const thePoems = this.state.manyPoems.map((poem) => {
      return (
        <div  key={poem.number} 
              className={this.state.visibleClass} 
              id={'the-poem-' + poem.number} >
          {poem.number} 
          {poem.content}
        </div>
      )      
    })
    return (
      <div className={this.state.className}>
      {thePoems}
      </div>
      )
  }
}

export default CreatePoems;
