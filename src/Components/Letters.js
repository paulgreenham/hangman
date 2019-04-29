import React, { Component } from 'react'
import Letter from './Letter'

class Letters extends Component {
    render(){
        return (<div>
            <div>Available Letters</div>
            {Object.keys(this.props.letterStatus).map(l => <Letter value={l} crossedOut={this.props.letterStatus[l]}/>)}
        </div>)
    }
}

export default Letters