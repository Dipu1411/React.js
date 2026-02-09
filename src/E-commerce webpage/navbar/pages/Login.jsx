import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [ isLogin, setIsLogin ] = useState(true);
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [ message, setMessage ] = useState("");

    const navigate = useNavigate();

    // handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [ e.target.name ]: e.target.value
        });
    };

    // SIGNUP
    const handleSignup = () => {
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            setMessage("All fields required");
            return;
        }

        localStorage.setItem(
            "user",
            JSON.stringify({ name, email, password })
        );

        setMessage("Signup successful! Please login");
        setIsLogin(true);
    };

    // LOGIN
    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (
            storedUser &&
            storedUser.email === formData.email &&
            storedUser.password === formData.password
        ) {
            navigate("/Home");
        } else {
            setMessage("Invalid email or password");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>{ isLogin ? "login" : "signup" }</h2>

                { !isLogin && (
                    <input
                        type="text"
                        name="name"
                        placeholder="full name"
                        onChange={ handleChange }
                    />
                ) }

                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={ handleChange }
                />

                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={ handleChange }
                />

                <button onClick={ isLogin ? handleLogin : handleSignup }>
                    { isLogin ? "login" : "signup" }
                </button>

                { message && <p className="message">{ message }</p> }

                <p className="toggle">
                    { isLogin ? (
                        <span onClick={ () => setIsLogin(false) }>
                            New user? Signup
                        </span>
                    ) : (
                        <span onClick={ () => setIsLogin(true) }>
                            Already user? Login
                        </span>
                    ) }
                </p>
            </div>
        </div>
    );
}
