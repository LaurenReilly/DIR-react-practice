import React, {Component} from 'react';
import Counter from './Counter';

class AddCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    addCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }

    createCounters = () => {
        let counters = []
        for(let i = 0; i < this.state.counter; i++) {
            counters.push(<Counter key={i}/>);
        }
        return counters;
    }
    
    render() {

        return (
            <div>
                <button onClick={this.addCounter}>Add Counter</button>
               {this.createCounters()}
            </div>
        )
    }
}

export default AddCounter;