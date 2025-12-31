import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [ seconds, setSeconds ] = useState(0);
    const [ isActive, setIsActive ] = useState(false);

    useEffect(() => {

        let timer;
        if (isActive) {
            timer = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000)
        }

        return () => {
            clearInterval(timer)
            console.log("Timer cleaned up");
        }
    }, [ isActive ]);

    const TimerStart = () => {
        setIsActive(true);
    }

    const TimerStop = () => {
        setIsActive(false);
    }

    const TimerReset = () => {
        setSeconds(0);
        setIsActive(false);
    }


    return (
        <div style={ { textAlign: "center" } }>
            <h2>Timer: { seconds } seconds</h2>
            <button style={ { backgroundColor: "green" } } onClick={ TimerStart }>start</button>
            <button style={ { backgroundColor: "red" } } onClick={ TimerStop }>stop</button>
            <button style={ { backgroundColor: "blue" } } onClick={ TimerReset }>reset</button>
        </div>
    )
}
