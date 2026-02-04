import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-left">
                <img src="src/E-commerce webpage/navbar/shein logo.png" alt="shein-logo" className="nav-logo" />
            </div>

            <div className="nav-search">
                <input type="text" placeholder="search products" />
            </div>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/Login">Login/Signup</Link>
            </nav>
        </header>
    )
}