import React from "react"

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.item.imageUrl} className="card--image"/>
            <div className="card--content">
                <section className="card--country">
                    <img src="../images/pin.png" className="card--pin"/>
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="card--content--google">View on Google Maps</a>
                </section>
                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card