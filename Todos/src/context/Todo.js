/* eslint-disable no-unused-vars */
import { createContext,useContext } from "react";
export const TodosContext = createContext({
    todos:[
        {
            id:1,
            todoContent:"This Is My Todo Content",
            isCompleted:false
        }
    ],
    addTodos:(todos) => {},
    updateTodos:(id,todos) => {},
    deleteTodos:(id) => {},
    toggleComplete:(id) => {}
})
export const useTodos = () => {
    return useContext(TodosContext)
}
export const TodosProvider = TodosContext.Provider;