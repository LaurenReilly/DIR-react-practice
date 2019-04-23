import React, {Component} from 'react';

class CountBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            increment: true,
            by: props.by
        }
    }

    //make number check separate from true and false
    //have a callback function in this.setState

    componentDidMount() {
    
        let {counter, by} = this.state;

        let bounceCount = () => {
            if (this.state.increment === true) {
                this.setState({counter: counter += by});
                numberCheck();
            } else if (this.state.increment === false) {
                this.setState({counter: counter -= by})
                numberCheck();
            }
        }

        let numberCheck = () => {
            if (this.state.counter >= 9) {
                this.setState({increment: false})
            } else if (this.state.counter <= 1) {
                this.setState({increment: true})
            }
        }

        setInterval(bounceCount, 1000); 
    }

    render() {
        return (
            <div>We are counting by {this.state.by}: {this.state.counter}</div>
        )
    }
}

export default CountBy;