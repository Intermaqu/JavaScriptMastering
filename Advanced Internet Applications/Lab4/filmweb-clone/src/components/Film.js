import React, { useEffect } from "react"
import "../styles/film.css"
import StarsRating from "./StarsRating"

const Film = (props) => {

    const [rating, setRating] = React.useState(props.rating)

    function changeRating(rate){
        setRating(rate)
        props.updateRating(rate)
    }
    

    console.log(props.title, props.rating)

    return(
        <div className="film">
            <img src={`/images/${props.image}`} alt = "Something went wrong"/>
            <span>
                <h1>{props.id} {props.title}</h1>
                <StarsRating ratingValue={rating} changeRating={(rate) => changeRating(rate)}/> 
            </span>
            <button onClick={()=>props.removeFilm(props.id)}>REMOVE</button>
        </div>
    )
}

export default Film