import Button from "../../Button/Button";
import Counter from "../../Counter/Counter";
import "./styles.css";


function Lesson04() {
  const showMessage = () => {
    alert("Func outer click");
  };
  const showCustomMessage = (name) => {
    alert(`Function outer click - ${name}`);
  };
  return (
    <div className="lesson04-wrapper">
      <div className="buttons-wrapper">
        {/* Пример 1 использования функции - создание функции внутри кнопки*/}
        <Button
          name="Button with inner f"
          onClick={() => {
            alert("Func inner");
          }}
        />
        {/* Пример 2 использования функции - создание функции вне кнопки*/}
        <Button name="Button with outer f" onClick={showMessage} />
        {/* Пример 3 использования функции - создание функции вне кнопки c парметрами*/}
        <Button
          name="Button with parametrs"
          onClick={() => {
            showCustomMessage("Bob");
          }}
        />
      </div>
      <Counter/>
    </div>
  );
}
export default Lesson04;