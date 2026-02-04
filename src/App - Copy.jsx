import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./E-commerce webpage/loader/Loader.jsx";
import Navbar from "./E-commerce webpage/navbar/Navbar.jsx";



export default function App() {
    if (loading) return <Loader />;
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/Login/signup" element={ <Login /> } />
            </Routes>
        </div>
    );
}