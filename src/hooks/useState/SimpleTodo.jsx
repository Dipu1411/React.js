import React, { useState } from 'react';

export default function SimpleTodo() {
    const [text, setText] = useState("");
    const [state, setState] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setState([...state, text]);
        setText("");
    };

    const deleteBtn = (index) => {
        const del = state.filter((el, i) => i !== index);
        setState(del);
    };

    const editBtn = (index) => {
        const newValue = prompt("Enter new value:", state[index]);
        if (newValue !== null && newValue.trim() !== "") {
            const updated = [...state];
            updated[index] = newValue;
            setState(updated);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="submit" />
            </form>

            {state.map((el, i) => (
                <li key={i}>
                    {el}
                    <button onClick={() => editBtn(i)}>Edit</button>
                    <button onClick={() => deleteBtn(i)}>Delete</button>
                </li>
            ))}
        </div>
    );
}
