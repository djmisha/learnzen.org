import React, {Component} from 'react';

class NavIcon extends Component {
    state = {flipped: false}
    
    onFlip = () => {
        this.setState({ flipped: !this.state.flipped})
    }

    render() {
        return(
            <div onClick={this.onFlip} className={`panel ${this.state.flipped ? 'flip' : ''}`}>
                Icon Name
            </div>
        )
    }
}

export default NavIcon;