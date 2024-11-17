import "./styles.css"

function Button ({name, type="button", onClick}){
    const buttonsType = type==='reset'? 'reset-button': 'main-button';
    return <button className = {buttonsType} type={type} onClick={onClick}>{name}</button>
}

export default Button;