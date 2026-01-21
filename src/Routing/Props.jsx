import React, { useState } from "react";
import { myContext } from "./Context";
import Child from "./Child";

export default function Props() {
    const [ state ] = useState({
        name: "divyansh",
        age: 21
    })

    return (
        <div>
            <h1>parent component</h1>
            <p>{ state.name }</p>

            <myContext.Provider value={ state }>
                <Child />
            </myContext.Provider>
        </div>
    )
}