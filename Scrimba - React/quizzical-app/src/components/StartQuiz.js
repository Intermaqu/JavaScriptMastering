import React from "react"

const StartQuiz = (props) => {
    return (
        <div className = "StartQuiz">
            <h1>Quizzical</h1>
            <h3>Some description if needed</h3>
            <button onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}

export default StartQuiz