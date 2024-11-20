import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";
let a=7;
function CounterExperiments() {
  console.log("Render");

  const [count, setCount] = useState(10);
  console.log(`const [count, setCount] = useState(10); count=${count}`);

  // const onPlusClick = () => {
  //   setCount((prevValue) => prevValue + 1);
  // };

  //передаем в setCount выражение

  function onPlusClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount("vasya");
  }

  // function onPlusClick() {
  //   setCount("vasya");
  //   setCount(45);
  //   setCount(count + 1);
  // }

  //передаем в setCount стрелочную функцию

  // function onPlusClick() {
  //   setCount((count) => count + 1);
  //   // console.log(`setCount((count) => count + 1); count=${count}`);
  //   setCount((count) => count + 1);
  //   // console.log(`setCount((count) => count + 1); count=${count}`);
  //   setCount((count) => count + 1);
  //   // console.log(`setCount((count) => count + 1); count=${count}`);
  // }
  // console.log(count);

  // let prev = 3;
  // function onPlusClick() {
  //   setCount((prev) => prev + 1);
  //   // console.log(`count=${prev}`);
  //   // console.log(`typeof prev: ${typeof prev}`);
  //   setCount((count) => count + 1);
  //   console.log(`count=${count}`);
  //   console.log(`typeof count: ${typeof count}`);

  //   setCount((vanya) => vanya + 1);
  //   console.log(`count=${count}`);
  // }
  // let a = 1;
  // let b = 6;
  function func() {
    // let a = "hello";
    let b = 3;
    const sum = (a, b) => a + b;
    console.log(sum(a, b));
  }
  func();
  // console.log(typeof a);
  

  // function onPlusClick() {
  //   setCount((vania) => "vasya" + vania);
  //   console.log(`setCount((vania) => "vasya" + vania); count=${count}; vania=${typeof(vania)}`);

  //   let a = setCount((count) => count + 1);
  //   console.log(
  //     `let a = setCount((count) => count + 1); a=${a}; count=${count}`
  //   );

  //   setCount((count) => count + 5);
  //   console.log(`setCount((count) => count + 5); count=${count}`);

  //   setCount((vasya) => vasya + 2);
  //   console.log(`setCount((vasya) => vasya + 2); count=${count}`);
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
      <Button name="Reset" type="reset" onClick={reset} />
    </div>
  );
}

export default CounterExperiments;
