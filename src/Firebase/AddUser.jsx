import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";


export default function AddUser() {

    const [ user, setUser ] = useState(null);

    async function sendData() {
        await setDoc(doc(db, "users", "Divyansh"), {
            user: "divyansh",
            email: "dipuvadher@gmail.com"
        });
    }

    async function fetchUser() {
        const snap = await getDoc(doc(db, "users", "Divyansh"));

        if (snap.exists()) {
            setUser(snap.data());
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <button onClick={ sendData }>Send Data</button>

            <h2>User Data</h2>

            { user && (
                <div>
                    <p>Name: { user.user }</p>
                    <p>Email: { user.email }</p>
                </div>
            ) }
        </div>
    );
}
