import React from 'react';
import IconInfo from './images/icon-info.js'


class Appinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoClass: 'the-info-icon info-normal',
      overlayClass: 'info-overlay info-hidden',
    };
    this.handleinfoChange = this.handleinfoChange.bind(this);
  }
  handleinfoChange() {
    const changeinfo = this.state.infoClass === 'the-info-icon info-normal' ? 'the-info-icon info-change' : 'the-info-icon info-normal';
    const changeOverlay = this.state.overlayClass === 'info-overlay info-hidden' ? 'info-overlay info-visible' : 'info-overlay info-hidden';
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
        <p>The Tao Te Ching is a fundamental text for both philosophical and religious Taoism and is traditionally credited to the 6th-century BC sage Laozi. It also strongly influenced other schools of Chinese philosophy and religion, including Legalism, Confucianism, and Buddhism, which was largely interpreted through the use of Taoist words and concepts when it was originally introduced to China.</p>
        </div>
      </div>
    )
  }
}

export default Appinformation;
