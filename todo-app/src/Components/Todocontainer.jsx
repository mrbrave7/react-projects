/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodo } from "../Context/todoContext";

const Todocontainer = ({ todo }) => {
    const [isComplete, setIsComplete] = useState(false);
    const { deleteTodo } = useTodo();

    function toggleComplete(event) {
        setIsComplete(event.target.checked);
    }

    return (
        <div className="todo-container">
            <input
                type="checkbox"
                checked={isComplete}
                name="isComplete"
                id="isComplete"
                onChange={toggleComplete}
            />
            <p
                className="todo-text"
                style={{
                    textDecoration: isComplete ? "line-through" : "none",
                    color: isComplete ? "red" : "black",
                }}
            >
                {todo}
            </p>
            <button
                type="button"
                onClick={() => deleteTodo(todo)}
                className="delete-todo"
            >
                ❌
            </button>
        </div>
    );
};

export default Todocontainer;
