import React, { Component } from 'react'
import Letter from './Letter'

class Letters extends Component {
    displayLetters = lettersObject => {
        const letters = Object.keys(lettersObject)
        const output = []
        for (let i in letters) {
            let l = letters[i]
            output.push(
                <Letter value={l} key={l + i} crossedOut={lettersObject[l]} selectLetter={this.props.selectLetter}/>
            )
        }
        return output
    }

    render(){
        return (<div>
            <div>Available Letters</div>
            {this.displayLetters(this.props.letterStatus)}
        </div>)
    }
}

export default Letters