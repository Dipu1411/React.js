import React, { useState } from 'react'
import Child from './Child.jsx';

export default function Parent() {
    const [data, setData] = useState({
        name: "divyansh",
        country: "india"
    })
    return (
        <div>
            <h1>Parent Component</h1>
            <h2>Name: {data.name}</h2>
            <Child info={data} />
        </div>
    )
}
