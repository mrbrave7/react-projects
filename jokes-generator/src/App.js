import React, { useState } from 'react'

function App() {
  const [joke,setJoke] = useState()
  function generateJoke (){
    async function fetchJoke (){
      try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random")
        if(!response.ok){
          console.log("There Is Error");
          return;
        }
        const data = await response.json()
        setJoke(data)
      } catch (error) {
        
      }
    }
    fetchJoke()
  }
  return (
    <div className='main-app'>
      <div className="app-container">
        <div className="jokes-container">
          <p>Type : {joke ? (joke.type) : "The Joke Is Not Available Please Generate"}</p>
          <p>Joke : {joke ? (joke.setup) : "The Joke Is Not Available Please Generate"}</p>
          <p>Punchline : {joke ? (joke.punchline) : "The Joke Is Not Available Please Generate"}</p>
        </div>
        <div className="generate-btn-container">
          <button onClick={generateJoke} type="button">Ganerate</button>
        </div>
      </div>
    </div>
  )
}

export default App
