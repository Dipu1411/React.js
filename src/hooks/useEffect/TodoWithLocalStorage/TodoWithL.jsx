import React, { useState, useEffect } from 'react'

export default function TodoWithLocalStorage() {
    const [ task, setTask ] = useState("");
    const [ todos, setTodos ] = useState([]);

    // Load todos from localStorage on component mount
    useEffect(() => {
        const storeTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storeTodos);
    }, []);

    // Save todos to localStorage whenever todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [ todos ]);

    const addTodo = () => {
        if (task.trim()) {
            setTodos([ ...todos, task ]);
            setTask("");
            
        }
    };

    const deleteBtn = (index) => {
        const del = todos.filter((el, i) => i !== index);
        setTodos(del);
    };

    const editBtn = (index) => {
        const newValue = prompt("Enter new value:", todos[ index ]);
        if (newValue !== null && newValue.trim() !== "") {
            const updated = [ ...todos ];
            updated[ index ] = newValue;
            setTodos(updated);
        }
    };

    return (
        <div>
            <h1>Todo list</h1>
            <input type="text" value={ task } onChange={ (e) => setTask(e.target.value) } />
            <button onClick={ addTodo }>Add Todo</button>
            <ul>
                { todos.map((t, i) => {
                    return <li key={ i }>{ t }
                        <button onClick={ () => editBtn(i) }>Edit</button>
                        <button onClick={ () => deleteBtn(i) }>Delete</button>
                    </li>
                }) }


            </ul>

        </div>
    )
}
