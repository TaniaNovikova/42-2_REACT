import "./styles.css";

function Button({ imgSrc = undefined, name, type = "button", onClick }) {
  const buttonsType = type === "reset" ? "reset-button" : "main-button";
  return (
    <button className={buttonsType} type={type} onClick={onClick}>
      {imgSrc && <img className="button-img" src={imgSrc} alt="button-img"/>}
      {!imgSrc && name}
    </button>
  );
}

export default Button;
