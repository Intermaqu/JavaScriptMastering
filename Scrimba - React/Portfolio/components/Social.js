import React from "react"

const Social = () => {
    return(
        <div className="social">
            <img src="../images/portrait.jpg" className="social--portrait"/>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <p>laurasmith.website</p>
            <div className="social--button">
                <img src="../images/email.png" className="social--icon"/>
                <p>Email</p>
            </div>
        </div>
    )
}

export default Social