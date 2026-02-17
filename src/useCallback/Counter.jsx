import React, { useCallback, useState } from 'react'

export default function Counter() {
    const [ count, setCount ] = useState(0);

    const increment = useCallback(() => {
        console.log("comp...")
    }, []);

    return (
        <div>
            <h1>Count : { count }</h1>
            <button onClick={ increment }>click</button>
            <button onClick={ () => { setCount(count + 1) } }>click</button>
        </div>
    )
}
