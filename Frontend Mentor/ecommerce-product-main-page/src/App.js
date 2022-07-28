import "./styles/general.css"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import { useState } from "react"

const App = () => {

  const [cart, setCart] = useState({})
  // TODO
  // const addToCart = (product) => {
  //   if(cart[product.name] === undefined){
  //     setCart({cart, [product.name]: {
  //       quantity: product.quantity,
  //       singlePrice: product.singlePrice
  //     }})
  //   } else {
  //     setCart(cart.map(prod => {
        
  //     }))
  //   }
  // }

  return (
    <div className="app">
      <Navbar/>
      <div className="main">
        <Product/>
      </div>
    </div>
  );
}

export default App;
