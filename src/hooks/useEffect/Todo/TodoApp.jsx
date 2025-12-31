import React, { useState } from "react";
import './Todo.css';
import TodoDate from "./TodoDate";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";

export default function Todo() {

    const [task, setTask] = useState(() => getLocalStorageTodoData());

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        // to avoid adding empty tasks
        if (!content) return;
        // to check for duplicate tasks
        //if (task.includes(inputValue)) return;

        const ifTodoContentMatched = task.find((item) => item.content === content);
        if (ifTodoContentMatched) return;
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    };

    // todo and data to localStorge
    setLocalStorageTodoData(task);

    // handle delete todo function
    const handleDeleteTodo = (item) => {
        const updatedTasks = task.filter((taskItem) => taskItem.content !== item);
        setTask(updatedTasks);
    };

    const handleClearAllTodo = () => {
        setTask([]);
    };

    // handle checked todo function
    const handleCheckedTodo = (item) => {
        const updatedTasks = task.map((taskItem) => {
            if (taskItem.content === item) {
                return { ...taskItem, checked: !taskItem.checked };
            }
            else {
                return taskItem;
            }

        });
        setTask(updatedTasks);
    }

    return (
        <section className="todo-container">
            <header className="header">
                <h1>Todo List</h1>
                {/* This renders the date and time */}
                <TodoDate />
            </header>


            <TodoForm onAddTodo={handleFormSubmit} />

            {/* This renders the list after the header and form */}
            <section className="unOrderedList">
                <ul>

                    {task.map((item, index) => {
                        return (
                            <TodoList
                                key={index.id}
                                data={item.content}
                                checked={item.checked}
                                handleDeleteTodo={handleDeleteTodo}
                                handleCheckedTodo={handleCheckedTodo}
                            />
                        )
                    })}
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearAllTodo}>
                    Clear all
                </button>
            </section>
        </section>
    );
}