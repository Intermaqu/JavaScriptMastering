import React, { useEffect, useState } from "react"
import Bar from "./Bar"
import data from "../data/data.json"
import "../style/main.css"


const Main = (props) => {
    
    const [bars, setBars] = useState([])
    const [maxValue, setMaxValue] = useState("")

    useEffect(()=>{
        setBars(data)
        setMaxValue(Math.max(...data.map(o => o.amount)))
        console.log(data)
    },[])

    return <div className="main">
        <h1>Spending - Last 7 days</h1>
        <div className="main--bars">
            {bars.map(bar => {
                return <Bar
                    highest = {bar.amount == maxValue}
                    amount = {bar.amount}
                    day = {bar.day}
                    key = {bar.day}
                />
            })}
        </div>
        <div className="main--footer">
            <span className="main--footer--left">
                <p>Total this month</p>
                <h1>{`$${props.totalThisMonth}`}</h1>
            </span>
            <span className="main--footer--right">
                <h6>{`${props.fromLastMonth}%`}</h6>
                <p>from last month</p>
            </span>
        </div>
    </div>

}

export default Main

// {bars.reduce((prev,curr,) => {
//     return prev + curr.amount 
// }, 0)}