import React, { Component } from 'react'

class Solution extends Component {
    render(){
        let letters = ["_", "_", "_", "_"]
        let hint = "Your ideal mood when coding."
        return (<div>
            {letters.map(l => {return (<span>{l} </span>)})}
            <div><em>{hint}</em></div>
        </div>)
    }
}

export default Solution