// import React from 'react';

// class RandomButton extends React.Component {
//   genenerateRandomNumber() {
//     const newNumber = Math.floor(Math.random() * 81) + 1;
//     const changeNumber = this.state.randomNumber === newNumber;
//     this.setState({randomNumber: newNumber,});
//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       className: 'button',
//       buttonText: 'Random',
//       randomNumber: 1,
//     }
//     this.genenerateRandomNumber = this.genenerateRandomNumber.bind(this);
//   }
//   render() {
//     return (
//       <div className={this.state.className} onClick={this.genenerateRandomNumber}>
//       {this.state.buttonText} {this.state.randomNumber}
//       </div>
//       )
//     }
//   }

//   export default RandomButton;
