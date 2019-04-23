import React, {Component} from 'react';

class Counter extends Component { 
    //define how instance gets created including initial state
    constructor(props) {
        //super allows us to access the methods we inherit from Component
        super(props);
        //an object where the component stores key value pairs
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        //you can not mutate state directly!
        //use this.setState accepts object with updated key value pairs
        //only need to specify what has changed
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000);

    }

    render() {
        let {counter} = this.state
        return (
            <h1>{counter}</h1>
        )
    }
        
}

export default Counter;