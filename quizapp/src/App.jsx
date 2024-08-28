import { useEffect, useState } from "react";
import { initialQuizState, saveQuizState } from "./utilities/localStorage"
import Questions from "./utilities/quizes"
import { Gameprovider } from "./utilities/userQuizContext";
import { Outlet } from "react-router-dom";
function App() {
  const allQuizQuestion = [...Questions];
  const innitialGameState = initialQuizState();

  const [playerName, setPlayerName] = useState(innitialGameState.playerName);
  const [rightQuizQuestions, setRightQuizQuestionState] = useState(innitialGameState.rightQuizQuestions);
  const [wrongQuizQuestions, setWrongQuizQuestionState] = useState(innitialGameState.wrongQuizQuestions);
  const [singleQuestion, setSingleQuestion] = useState(innitialGameState.singleQuestion)

  const setSingleQuizQuestion = (question) => {
    setSingleQuestion(question)
  }
  const startGame = (playerName, question) => {
    setPlayerName(playerName)
    setSingleQuestion(question)
  }
  const setRightQuizQuestions = (question) => {
    setRightQuizQuestionState((prevValue) => [...prevValue, question])
  }
  const setWrongQuizQuestions = (question) => {
    setWrongQuizQuestionState((prevValue) => [...prevValue, question])
  }
  const exitGame = () => {
    setRightQuizQuestionState([]);
    setPlayerName(" ")
    setWrongQuizQuestionState([])
    setSingleQuestion({})
  }
  useEffect(() => {
    saveQuizState({ playerName, rightQuizQuestions, wrongQuizQuestions, singleQuestion });
  }, [playerName, rightQuizQuestions, wrongQuizQuestions, singleQuestion]);
  return (
    <Gameprovider value={{
      allQuizQuestion,
      playerName,
      singleQuestion,
      setSingleQuizQuestion,
      setRightQuizQuestions,
      setWrongQuizQuestions,
      rightQuizQuestions,
      wrongQuizQuestions,
      startGame,
      exitGame,
    }}>
      <Outlet />
    </Gameprovider>
  )
}

export default App
