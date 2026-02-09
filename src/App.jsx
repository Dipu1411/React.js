import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Loader from "./E-commerce webpage/loader/Loader";

import Men from "./E-commerce webpage/navbar/pages/Men";
import Women from "./E-commerce webpage/navbar/pages/Women";
import Cart from "./E-commerce webpage/navbar/pages/Cart";
import Login from "./E-commerce webpage/navbar/pages/Login";
// import Database from "./Firebase/Database";
import Home from "./E-commerce webpage/navbar/pages/Home";
// import GoogleAuth from "./Firebase/googleAuth";
import FirebaseForm from "./Firebase/FireBaseForm";

export default function App() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            {/* <Database /> */ }
            {/* <GoogleAuth /> */ }
            <FirebaseForm />

            {/* ✅ Pages should render ONLY inside Routes */ }
            <Routes>
                <Route path="/" element={ <Home /> } />     {/* homepage */ }
                <Route path="/home" element={ <Home /> } />
                <Route path="/men" element={ <Men /> } />
                <Route path="/women" element={ <Women /> } />
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/login" element={ <Login /> } />
            </Routes>
        </div>
    );
}
