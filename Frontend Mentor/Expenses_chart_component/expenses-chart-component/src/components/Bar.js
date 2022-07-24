import React from "react"
import "../style/bar.css"
import COLORS from "../style/general.js" 

const Bar = (props) => {


    const styles = {
        background: props.highest ? COLORS.cyan : COLORS.softRed,
        height: `${2*props.amount}px`,
        marginTop: `${100-2*props.amount}px`,
    }

    return <div className="bar">
        <div className="bar--colored" style={styles}>
            <p className="bar--colored--hover">{`$${props.amount}`}</p>
        </div>
        <p className="bar--day">{props.day}</p>
    </div>
}

export default Bar