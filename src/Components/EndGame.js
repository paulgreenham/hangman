import React, { Component } from 'react'

class EndGame extends Component {
    reset = () => {
        this.props.reset()
    }

    render(){
        return (<div>
            {this.props.status === "won" ? "Congratulations!" : `Sorry you have lost the game.\nThe word is: ${this.props.word}`}
            <button onClick={this.reset}>Restart</button>
        </div>)
    }
}

export default EndGame