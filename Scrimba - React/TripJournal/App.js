import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import JSONData from "./data.js"


const App = () => {
    const cards = JSONData.map(item => {
        return(
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <>
            <Navbar />
            <div className = "main">
                {cards}
            </div>
        </>  
    )
}

export default App