import "./styles.css"

function Button ({name, type="button", onClick}){
    return <button className = "main-button" type={type} onClick={onClick}>{name}</button>
}

export default Button;