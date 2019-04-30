import React, { Component } from 'react'

class Letter extends Component {

    selectLetter = () => {
        this.props.selectLetter(this.props.value)
    }

    render(){
        return (
            <span onClick={this.selectLetter} className={this.props.crossedOut ? "crossed-out" : "normal"}>{this.props.value}</span>
        )
    }
}

export default Letter