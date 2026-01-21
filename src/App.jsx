import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";


import Nav from "./Routing/Nav";
import FetchApi from "./hooks/useState/FetchApi";
import Counter from "./hooks/useState/Counter";
import Timer from "./hooks/useEffect/Timer";
import SimpleTodo from "./hooks/useState/SimpleTodo";
import Product from "./Routing/Product";
import Electronic from "./Routing/products/Electronic";
import Clothing from "./Routing/products/Clothing";
import Jwellery from "./Routing/products/Jwellery";
import ProductDetails from "./Routing/ProductDetails";
import Props from "./Routing/Props";


export default function App() {
    return (<
        div >
        <
            Nav />
        <Props />
        <
        Routes >
            <
                Route path="/FetchApi"
                element={ < FetchApi /> }
            />{ " " } <
                Route path="/Counter"
                element={ < Counter /> }
            />{ " " } <
                Route path="/Timer"
                element={ < Timer /> }
            />{ " " } <
                Route path="/SimpleTodo"
                element={ < SimpleTodo /> }
            />{ " " } <
        Route path="/Product"
                element={ < Product /> } >
                <
                    Route path="Electronic"
                    element={ < Electronic /> }
                />{ " " }
                <
                    Route path="Clothing"
                    element={ < Clothing /> }
                />{ " " }
                <
                    Route path="Jwellery"
                    element={ < Jwellery /> }
                />{ " " }

                <                    
        /Route>{ " " }

                <Route path="/ProductDetails/:id" element={ < ProductDetails /> } />

                <
        /Routes>{ " " }

                <
        /div>
                );
}