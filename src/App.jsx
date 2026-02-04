import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Loader from "./E-commerce webpage/loader/Loader";
import Navbar from "./E-commerce webpage/navbar/Navbar";

import Home from "./E-commerce webpage/navbar/pages/Home";
import Men from "./E-commerce webpage/navbar/pages/Men";
import Women from "./E-commerce webpage/navbar/pages/Women";
import Contact from "./E-commerce webpage/navbar/pages/Contact";
import Login from "./E-commerce webpage/navbar/pages/Login";


export default function App() {
    const [ loading, setLoading ] = useState(true);
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/Home" element={ <Home /> } />
                <Route path="/Men" element={ <Men /> } />
                <Route path="/Women" element={ <Women /> } />
                <Route path="/Contact" element={ <Contact /> } />
                <Route path="/Login" element={ <Login /> } />
            </Routes>
        </div>
    );
}
