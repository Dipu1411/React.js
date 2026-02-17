import React, { useMemo, useState } from "react";
 
export default function NumOperation() {
    const [ count, setCount ] = useState(0);
    const [ num, setNum ] = useState(0);

    const square = useMemo(() => {
        console.log("Calculating square...");
        return num * num;
    }, [num]);
     
    return (
        <div>
            <h1>Square : { square }</h1>
            <button onClick={ () => setNum(num + 1) }>click</button>
            <button onClick={()=>{setCount(count+1)}}>click</button>
        </div>


    )
}