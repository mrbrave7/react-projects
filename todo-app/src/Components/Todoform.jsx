import {useState} from "react";
import { useTodo } from "../Context/todoContext";
const Todoform = () => {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()
    function submitNote (event){
        event.preventDefault();
        console.log(todo)
        if(todo.trim() === ""){
            alert("Please Enter Todo")
        }
        else{
            addTodo(todo)
            setTodo("")
        }
    }
  return (
    <div className='form-container'>
      <form className="form" onSubmit={submitNote}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} className="note-input" />
        <button type="submit" className="add-note">Add</button>
      </form>
    </div>
  )
}

export default Todoform
