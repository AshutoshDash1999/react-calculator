import React from "react";
import {useState} from "react";
import "./App.css";
import "./components/Button.css"
import Footer from "./components/footer/Footer"

const App = () => {
    const [showBtnValue, setShowBtnValue] = useState("");
    const [showResult, setShowResult] = useState("");

    function clearBtn(){
        setShowBtnValue("");
        setShowResult("");
    }

    function sum(array){
        var sum = 0;
        for (var index = 0; index<array.length; index++){
          sum += Number(array[index])
        }
        setShowResult(sum);
    }
    function multiply(array){
        var multiply = 1;
        for (var index = 0; index < array.length; index++) {
          multiply *= Number(array[index]);
        }
        setShowResult(multiply);
    }
    function divide(array){
        var divide = 1;
        for (var index = 0; index < array.length; index++) {
          divide /= Number(array[index]);
        }
        setShowResult(divide.toFixed(4));
    }
    function subtract(array){
        var subtractor = (previousValue, currentValue) =>
          Number(previousValue) - Number(currentValue);
        setShowResult(array.reduce(subtractor));
    }

    function clickHandler(e) {
        var finalInput = showBtnValue + (e.target.innerText);
        setShowBtnValue(finalInput);
        // below code can be function
        if (finalInput.includes("+")) {
          sum(finalInput.split("+"));
        } else if (finalInput.includes("-")) {
          subtract(finalInput.split("-"));
        } else if (finalInput.includes("x")) {
          multiply(finalInput.split("x"));
        } else if (finalInput.includes("/")) {
          divide(finalInput.split("/"));
        } else {
          //
        }
        

    }




    return (
      <div className="container">
        <div className="outputScreen">
          {showBtnValue}
          <div className="resultScreen">{showResult}</div>
        </div>
        <div className="keysGrid">
          <button onClick={clearBtn} className="calculatorKey">
            C
          </button>
          <button  className="calculatorKey">
            
          </button>
          <button  className="calculatorKey">
            
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
          <button className="calculatorKey"></button>
          <button onClick={clickHandler} className="calculatorKey">
            0
          </button>
          <button onClick={clickHandler} className="calculatorKey">
            .
          </button>
          <button className="calculatorKey"></button>
        </div>

        <Footer/>
      </div>
    );
}

export default App;