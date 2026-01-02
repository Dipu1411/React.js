import React from "react";
import "./homepage.css";

export default function Homepage() {
    return (
        <>
            {/* Header */ }
            <header className="main-header shadow-sm">
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className="logo">My Website</h2>

                    <nav className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */ }
            <section className="hero-section">
                <div className="container text-center">
                    <h1 className="fade-in">
                        Welcome to <span>My Website</span>
                    </h1>

                    <p className="slide-up">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente dignissimos odio neque est expedita suscipit nobis.
                    </p>

                    <button className="btn btn-success hero-btn">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Content */ }
            <section className="content-section">
                <div className="container">
                    <div className="content-box">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente dignissimos odio neque est expedita suscipit nobis sequi
                            nemo ipsa pariatur aperiam quaerat id aspernatur iure.
                            Perspiciatis necessitatibus hic quisquam labore facilis ab deserunt
                            nihil consequatur officiis!
                        </p>

                        <button className="btn btn-outline-success mt-3">
                            Click Here
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */ }
            <footer className="footer">
                © 2024 MyWebsite. All rights reserved.
            </footer>
        </>
    );
}
