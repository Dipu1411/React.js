import React, { useState, useEffect } from 'react'

export default function FetchApi() {
    const [ state, setState ] = useState({
        name: "",
        gender: "",
        image: ""
    })

    useEffect(() => {
        FetchApi()
    }, [])

    function FetchApi() {
        fetch("https://randomuser.me/api/")
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data.results[ 0 ])

                setState({
                    name: data.results[ 0 ].name.first,
                    gender: data.results[ 0 ].gender,
                    image: data.results[ 0 ].picture.medium

                })
            })
    }
    return (
        <div>
            <h1>Fetch Api</h1>
            <h2>Name: { state.name }</h2>
            <h2>Gender: { state.gender }</h2>
            <img src={ state.image } alt="img" />
            <br />
            <button onClick={ FetchApi }>data</button>
        </div>
    )
}
