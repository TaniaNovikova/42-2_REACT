// Функция-хук useSate() возвращает массив из 2 элементов
// - 1 элемент - это переменная сотояния
// - 2 элемент - функция, которая меняет это состояние
// По умолчанию count = undefined, если мы ничего не передадим в качестве аргумента в функцию useState()

import "./styles.css";
import Button from "../Button/Button";
//Шаг 1 - импорт хука useState из react
import { useState } from "react";

function CounterExperiments() {
  console.log("Render");

  //Шаг 2 - вызываем хук useState и передаем в него первоначальное состояние(initialState)
  //делаем деструктуризацию массива из двух элементов, который возвращает хук useState
  const [count, setCount] = useState(0);
  // const result = useState(0);
  // console.log(`useState(0): ${result}`);
  // console.log(`count): ${count}`);
  // console.log(`setCount: ${setCount}`);



  //Шаг 3 - необходимо прописать функции, которые будут менять состояние. Внутри этих функций нужно использовать setCount
  // const onPlusClick = () => {
  //   setCount((prevValue) => prevValue + 1);
  // };

  // function onPlusClick() {
  //   setCount(c + 1);
  //   setCount(c + 1);
  //   setCount(c + 1);
  // }

  // function onPlusClick() {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }

  // function onPlusClick() {
  //   setCount(count=>(count + 1));
  //   setCount(count=>(count + 1));
  //   setCount(count=>(count + 1));

  // }
let vania=count;
console.log(`vania: ${vania}`);

   function onPlusClick() {
    setCount(vania=>(vania + 1));
    console.log(`vania+1: ${vania}`);
    console.log(setCount);
    
    setCount(count=>(count + 5));
    console.log(`count+5: ${count}`);

    setCount(vasya=>(vasya + 2));
    console.log(`vasya+2: ${count}`);
  }

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
