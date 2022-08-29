import React from "react"
import Pick from "./Pick"

import "../styles/skirmish.css"

const Skirmish = props => {

    return(
        <div className="skirmish">
            <Pick pick={props.pick} size="big-pick"/>
            {props.generated !== undefined && <Pick pick={props.generated} size="big-pick"/>}
        </div>
    )
}

export default Skirmish