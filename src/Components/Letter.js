import React, { Component } from 'react'

class Letter extends Component {
    render(){
        return (
            <span className={this.props.crossedOut ? "crossed-out" : "normal"}>{this.props.value}</span>
        )
    }
}

export default Letter