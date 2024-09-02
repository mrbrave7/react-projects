import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [time,setTime] = useState(
    {
      hour:"",
      minute:"",
      second:""
    }
  )
  useEffect(() => {
    const intervalId = setInterval(() => {
      let time = new Date()
      setTime({
        hour:time.getHours().toString().padStart(2,"0"),
        minute:time.getMinutes().toString().padStart(2,"0"),
        second:time.getSeconds().toString().padStart(2,"0")
      })
    },1000)
    return () => {clearInterval(intervalId)}
  })
  return (
    <div className='main-app-container'>
      <div className='upper-circle'></div>
      <div className='inner-container'>
      <p>{time ? time.hour : "unavbailable"}</p> :
      <p>{time ? time.minute : "unavbailable"}</p> :
      <p>{time ? time.second : "unavbailable"}</p>
      </div>
      <div className='lower-circle'></div>
    </div>
  )
}

export default App
