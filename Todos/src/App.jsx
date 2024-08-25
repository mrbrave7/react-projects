import { useState } from "react";
import { TodosProvider } from "./context/Todo";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const updateTodos = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    // setTodos((prev) => {
    //   return prev.map((prevTodo) => {
    //     if (prevTodo.id === id) {
    //       return todo;
    //     } else {
    //       return prevTodo;
    //     }
    //   });
    // });
  };
  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const toggleComplete = (id) => {
    console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };
  return (
    <TodosProvider
      value={{ todos, addTodos, deleteTodos, updateTodos, toggleComplete }}
    >
      <main className="h-screen w-screen flex flex-col bg-rose-500 ">
        <header className="flex items-center justify-center w-full p-4">
          <div className="md:w-[45rem] w-full justify-center flex flex-col md:gap-4 gap-2 p-2 md:p-8 rounded-md items-center md:h-[10rem] bg-white">
            <h1 className="md:text-3xl uppercase text-rose-500">
              Add Your Work Here
            </h1>
            <AddTodoForm />
          </div>
        </header>
        <section className="bg-white p-8 h-full flex gap-4 flex-col items-center">
          <h1 className="text-rose-500 text-2xl">Your Works</h1>
          <div className="md:w-[45rem]">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todo todo={todo} />;
              </div>
            ))}
          </div>
        </section>
      </main>
    </TodosProvider>
  );
};

export default App;
