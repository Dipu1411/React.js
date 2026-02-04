import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        if (loggedIn === "true") {
            navigate("/Home");
        }
    }, [ navigate ]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [ e.target.name ]: e.target.value
        });
    };

    // SIGN UP
    const handleSignup = () => {
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            setMessage("All fields are required");
            return;
        }

        localStorage.setItem("user", JSON.stringify({ name, email, password }));

        setMessage("Signup successful! Please login.");
        setIsLogin(true);
        setFormData({ name: "", email: "", password: "" });
    };

    // LOGIN
    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            setMessage("No user found. Please sign up first.");
            setIsLogin(false);
            return;
        }

        if (
            storedUser.email === formData.email &&
            storedUser.password === formData.password
        ) {
            // SAVE LOGIN STATE
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userName", storedUser.name);

            window.dispatchEvent(new Event("authChange"));

            setMessage(`Welcome back, ${storedUser.name}!`);

            // CLOSE LOGIN PAGE
            setTimeout(() => {
                navigate("/Home"); // or "/"
            }, 600);
        } else {
            setMessage("Invalid email or password.");
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
                        value={ formData.name }
                        onChange={ handleChange }
                    />
                ) }

                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={ formData.email }
                    onChange={ handleChange }
                />

                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={ formData.password }
                    onChange={ handleChange }
                />

                <button onClick={ isLogin ? handleLogin : handleSignup }>
                    { isLogin ? "login" : "signup" }
                </button>

                { message && <p className="message">{ message }</p> }

                <p className="toggle">
                    { isLogin ? (
                        <>
                            New to SHEIN?
                            <span onClick={ () => setIsLogin(false) }> Sign Up</span>
                        </>
                    ) : (
                        <>
                            ALREADY HAVE AN ACCOUNT?
                            <span onClick={ () => setIsLogin(true) }> Login</span>
                        </>
                    ) }
                </p>
            </div>
        </div>
    );
}
