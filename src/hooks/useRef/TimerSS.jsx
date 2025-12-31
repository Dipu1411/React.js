import React, { useState, useEffect, useRef } from 'react'

export default function TimerSS() {
    const [ timer, setTimer ] = useState(0);
    const id = useRef(null);

    function handleStart() {
        id.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    }

    function handleStop() {
        clearInterval(id.current);
    }

    function handleClear() {
        clearInterval(id.current);
        setTimer(0);
    }

    return (
        <div>
            <h1>Timer is : { timer } seconds</h1>
            <button onClick={ handleStart }>Start</button>
            <button onClick={ handleStop }>Stop</button>
            <button onClick={ handleClear }>clear</button>
        </div>
    )
}
