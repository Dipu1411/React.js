import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// controlled component
export default function SimpleTodo() {
    const [ text, setText ] = useState("");
    const [ state, setState ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setState([ ...state, text ]);
        setText("");
    };

    const deleteBtn = (index) => {
        const del = state.filter((el, i) => i !== index);
        setState(del);
    };

    const editBtn = (index) => {
        const newValue = prompt("Enter new value:", state[ index ]);
        if (newValue !== null && newValue.trim() !== "") {
            const updated = [ ...state ];
            updated[ index ] = newValue;
            setState(updated);
        }
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" value={ text } onChange={ (e) => setText(e.target.value) } />
                <input type="submit" value="submit" />
            </form>

            { state.map((el, i) => (
                <li key={ i }>
                    { el }
                    <button onClick={ () => editBtn(i) }>Edit</button>
                    <button onClick={ () => deleteBtn(i) }>Delete</button>
                </li>
            )) }
        </div>
    );
}

// uncontrolled component

export function Form() {
    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const commentRef = useRef(null);

    const [ rating, setRating ] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

        console.log("name:", nameRef.current.value);
        console.log("mail:", mailRef.current.value);
        console.log("comment:", commentRef.current.value);
        console.log("rating:", rating);
    }

    return (
        <div>
            <h1>Form Component</h1>

            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    placeholder="enter your name"
                    ref={ nameRef }
                />
                <br />

                <input
                    type="email"
                    placeholder="enter your email"
                    ref={ mailRef }
                />
                <br />

                <textarea
                    placeholder="enter your comment"
                    ref={ commentRef }
                />
                <br />

                <div>
                    <p>Rate Us:</p>
                    { [ 1, 2, 3, 4, 5 ].map((star) => (
                        <span
                            key={ star }
                            onClick={ () => setRating(star) }
                            style={ {
                                fontSize: "25px",
                                cursor: "pointer",
                                color: star <= rating ? "gold" : "gray",
                            } }
                        >
                            ★
                        </span>
                    )) }
                </div>

                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

