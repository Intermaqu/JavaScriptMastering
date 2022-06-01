import React from "react"

const QuizQuestion = (props) => {

    let won = {background: "green"}
    let lose = {background: "red"}
    let pending = {background: "lightgrey"}

    return (
        <div className = "question">
            <h1>{props.question}</h1>
            {props.allAnswers.map(ans => (
                <button
                    onClick = {!props.finished ? () => props.onClickHandler(props.id, ans) : null}
                    style={
                        ans === props.chosenAnswer && props.finished  && ans === props.correctAnswer?
                        won : 
                        ans === props.chosenAnswer && props.finished  && ans !== props.correctAnswer?
                        lose :
                        ans === props.chosenAnswer && !props.finished ?
                        pending :
                        null
                    }
                >
                    {ans}
                </button>
            ))}
        </div>
    )
} 

export default QuizQuestion