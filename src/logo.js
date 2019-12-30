import React from 'react';
import IconLogo from './images/icon-logo.js'


class Logo extends React.Component {
  // let spinTheLogo = this.props.logoSpinClass;
  constructor(props) {
    super(props);
    this.state = {
      logoClass: 'the-logo logo-normal',
      logoTitle: 'Tao Te Ching',
      logoAuthor: 'Laozi'
    };
    this.handleLogoChange = this.handleLogoChange.bind(this);
  }
  handleLogoChange() {
    const changelogo = this.state.logoClass === 'the-logo logo-normal' ? 'the-logo logo-change' : 'the-logo logo-normal';
    const changeTitle = this.state.logoTitle === 'Tao Te Ching' ? 'The Book of the Way' : 'Tao Te Ching';
    const changeAuthor = this.state.logoAuthor === 'Laozi' ? 'Old Master' : 'Laozi';
    this.setState({
      logoClass: changelogo,
      logoTitle: changeTitle,
      logoAuthor: changeAuthor,
    })
  }
  render() {
    return (
      <div className={this.state.logoClass} logospin={this.props.logoSpinClass} onClick={this.handleLogoChange}>
        <div className="logo"><IconLogo /></div>
        <div className="logo-tag">
          <div>{this.state.logoTitle}</div>
          <div>by {this.state.logoAuthor}</div>
          </div>
      </div>
    )
  }
}

export default Logo;
