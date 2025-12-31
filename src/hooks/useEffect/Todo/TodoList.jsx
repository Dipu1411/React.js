import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

// Correction: Removed 'key' from destructured props and added the return statement.
export default function TodoList({ data, checked, handleDeleteTodo, handleCheckedTodo }) {

    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => handleCheckedTodo(data)}>
                <FaCheckCircle />
            </button>
            <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(data)}
            >
                <MdDeleteForever />
            </button>
        </li>
    );
}