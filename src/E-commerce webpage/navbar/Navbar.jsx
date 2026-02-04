import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userName, setUserName ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const syncAuth = () => {
            const loggedIn = localStorage.getItem("isLoggedIn");
            const name = localStorage.getItem("userName");

            if (loggedIn === "true" && name) {
                setIsLoggedIn(true);
                setUserName(name);
            } else {
                setIsLoggedIn(false);
                setUserName("");
            }
        };

        // run once
        syncAuth();

        window.addEventListener("authChange", syncAuth);

        return () => {
            window.removeEventListener("authChange", syncAuth);
        };
    }, []);

    // LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");

        window.dispatchEvent(new Event("authChange"));

        navigate("/Home");
    };

    return (
        <header className="navbar">
            <div className="nav-left">
                <img src="sheinlogo.png" alt="shein" className="nav-logo" />
            </div>

            <div className="nav-search">
                <input type="text" placeholder="search products" />
            </div>

            <nav className="nav-links">
                <Link to="/Home">Home</Link>
                <Link to="/Men">Men</Link>
                <Link to="/Women">Women</Link>
                <Link to="/Contact">Contact</Link>

                { isLoggedIn ? (
                    <div className="user-box">
                        <div className="user-icon">
                            { userName.charAt(0).toUpperCase() }
                        </div>
                        <span className="user-name">{ userName }</span>
                        <button className="logout-btn" onClick={ handleLogout }>
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/Login">Login / Signup</Link>
                ) }
            </nav>
        </header>
    );
}
