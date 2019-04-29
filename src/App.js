import React, { Component } from 'react'
import './App.css'
import Solution from './Components/Solution'
import Score from './Components/Score'
import Letters from './Components/Letters'

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: {}
    }
  }

  generateLetterStatuses() {
    for (let i = 65; i < 91; i ++) {
      this.state.letterStatus[String.fromCharCode(i)] = false
    }
  }

  render() {

  return (
      <div>
        <Score />
        <Solution />
        <hr/>
        <Letters />
        {this.generateLetterStatuses()}
        {Object.keys(this.state.letterStatus)}
      </div>
    )
  }
}

export default App
