import React, { Component } from 'react'
import Letter from './Letter'

class Solution extends Component {

    render(){
        
        return (<div>
            {this.props.solution.word.split("").map(l => this.props.letterStatus[l] ?
            <Letter value={l} key={l}/> : 
            <span key={l}>_ </span>)}
            <div><em>{this.props.solution.hint}</em></div>
        </div>)
    }
}

export default Solution