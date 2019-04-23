import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleClick = (status) => {
        if(status === "increment") {
            this.setState({counter: this.state.counter + 1})
        } else if (status === "decrement") {
            this.setState({counter: this.state.counter - 1})
        } else {
            return;
        }
    }
    
    render() {
        let {counter} = this.state;
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={() => this.handleClick("increment")}>Increment</button>
                <button onClick={() => this.handleClick("decrement")}>Decrement</button>
            </div>
        )
    }
}

export default Clicker;