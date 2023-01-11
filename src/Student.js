import React, { Component } from 'react'
import Score from './Score'
export default class Student extends Component{
    render(){
    const scores = this.props.student.scores.map((score,idx)=>{
        return(
        <Score 
        score ={score}
        key = {`score-${idx}student${score.score}`}
        />
        )
    })
        return(
            <div>
                <p>{this.props.student.name}</p>
                <p>{this.props.student.bio}</p>
                {scores}
            </div>

    )
        }
}