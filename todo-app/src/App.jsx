import { useEffect, useState } from "react";
import { Todoprovider } from "./Context/todoContext";
import Todoform from "./Components/Todoform";
import Todocontainer from "./Components/Todocontainer";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item !== todo));
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []); // Only run once when the component mounts

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Run every time todos changes

  return (
    <Todoprovider value={{ todos, addTodo, deleteTodo }}>
      <main className="main-container">
        <Todoform />
        <div className="todos-container">
          {todos.map((todo, index) => (
            <Todocontainer key={index} todo={todo} />
          ))}
        </div>
      </main>
    </Todoprovider>
  );
};

export default App;
