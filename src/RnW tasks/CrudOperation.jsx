import React, { useState, useEffect } from "react";

export default function TodoCRUD() {
    const storageType = "local"; // "local" or "session"

    const storage =
        storageType === "local" ? localStorage : sessionStorage;

    const [ task, setTask ] = useState("");
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(storage.getItem("todos")) || [];
        setTodos(stored);
    }, []);

    useEffect(() => {
        storage.setItem("todos", JSON.stringify(todos));
    }, [ todos ]);

    const addTodo = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTodos([ ...todos, task ]);
            setTask("");
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((el, i) => i !== index));
    };

    const editTodo = (index) => {
        const value = prompt("Edit todo", todos[ index ]);
        if (value && value.trim()) {
            const updated = [ ...todos ];
            updated[ index ] = value;
            setTodos(updated);
        }
    };

    return (
        <div>
            <h2>Todo CRUD</h2>

            <form onSubmit={ addTodo }>
                <input
                    type="text"
                    value={ task }
                    onChange={ (e) => setTask(e.target.value) }
                />
                <button>Add</button>
            </form>

            <ul>
                { todos.map((t, i) => (
                    <li key={ i }>
                        { t }
                        <button onClick={ () => editTodo(i) }>Edit</button>
                        <button onClick={ () => deleteTodo(i) }>Delete</button>
                    </li>
                )) }
            </ul>
        </div>
    );
}
