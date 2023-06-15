import { useState } from "react";
import Input from "../components/common/Input/Input";
import Button from "../components/common/Button/Button";
import userService from "../services/user.service";
import { User } from "../interfaces/user.interface";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const initialValue = {
    username: "",
    password: "",
    email: ""
  }

  const [formState, setFormState] = useState<User>(initialValue);
  const navigate = useNavigate();

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((state) => ({ ...state, [name]: value}));
  }

  const register = async (e: any) => {
    e.preventDefault();
    const { data } = await userService.registerUser(formState);
    console.log(data)
    e.target.reset();
  }

  return (
    <div className="formContainer d-flex flex-column align-items-center justify-content-center w-100 h-100">
      <h1 className="text-light">Register</h1>
      <div className="form-container">
        <form className="form" onSubmit={(e: any) => register(e)}>
          <Input name="username" label="Username" defaultValue={initialValue.username} onChange={onChange} />
          <Input type="password" name="password" label="Password" defaultValue={initialValue.password} onChange={onChange} />
          <Input name="email" label="Email" defaultValue={initialValue.email} onChange={onChange} />
          <Button type="submit" value="Registrarse" />
          <h6 onClick={() => navigate('/')}>Have an account? <span className="text-primary cursor-pointer">Login</span></h6>
        </form>
      </div>
    </div>
  )
}

export default Register;