import React, { useState } from "react";
import "../style/calculator.css";

const Calc = () => {
  const [current, setCurrent] = React.useState("");
  const [memory, setMemory] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [update, setUpdate] = React.useState(1);

  const clearCurrent = () => {
    setCurrent("")
  }
  const clearMemory = () => {
    setMemory("")
  }
  const clearOperator = () => {
    setOperator("")
  }
  const changeSign = () => {
    setCurrent( prev => {
        return (parseFloat(prev) * -1).toString()
    })
  }
  const percentage = () => {
    setCurrent(prev => parseFloat(prev * 0.01).toString())
  }

  const moveValueToMemory = () => {
      setMemory(current)
      clearCurrent()
  }

  const addOperator = (e) => {
    switch(e.target.innerHTML){
        case "÷":
            setOperator("/")
            break
        case "×":
            setOperator("*")
            break
        default:
            setOperator(e.target.innerHTML)
    }
    if(current !== "")
      if(memory === ""){
        moveValueToMemory()
      } else {
        solveWithoutClearingOperator()
        setUpdate(prev => prev + 1)
      }
  }

  const pushNumber = (e) => {
    setCurrent(prev => prev + e.target.innerHTML)
  }

  const addDot = () => {
    if(current.indexOf(".") === -1)
        setCurrent(prev => prev + ".")
  }

  const solve = () => {
    setCurrent(eval(memory+operator+current).toString().slice(0,8));
    clearMemory();
    clearOperator();
  }

  const solveWithoutClearingOperator = () => {
    setCurrent(eval(memory+operator+current).toString().slice(0,8));
    clearMemory();
  }

  React.useEffect(() => {
    moveValueToMemory();
  }, [update])

  return (
    <div className="calculator">
      <div className="result four-columns">
        <h3 className="result--prev-calc">{operator} {memory}</h3>
        <h1 className="result--current-calc">{current}</h1>
      </div>
      <button className="calc-button" onClick={clearCurrent}>C</button>
      <button className="calc-button" onClick={changeSign}>±</button>
      <button className="calc-button" onClick={percentage}>%</button>
      <button className="calc-button calc-button-orange" onClick={(e) => {addOperator(e)}}>÷</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>7</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>8</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>9</button>
      <button className="calc-button calc-button-orange" onClick={(e) => {addOperator(e)}}>×</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>4</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>5</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>6</button>
      <button className="calc-button calc-button-orange" onClick={(e) => {addOperator(e)}}>-</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>1</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>2</button>
      <button className="calc-button" onClick = {(e) => pushNumber(e)}>3</button>
      <button className="calc-button calc-button-orange" onClick={(e) => {addOperator(e)}}>+</button>
      <button className="two-columns calc-button" onClick = {(e) => pushNumber(e)}>0</button>
      <button className="calc-button" onClick={addDot}>.</button>
      <button className="calc-button calc-button-orange" onClick={solve}>=</button>
    </div>
  );
};

export default Calc;
