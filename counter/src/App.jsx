import React, { useReducer } from 'react'
import "./App.css"

const initialState = {count:0}

function App() {
  return (
    <div className='main-app'>
      <Counter />
    </div>
  )
}

export default App

function Counter () {
  const [state,dispatch] = useReducer(reducer,initialState)
  return(
    <div className='counter-container'>
      <div className="counter-value">
        <span>{state.count}</span>
      </div>
      <div className="counter-controls">
        <button type='button' onClick={() =>{dispatch({type:"add"})}} >Add</button>
        <button type='button' onClick={() =>{dispatch({type:"sub"})}} >Sub</button>
        <button type='button' onClick={() =>{dispatch({type:"reset"})}} >Reset</button>
      </div>
    </div>
  )
}


const reducer = (state,action) => {
  switch(action.type){
    case "add":
      return {
        count : state.count+1
      };
      case "sub":
      return {
        count : state.count-1
      };
      case "reset":
        return{
          count : 0
        };
      default:
        return{
          state
        }
  }
}