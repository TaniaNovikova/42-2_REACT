import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function CounterExperiments() {
  console.log("Render");

    const [count, setCount] = useState(0);

  // const onPlusClick = () => {
  //   setCount((prevValue) => prevValue + 1);
  // };

  // function onPlusClick() {
  //   setCount(c + 1);
  //   setCount(c + 1);
  //   setCount(c + 1);
  // }

  function onPlusClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  
let vania=count;
console.log(`vania: ${vania}`);

  //  function onPlusClick() {
  //   setCount(vania=>(vania + 1));
  //   console.log(`vania+1: ${vania}`);
    
  //   setCount(count=>(count + 5));
  //   console.log(`count+5: ${count}`);

  //   setCount(vasya=>(vasya + 2));
  //   console.log(`vasya+2: ${count}`);
  // }

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-wrapper">
    <div className="counter-container">
      <div className="button-wrapper">
        <Button name="+" onClick={onPlusClick} />
      </div>
      <div className="counter-result">{count}</div>
    </div>
        <Button name="RESET" type="reset" onClick={reset} />
    </div>
  );
}

export default CounterExperiments;
