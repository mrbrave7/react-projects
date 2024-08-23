/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
export const todoContext = createContext({
    todos:["getup","brushYourTeeth"],
    addTodo:(todo) => {},
    deleteTodo:(todo) => {}
})
export const useTodo = () => {
    return useContext(todoContext)
} 
export const Todoprovider = todoContext.Provider