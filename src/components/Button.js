import React from "react";
import { useState } from "react";
import "./Button.css"

const Button = ({btnName}) =>{
    // const [showBtnValue, setShowBtnValue] = useState("")
    function clickHandler(e){
        setShowBtnValue(e.target.innerText);
    }
    return (
        <button onClick={clickHandler} className="calculatorKey">{btnName}</button>
    )
}

export default Button;