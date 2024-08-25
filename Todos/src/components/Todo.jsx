import { useState } from "react";
import { useTodos } from "../context";

function Todo({ todo }) {
  const { updateTodos, deleteTodos, toggleComplete } = useTodos();
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  function updateTodo() {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setEditable(false);
  }
  function toggleCompleted() {
    toggleComplete(todo.id);
  }
  const [editable, setEditable] = useState(false);
  return (
    <div
      className={`${
        todo.isComplete ? "bg-rose-900" : "bg-rose-500"
      } flex items-center py-2 px-8 gap-4 text rounded-md w-full`}
    >
      <div className="flex items-center justify-center">
        <input
          className="h-5 w-5 outline-none"
          type="checkbox"
          onChange={toggleCompleted}
          value={todo.isComplete}
          name="completed"
          id="complete"
        />
      </div>
      <input
        className="bg-transparent w-full text-[20px] text-white outline-none"
        type="text"
        readOnly={!editable}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        name="todo"
        id="todo"
      />
      <div className="flex items-center gap-2">
        <button className="text-white p-1 text-2xl w-9 " onClick={updateTodo}>
          {editable ? (
            <ion-icon name="folder-open-outline"></ion-icon>
          ) : (
            <ion-icon name="create-outline"></ion-icon>
          )}
        </button>
        <button className="text-white p-1 text-2xl w-9">
          <ion-icon name="trash-bin-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default Todo;
