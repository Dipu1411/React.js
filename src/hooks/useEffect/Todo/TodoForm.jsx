import React, { useState } from "react";
import './Todo.css';

export default function TodoForm({ onAddTodo }) {
    const [inputValue, setInputValue] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false });
    };

    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    }

    return (
        <section className="form">
            <form className="form" onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue.content}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Enter a task..."
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
    );
}