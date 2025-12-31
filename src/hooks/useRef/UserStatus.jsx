import React, { useState, useRef, useEffect } from 'react'

export default function UserStatus() {
    const [ status, setStatus ] = useState("Offline");

    const prevStatusRef = useRef("null");

    useEffect(() => {
        prevStatusRef.current = status;
    }, [ status ]);

    return (
        <div>
            <h2>Current Status : { status } </h2>
            <h3>Previous Status :{ prevStatusRef.current } </h3>

            <button onClick={ () => setStatus("Online") }>Set Online</button>
            <button onClick={ () => setStatus("away") }>Set Away</button>
            <button onClick={ () => setStatus("Offline") }>Set Offline</button> 
        </div>
    )
}
