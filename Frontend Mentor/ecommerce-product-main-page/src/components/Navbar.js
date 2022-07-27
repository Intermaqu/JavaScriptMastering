import "../styles/navbar.css"
import React, { useEffect, useState } from "react"
import Cart from "./Cart.js"

const Navbar = (props) => {
    const [cartShown, setCartShown] = useState(false)

    const showCart = () => {
        setCartShown(prevCartShown => !prevCartShown)
    }

    return (
        <nav className="navbar">
            <ul className="navbar--list">
                <li><h1>sneakers</h1></li>
                <li className="navbar--list--item">Collections</li>
                <li className="navbar--list--item">Men</li>
                <li className="navbar--list--item">Women</li>
                <li className="navbar--list--item">About</li>
                <li className="navbar--list--item">Contact</li>
            </ul> 
            <img src="images/icon-cart.svg" className="navbar--cart" onClick={showCart}/>
            <img src="images/image-avatar.png" className="navbar--avatar"/>
            {cartShown && <Cart/>} 
        </nav>
    )
} 

export default Navbar