import "./Gamestart.css"
import { useEffect, useState } from "react";
import { useGame } from "../../utilities/userQuizContext";
import { useNavigate } from "react-router-dom";
import { randomNumber } from "../../utilities/localFunc";

function Gamestart() {
  const navigate = useNavigate()
  const { startGame, allQuizQuestion,setSingleQuizQuestion,singleQuestion} = useGame();
  const [player, setPlayer] = useState('');
  useEffect(() => {
    let question = allQuizQuestion[randomNumber(allQuizQuestion.length)]
    setSingleQuizQuestion(question)
  },[allQuizQuestion, setSingleQuizQuestion, singleQuestion])

  function handlePlayer(e) {
    setPlayer(e.target.value);
  }

  function clickHandle() {
    if (!player.trim()) {
      alert("Enter a player name");
    } else {
      startGame(player,singleQuestion);
      setPlayer('');
      navigate("/gamepage")
    }
  }


  return (
    <main className='main-auth-page'>
      <div className="inner-auth-container">
        <h1>Welcome To Quiz World</h1>
        <div className="player-form">
          <input
            value={player}
            onChange={handlePlayer}
            type="text"
            name="player"
            id="player"
            placeholder="Enter Your Name"
          />
          <button type="button" onClick={clickHandle}>Play</button>
        </div>
        <div className="game-rules">
          <h4>Game Rules :</h4>
          <ul className="rules-list">
            <li className="rule-item">
              <p>You Get One Chance To Select Answer</p>
            </li>
            <li className="rule-item">
              <p>You Have 20 Second To Answer</p>
            </li>
            <li className="rule-item">
              <p>You Can Attempt 5 Wrong Question Only</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Gamestart;
