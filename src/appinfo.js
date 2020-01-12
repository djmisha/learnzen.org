import React from 'react';
import IconInfo from './images/icon-info.js'

class Appinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoClass: 'the-info-icon info-change',
      overlayClass: 'info-overlay info-visible',
    };
    this.handleinfoChange = this.handleinfoChange.bind(this);
  }
  handleinfoChange() {
    const changeinfo = this.state.infoClass === 'the-info-icon info-change' ? 'the-info-icon info-normal' : 'the-info-icon info-change';
    const changeOverlay = this.state.overlayClass === 'info-overlay info-visible' ? 'info-overlay info-hidden' : 'info-overlay info-visible';
    this.setState({
      infoClass: changeinfo,
      overlayClass: changeOverlay,
    })
  }
  render() {
    return (
      <div className={this.state.infoClass} onClick={this.handleinfoChange}>
        <div className="info"><IconInfo /></div>
        <div className={this.state.overlayClass}>
        <span>Tao Te Ching</span>
        <span>道德经</span>
        <p>The Tao Te Ching is traditionally credited to the 6th-century BC sage Laozi. It is a fundamental text for both philosophical and religious Taoism. 
        <br />
        <br />
        Explore the teaching of the Tao verses by using the navigation below, uou can read all verses, view one at at time or read a random verse cliking the buttons.  Ready to learn?</p>
        <p>Click here to start...</p>
        </div>
      </div>
    )
  }
}

export default Appinformation;
