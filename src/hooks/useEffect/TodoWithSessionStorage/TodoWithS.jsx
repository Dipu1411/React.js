import React, { useState, useEffect } from 'react'

export default function TodoWithS() {
    const [ task, setTask ] = useState("");
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        const storeTodos = JSON.parse(sessionStorage.getItem("todos")) || [];
        setTodos(storeTodos);


    }, []);

    useEffect(() => {
        sessionStorage.setItem("todos", JSON.stringify(todos));
    }, [ todos ]);

    const addTodo = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTodos([ ...todos, task ]);
            setTask("");
        }
    }

    const deleteTodo = (index) => {
        const filteredTodos = todos.filter((el, i) => i !== index);
        setTodos(filteredTodos);
    };

    return (
        <div>
            <h2>Session storage Todo List</h2>
            <form action="" onSubmit={ addTodo }>
                <input
                    type="text"
                    value={ task }
                    onChange={ (e) => setTask(e.target.value) }
                />

                <button>add</button>
            </form>

            <ul>
                { todos.map((t, i) => {
                    return <li key={ i }>{ t }
                        {/* <button onClick={ () => editBtn(i) }>Edit</button> */ }
                        <button onClick={ () => deleteTodo(i) }>Delete</button>
                    </li>
                }) }


            </ul>
        </div>
    )
}
