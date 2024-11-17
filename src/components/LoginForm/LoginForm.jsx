import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  const inputAttributes = [
    {
      id: "email-id",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
    },
    {
      id: "password-id",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
    },
  ];
  return (
    <form className="login-form-wrapper">
      <p className="login-form-title">Login form</p>
      <div className="inputs-container">
        <Input
          id={inputAttributes[0].id}
          name={inputAttributes[0].name}
          type={inputAttributes[0].type}
          placeholder={inputAttributes[0].placeholder}
          label={inputAttributes[0].label}
        />
        <Input
          id={inputAttributes[1].id}
          name={inputAttributes[1].name}
          type={inputAttributes[1].type}
          placeholder={inputAttributes[1].placeholder}
          label={inputAttributes[1].label}
        />
      </div>
      <Button name="Login" type="submit"/>
    </form>
  );
}

export default LoginForm;
