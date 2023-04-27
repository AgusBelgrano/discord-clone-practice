import { useState } from "react";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input/Input";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/user.interface";
import UserService from "../services/user.service";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../app/features/auth/auth.slice";

const Login = () => {

  const initialValues = {
    username: "",
    password: ""
  }

  const [loginForm, setLoginForm] = useState<User>(initialValues);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setLoginForm((state) => ({ ...state, [name]: value }));
  }

  const login = async (e: any) => {
    e.preventDefault();
    UserService.loginUser(loginForm)
      .then(res => {
        const { data } = res;
        dispatch(setUser(data.user));
        localStorage.setItem("token", data.token);
        navigate("/home");
      })
      .catch(error => {
        const { status } = error.response;
        console.log(status);
      });
  }

  return (
    <div className="formContainer d-flex align-items-center justify-content-center w-100 h-100">
      <div className="form-container">
        <form className="form" onSubmit={(e: any) => login(e)}>
          <Input name="email" label="Email" onChange={onChange} />
          <Input type="password" name="password" label="Password" onChange={onChange} />
          <Button type="submit" value="Login" />
          <h6 onClick={() => navigate('/register')}>Create account in <span className="text-primary cursor-pointer">Register</span></h6>
        </form>
      </div>
    </div>
  )
}

export default Login;