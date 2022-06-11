import React from "react"
import "../style/champion.css"

const Champion = (props) => {
    return(
        <div className="champion">
            <img src={`${props.name}.png`}/>
            <h1>{props.name}</h1>
            <span>
                <h4>{props.role}</h4>
                <h4 className="champion--price">{props.price}</h4>
            </span>
            <button
                onClick = {() => props.addToCart(props.id)}
            >
                Add to cart
            </button>
        </div>
    )
}

export default Champion