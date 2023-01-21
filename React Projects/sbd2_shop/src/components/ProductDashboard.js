import React from 'react'
import { Navigate } from 'react-router-dom'
import "../styles/productDashboard.css"
import { useNavigate } from 'react-router-dom';


const ProductDashboard = ({id, photo_1, name, description, price, status, handleDelete}) => {

  const navigate = useNavigate();

  return (
    <div className="productDashboard">
        <img src={`./assets/productImages/${photo_1}`} className="productDashboard-image"/>
        <p className='productDashboard-name'>{name}</p>
        <p className='productDashboard-price'>${price}</p>
        <p className='productDashboard-descripition'>{description}</p>
        {status === "Posted" && <button className="productDashboard-modifyProduct" onClick={()=>{navigate(`/modifyProduct?id=${id}`)}}>Modify Product</button>}
        {status === "Posted" && <button className="productDashboard-removeProduct" onClick={handleDelete}>Delete Product</button>}
    </div>
  )
}

export default ProductDashboard