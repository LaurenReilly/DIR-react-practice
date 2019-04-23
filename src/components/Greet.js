import React from 'react';

function Greet(props) {
    let {whom} = props;
    return (
        <div>
            <h1>Hello, {whom ? whom : "Friend"}</h1>
            <h1>They're Taking the Hobbits to Isengard!</h1>
        </div>
    )
}

export default Greet;