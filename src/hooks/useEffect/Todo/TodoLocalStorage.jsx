const todoKey = "todoData";

export const getLocalStorageTodoData = () => {

    const savedTodos = localStorage.getItem(todoKey);
    if (!savedTodos) {
        return [];
    }
    return JSON.parse(savedTodos);
}

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
}


