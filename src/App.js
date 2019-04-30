import React, { Component } from 'react'
import './App.css'
import Solution from './Components/Solution'
import Score from './Components/Score'
import Letters from './Components/Letters'

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: {},
      solution: {
        word: "CALM",
        hint: "Your ideal mood when coding."
      },
      score: 100
    }
    this.generateLetterStatuses()
  }

  generateLetterStatuses() {
    let letters = {}
    for (let i = 65; i < 91; i ++) {
      letters[String.fromCharCode(i)] = false
    }
    // this.setState({
    //   letterStatus: letters
    // })
    this.state.letterStatus = {...letters}
  }

  updateScore = increase => {
    let newScore = this.state.score
    increase ? newScore += 5 : newScore -= 20
    this.setState({
      score: newScore
    })
  }

  letterInSolution = letter => {
    return this.state.solution.word.split("").some(l => l === letter)
  }

  selectLetter = letter => {
    let letters = {...this.state.letterStatus}
    letters[letter] = true
    this.setState({
      letterStatus: letters
    })
    this.updateScore(this.letterInSolution(letter))
  }

  render() {

  return (
      <div>
        <Score score={this.state.score} key="Score"/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} key="Solution"/>
        <hr/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} key="Letters"/>
      </div>
    )
  }
}

export default App
