import React from 'react'

export default function Child(props) {
    return (
        <div>
            <h1>Child Component</h1>
            {/* <h2>name : {props.info.name}</h2> */}
            <h2>Country: {props.info.country}</h2>
        </div>
    )
}
