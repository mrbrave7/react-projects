import "./Gameover.css"
import { useNavigate } from "react-router-dom";
import  {useGame}  from "../../utilities/userQuizContext";
function Gameover() {
  const navigate = useNavigate()
  const {
    playerName,
    rightQuizQuestions,
    wrongQuizQuestions,
    exitGame,
  } = useGame();
  const exitGameFunc = () => {
    navigate("/")
    exitGame()
    localStorage.clear()
    window.location.reload()
  }
  return (
    <section className="game-over-section">
      <div className="inner-game-over-container">
        <h1>{playerName}</h1>
        <p>{`Your Total Score Is : ${rightQuizQuestions.length}`}</p>
        <p>{`You Have Attempted ${wrongQuizQuestions.length} Wrong Answers`}</p>
        <button onClick={exitGameFunc}>PlayAgain</button>
      </div>
    </section>
  )
}

export default Gameover
