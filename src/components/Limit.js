import React, {Component} from 'react';

class Limit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            increment: true,
            upperLimit: props.upperLimit,
            lowerLimit: props.lowerLimit
        }
    }

    //make number check separate from true and false
    //have a callback function in this.setState

    componentDidMount() {
    
        let {counter, upperLimit, lowerLimit} = this.state;

        let bounceCount = () => {
            if (this.state.increment === true) {
                this.setState({counter: counter ++});
                numberCheck();
            } else if (this.state.increment === false) {
                this.setState({counter: counter --})
                numberCheck();
            }
        }

        let numberCheck = () => {
            if (this.state.counter >= upperLimit -1) {
                this.setState({increment: false})
            } else if (this.state.counter <= lowerLimit + 1) {
                this.setState({increment: true})
            }
        }

        setInterval(bounceCount, 1000); 
    }

    render() {
        return (
            <div>Limit is between{this.state.lowerLimit} and {this.state.upperLimit}: {this.state.counter}</div>
        )
    }
}

export default Limit;