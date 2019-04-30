import React, { Component } from 'react'
import Letter from './Letter'

class Letters extends Component {
    render(){
        return (<div>
            <div>Available Letters</div>
            {Object.keys(this.props.letterStatus).map(l => 
            <Letter value={l} key={l} crossedOut={this.props.letterStatus[l]} selectLetter={this.props.selectLetter}/>
            )}
        </div>)
    }
}

export default Letters