import React, { Component } from 'react'
import Letter from './Letter'

class Letters extends Component {
    render(){
        let availLetters = [<Letter />]
        return (<div>
            <div>Available Letters</div>
            {availLetters}
        </div>)
    }
}

export default Letters

//            {availLetters.map(l => {return (<span>l</span>)})}
