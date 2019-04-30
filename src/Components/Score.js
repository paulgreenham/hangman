import React, { Component } from 'react'

class Score extends Component {
    render(){
        let score = this.props.score
        return (<div className={
            score >= 80 ? "high-score" :
            score >= 50 ? "medium-score" :"low-score"}>
            {score}
        </div>)
    }
}

export default Score