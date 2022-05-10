import React from "react"
import "../styles/film.css"
import Stars from "./Stars"

const Film = (props) => {

    const [rating, setRating] = React.useState(props.rating)

    console.log(props.title, props.rating)
    const handleRating = (rate) =>{
        return(
            setRating(rate)
        )
    } 

    return(
        <div className="film">
            <img src={`/images/${props.image}`} alt = "Something went wrong"/>
            <span>
                <h1>{props.id} {props.title}</h1>
                <Stars onClick={handleRating} ratingValue={rating}/> 
            </span>
        </div>
    )
}

export default Film