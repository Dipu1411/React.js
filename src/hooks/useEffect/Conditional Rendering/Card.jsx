import React, { useState, useEffect } from 'react'

export default function Card() {
    const [state, setState] = useState("https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg");

    useEffect(() => {
        console.log("Card Component Mounted");

        return (() => {
            alert("Card Component Unmounted");
        })
    }, [state]);
    return (
        <div>
            <h1>Card Component</h1>
            <img src={state} alt="Bird" width="300px" height="200px" />

            <button onClick={() => setState("https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg")}>show image</button>
        </div>
    )
}
