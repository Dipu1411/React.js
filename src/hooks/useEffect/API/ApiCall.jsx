import React, { useState, useEffect } from 'react'

export default function ApiCall() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(data => {
                setUsers(data.results);
                console.log(data);
            })
    }, []);

    return (
        <div>
            <h2>user list</h2>
            { users.map((el, i) => (
                <p key={ i }>{ el.name.first } { el.name.last }</p>
            )) }
        </div>
    )
}