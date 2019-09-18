// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            timesClicked: 0
         }
    }


    clickHandler = () => {
        this.setState(previous => ({
            timesClicked: previous.timesClicked + 1
        }))
    }


    render() { 
        return ( 
            <div>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>

            </div>
         );
    }
}
 
export default DigitalClicker;