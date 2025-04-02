import {useState} from "react";

const LoginForm =() => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return(
        <form action="/sendData">
            <input type="email"
                   name="email"
                   id="email"
                   placeholder="Enter Email"/>

            <input type={showPassword ? "text" : "password"}
                   name="password" id="password"
                   placeholder="Enter Password"/>
            <i className="fa-regular fa-face-rolling-eyes" onClick={handleShowPassword}></i>
            <input type="checkbox"
                   id="showPassword"
                   onChange={handleShowPassword}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;