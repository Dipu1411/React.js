import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import "./navbar.css";

export default function Navbar() {
    const [ menu, setMenu ] = useState(null);
    const [ user, setUser ] = useState(null);
    const navigate = useNavigate();

    // check login when navbar loads
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    // LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
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

                <div
                    className="dropdown"
                    onMouseEnter={ () => setMenu("women") }
                    onMouseLeave={ () => setMenu(null) }
                >
                    <Link to="/Women" className="nav-item">Women</Link>

                    { menu === "women" && <Dropdown type="women" /> }
                </div>

                <div
                    className="dropdown"
                    onMouseEnter={ () => setMenu("men") }
                    onMouseLeave={ () => setMenu(null) }
                >
                    <Link to="/Men">Men</Link>

                    { menu === "men" && <Dropdown type="men" /> }
                </div>

                <Link to="/Cart">Cart</Link>


                { user ? (
                    <div className="user-box">
                        <div className="user-icon">
                            { user.name.charAt(0).toUpperCase() }
                        </div>

                        <span className="user-name">{ user.name }</span>

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
