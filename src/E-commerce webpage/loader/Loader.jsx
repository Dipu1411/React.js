import React, { useState, useEffect } from "react";
import "./loader.css";

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader-box">
                <h1 className="loader-logo">SHEIN</h1>
                <div className="loader-line"></div>
            </div>
        </div>
    );
}
