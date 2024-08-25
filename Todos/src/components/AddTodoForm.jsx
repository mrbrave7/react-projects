import { useState } from "react";
import { useTodos } from "../context/Todo.js";
function AddTodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodos } = useTodos();
  function addTodo(e) {
    e.preventDefault();
    if (!todo) return;
    addTodos({ todo, isCompleted: false });
    setTodo("");
  }
  return (
    <form
      onSubmit={addTodo}
      className="border-2 w-full flex items-center md:flex-row flex-col justify-between border-rose-500 rounded-md"
      action=""
    >
      <input
        className="p-2 rounded-md md:text-xl w-full text-sm text-rose-500 outline-none "
        type="text"
        name="todos"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Your Todos"
        id="todos"
      />
      <button
        type="submit"
        className="bg-rose-500 md:w-40 md:text-xl w-full text-sm cursor-pointer rounded-sm text-white p-2"
      >
        Add Todos
      </button>
    </form>
  );
}

export default AddTodoForm;
