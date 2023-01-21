import React from 'react'
import "../styles/productDashboard.css"


const ProductDashboard = ({photo_1, name, description, price, status, handleDelete}) => {

  

  return (
    <div className="productDashboard">
        <img src={`./assets/productImages/${photo_1}`} className="productDashboard-image"/>
        <p className='productDashboard-name'>{name}</p>
        <p className='productDashboard-price'>${price}</p>
        <p className='productDashboard-descripition'>{description}</p>
        {status === "Posted" && <button className="productDashboard-removeProduct" onClick={handleDelete}>Delete Product</button>}
    </div>
  )
}

export default ProductDashboard