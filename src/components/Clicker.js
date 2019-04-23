import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleClick = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        let {counter} = this.state;
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default Clicker;