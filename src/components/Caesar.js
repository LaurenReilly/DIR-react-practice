import React from 'react';

function Caesar(props) {
    let caesarName = (name) => {
        let nameArray = name.split('');
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let alphabetArray = alphabet.split('');
        let finalName = nameArray.map(letter => {
            let index = alphabetArray.indexOf(letter);
            if (index < 25) {
                return alphabetArray[index + 1]
            } else if (index === 25) {
                return alphabetArray[0]
            }
        })

        return finalName.join('');
    }
    return (
        <div>{caesarName(props.name)}</div>
    )
}

export default Caesar;