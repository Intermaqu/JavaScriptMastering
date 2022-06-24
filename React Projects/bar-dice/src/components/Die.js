import React from "react"
import "../style/Die.css"

const Die = (props) => {

    




    return <button
        onClick = {(id) => props.holdDie(props.id)}
        className = {props.isHeld ? "die-hold" : ""}
    >
        {props.value}
    </button>

}

export default Die