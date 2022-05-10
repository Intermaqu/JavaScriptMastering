import React from "react"

const Star = (props) =>{

    const imageSource = props.filled ? "images/star-filled.png" : "images/star-empty.png"
    return(
        <img src={imageSource} className="star"/>
    )
}

export default Star