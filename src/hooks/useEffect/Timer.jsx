import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [ seconds, setSeconds ] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        // cleanup
        return () => {
            clearInterval(timer)
            console.log("Timer cleaned up");
        };
    }, []);
    return (
        <div>
            <h2>Timer: { seconds } seconds</h2>
        </div>
    )
}
