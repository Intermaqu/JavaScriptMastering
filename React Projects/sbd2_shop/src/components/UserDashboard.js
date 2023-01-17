import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { URL } from '../services/URL';
import AuthenticationService from '../services/AuthenticationService';
import ProductDashboard from './ProductDashboard';
import "../styles/userDashboard.css"

const UserDashboard = ({snackbar}) => {
    const [earned, setEarned] = useState(0)
    const [allProducts, setAllProducts] = useState([])

    const init = () => {
        axios({
            method: "POST",
            url: `${URL}/product/getAllProductsByIdSellerWithGalery`,
            data: {
                id: AuthenticationService.getUserData().ID_USER,
            },
            headers: {
            authorization: AuthenticationService.getToken(),
            },
        }).then((res)=>{
            // console.log(res.data[0].Status === "Posted")
            setAllProducts(res.data)
        })
    }

    useEffect(init, [])

    return (
        <div className="userDashboard">
            <div className="userDashboard-sold">
                <span>SOLD</span>
                {allProducts && allProducts.map(product => {
                    product.Status === "Posted" && <ProductDashboard
                        name={product.Name}
                        price={product.Price}
                        description={product.Description}
                        photo_1={product.photo_1}/>
                })
                }    
            </div>
        </div>
    )
}

export default UserDashboard