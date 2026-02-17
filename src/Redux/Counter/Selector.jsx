import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Action";


export default function Selector() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>redux counter</h1>
            <h2>Count : { count }</h2>
            <button onClick={ () => dispatch(increment()) }>Increase</button>
            <button onClick={ () => dispatch(decrement()) }>Decrease</button>
        </div>
    )
}

