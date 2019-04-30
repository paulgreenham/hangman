import React, { Component } from 'react'
import Letter from './Letter'

class Solution extends Component {

    displayLetters = letters => {
        const output = []
        for (let i in letters) {
            let l = letters[i]
            output.push(
                this.props.letterStatus[l] ?
                <Letter value={l} key={l + i}/> : 
                <span key={l + i}>_ </span>
            )
        }
        return output
    }

    render() { 
        
        return (<div>
            {this.displayLetters(this.props.solution.word.split(""))}
            <div><em>{this.props.solution.hint}</em></div>
        </div>)
    }
}

export default Solution