import React, { Component } from 'react';
import '../App.css'
import qBank from './Questionbank';
 
class Score extends Component {
    const 
    render() {
        const { score} = this.props;
        return (
            <div style={{color:"whitesmoke",marginRight:"25%"}}>
                <h2 style={{color:"green"}}>Results</h2>
                <h4>Your score is :<span style={{color:"gold"}}>  {score}/{qBank.length}</span>
                </h4><br/>
                <h2 style={{color:"blue"}}>Answers</h2>
                <ul>
                    {qBank.map((question, index) => (
                        <li key={index} style={{ color: "skyblue",listStyle:"none" }}>
                        {index + 1}. &nbsp;{question.options[question.answer]}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
    
}


 
export default Score;
