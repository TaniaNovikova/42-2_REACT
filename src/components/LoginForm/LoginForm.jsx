import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  
  return (
    <form className="login-form-wrapper">
      <p className="login-form-title">Login form</p>
      <div className="inputs-container">
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Input your email"
          label="Email"
        />
        <Input
         id="password-id"
         name="password"
         type="password"
         placeholder="Input your password"
         label="Password"
        />
      </div>
      <Button name="Login" type="submit"/>
    </form>
  );
}

export default LoginForm;
