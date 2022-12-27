import React from 'react'
import "../styles/product-miniature.css"


const ProductMiniature = ({photo, name, price}) => {
  return (
    <div className='product-miniature'>
        <img className='product-miniature-image' src={photo}/>
        <p className='product-miniature-name'>{name}</p>
        <p className='product-miniature-price'>$ {price}</p>
    </div>
  )
}

export default ProductMiniature