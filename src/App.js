import React from "react";
import {useState} from "react";
import "./App.css";
import "./components/Button.css"
// import Button from "./components/Button"

const App = () => {
    const [showBtnValue, setShowBtnValue] = useState("");
    const [showResult, setShowResult] = useState("");

    function clearBtn(){
        setShowBtnValue("");
        setShowResult("");
    }

    function sum(firstValue, secondValue){
        setShowResult(Number(firstValue)  + Number(secondValue))
    }
    function multiply(firstValue, secondValue){
        setShowResult(Number(firstValue)*Number(secondValue))
    }
    function divide(firstValue, secondValue){
        setShowResult(Number(firstValue)/Number(secondValue))
    }
    function subtract(firstValue, secondValue){
        setShowResult(Number(firstValue)-Number(secondValue))
    }

    function operatorBtn(){  
    }
    

    function clickHandler(e) {
        var finalInput = showBtnValue + (e.target.innerText);
        setShowBtnValue(finalInput);
        // below code can be function
        if (finalInput.includes("+")) {
          sum(finalInput.split("+")[0], finalInput.split("+")[1]);
        } else if (finalInput.includes("-")) {
          subtract(finalInput.split("-")[0], finalInput.split("-")[1]);
        } else if (finalInput.includes("x")) {
          multiply(finalInput.split("x")[0], finalInput.split("x")[1]);
        } else if (finalInput.includes("/")) {
          divide(finalInput.split("/")[0], finalInput.split("/")[1]);
        } else {
          //
        }
        

    }




    return (
      <div className="container">
        <div className="outputScreen">{showBtnValue}</div>
        <div className="resultScreen">{showResult}</div>
        <div className="keysGrid">
          <button onClick="" className="calculatorKey">
            AC
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            (
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            )
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            x
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            9
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            8
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            7
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            /
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            6
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            5
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            4
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            +
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            3
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            2
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            1
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            -
          </button>
          <button onClick={clearBtn} className="calculatorKey">
            C
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            0
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            .
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            =
          </button>
        </div>
      </div>
    );
}

export default App;