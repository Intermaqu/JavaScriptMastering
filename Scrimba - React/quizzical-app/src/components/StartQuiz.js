import React from "react"
import "../style.css"

const StartQuiz = (props) => {
    return (
        <div className = "StartQuiz">
            <h1>Quizzical</h1>
            <h3>Some description if needed</h3>
            <button onClick={props.startQuiz} className="dark_button">Start quiz</button>
        </div>
    )
}

export default StartQuiz