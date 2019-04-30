import React, { Component } from 'react'
import './App.css'
import Solution from './Components/Solution'
import Score from './Components/Score'
import Letters from './Components/Letters'
import EndGame from './Components/EndGame'

class App extends Component {
  constructor() {
    super()
    this.solutions = [
      {
        word: "CALM",
        hint: "Your ideal mood when coding."
      },
      {
        word: "SOFIA",
        hint: "Lady Wisdom."
      },
      {
        word: "ALGEBRA",
        hint: "Analysis, not synthesis"
      },
      {
        word: "DEVELOPER",
        hint: "Creates things that have no physical reality."
      },
      {
        word: "LOGIC",
        hint: "The only way a computer thinks."
      },
      {
        word: "TRIP",
        hint: "Comes before a fall."
      }
    ]
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "CALM",
        hint: "Your ideal mood when coding."
      },
      score: 100,
      gameStatus: "ongoing",
      currentSolution: 0
    }
  }

  generateLetterStatuses() {
    let letters = {}
    for (let i = 65; i < 91; i ++) {
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }

  updateScore = increase => {
    let newScore = this.state.score
    increase ? newScore += 5 : newScore -= 20
    this.setState({
      score: newScore
    }, function () {
      if (this.state.score <= 0) {
        this.setState({
          gameStatus: "lost"
        })
      }
    })
  }

  getSolutionLetters = () => this.state.solution.word.split("")

  letterInSolution = letter => this.getSolutionLetters().some(l => l === letter)

  hasWordBeenGuessed = () => this.getSolutionLetters().some(l => !this.state.letterStatus[l]) ? false : true

  selectLetter = letter => {
    let letters = {...this.state.letterStatus}
    letters[letter] = true
    this.setState({
      letterStatus: letters
    }, function () {
      if (this.hasWordBeenGuessed()) {
        this.setState({
          gameStatus: "won"
        })
      }
    })
    this.updateScore(this.letterInSolution(letter))
  }

  reset = () => {
    let solutionNum = this.state.currentSolution === this.solutions.length - 1 ? 0 : this.state.currentSolution + 1
    this.setState({
      letterStatus: this.generateLetterStatuses(),
      solution: this.solutions[solutionNum],
      score: 100,
      gameStatus: "ongoing",
      currentSolution: solutionNum
    })
  }

  render() {

  return (
      <div>
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <hr/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        <br/>
        {this.state.gameStatus === "ongoing" ? null : <EndGame status={this.state.gameStatus} word={this.state.solution.word} reset={this.reset}/>}
      </div>
    )
  }
}

export default App
