import React, { useState } from "react"
import "../styles/product.css"
import ProductInspectPhotos from "./ProductInspectPhotos"

const Product = (props) => {

    // const [choosenImageURL, setChoosenImageURL] = useState(props.images[0])
    const [quantity, setQuantity] = useState(0); 
    const [isGaleryShown, setIsGaleryShown] = useState(false);

    const handleGalery = () => {
        setIsGaleryShown(prev => !prev)
    }

    const increment = () => {
        setQuantity(prev => prev+1)
    }

    const decrement = () => {
        quantity > 0 && setQuantity(prev => prev-1)
    }

    return (
        <div className="product">
            <div className="product--galery">
                <img src="images/image-product-1.jpg" className="product--galery--main-photo border-radius" onClick={handleGalery}/>
                <img src="images/image-product-1.jpg" className="galery--small-image border-radius" id="photo1"/>
                <img src="images/image-product-2.jpg" className="galery--small-image border-radius" id="photo2"/>
                <img src="images/image-product-3.jpg" className="galery--small-image border-radius" id="photo3"/>
                <img src="images/image-product-4.jpg" className="galery--small-image border-radius" id="photo4"/>
            </div>
            <div className="product--informations">
                <p className="product--informations--brand">sneaker company</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className="product--informations--description">
                    These low-profile sneakers are your perfect casual wear companion. 
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <span className="product--informations--price">
                    <h2 className="product--informations--price--current">$125.00</h2>
                    <p className="product--informations--price--discount">50%</p>
                </span>
                <h5 className="product--informations--old-price">$250.00</h5>
                <div className="product--informations--buttons">
                    <div className="product--informations--buttons--quantity border-radius">
                        <img src="images/icon-minus.svg" onClick={decrement}/>
                        <p>{quantity}</p>
                        <img src="images/icon-plus.svg" onClick={increment}/>
                    </div>
                    <button className="product--informations--buttons--submit orange-button">
                        <img src="images/icon-cart-submit.svg" width="15px" height="15px"/>
                        Add to cart
                    </button>
                </div>
            </div>
            {isGaleryShown && <ProductInspectPhotos closeGalery={handleGalery}/>}
        </div>
        
    )
}

export default Product