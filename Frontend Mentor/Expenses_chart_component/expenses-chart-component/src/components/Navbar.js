import React from "react"
import "../style/navbar.css"

const Navbar = (props) => {
    return <div className="navbar">
        <span className="navbar--span">
            <p>My balance</p>
            <h1>{`$${props.balance}`}</h1>
        </span>
        <img src={props.imageSource}/>
    </div>
}

export default Navbar