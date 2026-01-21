import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { provider } from "react-redux";
import { myStore } from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    provider store = { myStore } >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter>{" "} <
    /provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals