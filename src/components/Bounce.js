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
    
        let {counter} = this.state;

        let bounceCount = () => {
            if (this.state.increment === true) {
                console.log("true");
                this.setState({counter: counter ++});
                numberCheck();
            } else if (this.state.increment === false) {
                this.setState({counter: counter --})
                numberCheck();
            }
        }

        let numberCheck = () => {
            if (this.state.counter >= 9) {
                console.log("larger")
                this.setState({increment: false})
            } else if (this.state.counter <= 1) {
                this.setState({increment: true})
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