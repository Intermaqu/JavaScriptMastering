import React from "react"
import Star from "./Star"
import "../styles/star.css"

const StarRating = (props) => {
    const NumberOfStars = 5

    return(
        <div className="star-rating">
            {[...Array(NumberOfStars)].map((item, index) => {
                const ratingValue = index + 1
                return(
                    <label key={index}>
                        <input 
                            type="radio" 
                            name="rating" 
                            className="star-radio" 
                            value={ratingValue} 
                            onClick={() => props.changeRating(ratingValue)}/>
                        <Star 
                            filled={ratingValue <= props.ratingValue}
                            key = {index}
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating