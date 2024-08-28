import { useState } from "react"

function App() {
  const buttons = ["C","%","X","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0","0","="]
  const [inputText, setInputText] = useState("")
  function handleClick(event) {
    console.log(event.target.innerText)
    if (event.target.innerText === "=") {
      console.log(event.target.innerText)
      const result = eval(inputText)
      setInputText(result.toString())
    }
    else if(event.target.innerText === "X"){
      const texts = deleteFromLast(inputText)
      setInputText(texts)
    }
    else if(event.target.innerText === "C"){
      setInputText("")
    }
    else {
      setInputText((prevValue) => `${prevValue}${event.target.innerText}`)
    }
    function deleteFromLast(word){
      return word.slice(0,-1)
    }
  }
  return (
    <main className="main-app">
      <div className="calculator-container">
        <div className="inner-container">
          <div className="input-box">
            <input type="text" readOnly id="text-input" name="text-input" value={inputText} />
          </div>
          <div className="button-box">
            {
              buttons.map((button, index) => {
                return (
                  <button
                    onClick={handleClick}
                    key={index}>{button}</button>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
