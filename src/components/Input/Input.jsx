import "./styles.css";

function Input({ id, name, type, placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="input-field"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
