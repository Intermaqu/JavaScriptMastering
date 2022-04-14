import React from "react"
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Interests from "./components/Interests.js"
import Social from "./components/Social.js"

const App = () => {
    return(
        <div>
            <Social />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App