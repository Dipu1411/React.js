import React, { useState } from 'react'

export default function FetchApi() {
    const [ state, setState ] = useState({
        name: "",
        gender: "",
        picture: ""
    });

    const fetchData = () => {
        fetch("https://api.genderize.io?name=luc")
            .then((res) => res.json())
            .then((data) => {
                setState({
                    name: data.name,
                    gender: data.gender,
                    picture: data.picture   // API does not return image
                })
            })
    }

    return (
        <div>
            <h1>{ state.name }</h1>
            <p>{ state.gender }</p>
            <img src={ state.picture } alt="" />
            <br />
            <button onClick={ fetchData }>Fetch</button>
        </div>
    )
}
