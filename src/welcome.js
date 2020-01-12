import React from 'react';
import IconInfo from './images/icon-info.js'
import IconBuddah from './images/icon-buddah.js'

class WelcomeScene extends React.Component {
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
      <div className={this.state.infoClass}>
        <div className="info" onClick={this.handleinfoChange}><IconInfo /></div>
        <div className={this.state.overlayClass}>
        <div onClick={this.handleinfoChange} className="buddah"><IconBuddah  /></div>
        <span>道德经</span>
        <span>Tao Te Ching</span>
        <p>The Tao Te Ching it is the fundamental text for philosophical Taoism, it is traditionally credited to the 6th-century BC sage Laozi.
        <br />
        <br />
        Explore the teaching of the Tao with this app, you can read all verses, view one at at time or get a random verse.
        <br />
        <br />
        Ready to for enlightenment?<br /> Click on the Buddah...</p>
        </div>
      </div>
    )
  }
}

export default WelcomeScene;