import React, {Component} from 'react';

class Bounce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            increment: true,
        }
    }

    //make number check separate from true and false
    //have a callback function in this.setState

    componentDidMount() {
        let {counter, increment} = this.state;
        let numberCheck = () => {
            if (counter >= 10) {
                console.log("larger")
                this.setState({increment: false})
            } else if (counter <= 0) {
                this.setState({increment: true})
            }
        }
        let bounceCount = () => {
            if (increment === true) {
                this.setState({counter: counter ++})
                numberCheck();
            } else if (increment === false) {
                this.setState({counter: counter --})
                numberCheck();
            }
        }
        setInterval(bounceCount, 1000);
    }

    render() {
        return (
            <div>Bounce: {this.state.counter}</div>
        )
    }
}

export default Bounce;