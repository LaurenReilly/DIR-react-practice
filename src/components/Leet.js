import React from 'react';

function Leet(props) {
    let leetSpeak = (name) => {
        let newName = []
        let nameArray = name.split('');
        let leetLetters = ['l','e','a','s','o']
        let leetNumbers = ['1','3','4','5','0']
        nameArray.map(letter => {
            if (leetLetters.includes(letter)) {
                newName.push(leetNumbers[leetLetters.indexOf(letter)])
            } else {
                newName.push(letter);
            }
        })
        return newName.join('');
    }
    return (
        <div>{leetSpeak(props.name)}</div>
    )
}

export default Leet;