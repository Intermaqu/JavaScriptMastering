import React from "react"
import "../styles/product.css"

const ProductInspectPhotos = (props) => {
    return(
        <div className="product-inspect-photos">
            <button onClick = {props.closeGalery} className="product-inspect-photos--close"></button>
            <div className="product-inspect-photos--main">
                <button className="navigate-button navigate-previous"> </button>
                <img src={`/images/image-product-1.jpg`} className="product-inspect-photos--main-photo border-radius"/>
                <button className="navigate-button navigate-next"> </button>
            </div>
            <div className="product-inspect-photos--galery">
                <img src={`/images/image-product-1-thumbnail.jpg`} className="inspect-galery--small-image border-radius"/>
                <img src={`/images/image-product-2-thumbnail.jpg`} className="inspect-galery--small-image border-radius"/>
                <img src={`/images/image-product-3-thumbnail.jpg`} className="inspect-galery--small-image border-radius"/>
                <img src={`/images/image-product-4-thumbnail.jpg`} className="inspect-galery--small-image border-radius"/>
            </div>
            <div className="shadow"></div>
        </div>
    )
}

export default ProductInspectPhotos