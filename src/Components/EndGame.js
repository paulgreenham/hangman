import React, { Component } from 'react'

class EndGame extends Component {
    render(){
        return (<div>
            {this.props.status === "won" ? "Congratulations!" : `Sorry you have lost the game.\nThe word is: ${this.props.word}`}
        </div>)
    }
}

export default EndGame