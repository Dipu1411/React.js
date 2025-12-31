import React, { useState } from "react";
// import UserStatus from "./hooks/useRef/UserStatus";
// import TodoWithS from "./hooks/useEffect/TodoWithSessionStorage/TodoWithS";
import SimpleTodo, { Form } from "./hooks/useRef/Form";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TodoCRUD from "./RnW tasks/CrudOperation";
import Counter from "./hooks/useState/Counter";
// import Timer from "./hooks/useEffect/Timer";
import FetchApi from "./hooks/useState/FetchApi";
import Product from "./Routing/Product";
import Electronic from "./Routing/Electronic";
import Nav from "./Routing/Nav";

// import SimpleTodo from "./hooks/useState/SimpleTodo";
// import Form from "./hooks/useRef/Form";

export default function App() {


    return ( <
        >
        <
        Nav / >
        <
        Routes >
        <
        Route path = "/FetchApi"
        element = { < FetchApi / > }
        />  <
        Route path = "/SimpleTodo"
        element = { < SimpleTodo / > }
        /> <
        Route path = "/Counter"
        element = { < Counter / > }
        /> <
        Route path = "/product/"
        element = { < Product / > }
        />

        <
        Route path = "/product/electronic"
        element = { < Electronic / > }
        /> < /
        Routes >

        <
        FetchApi / >


        <
        />    );
    }