import { FaUser, FaClock, FaFlag } from "react-icons/fa";
import { useUser } from '../../utilities/userContext';
import { useEffect, useState } from "react";
import "./Game.css"
import Quiz from "../../components/Quiz/Quiz";

function Game() {
  const { playerName, rightQuestion, setQuizQuestion,quizQuestion, allQuiz } = useUser();
  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(20);
  console.log(quizQuestion)

  const generateRandomNumber = (length) => Math.floor(Math.random() * length);

  const addSingleQuestion = () => {
    const question = allQuiz[generateRandomNumber(allQuiz.length)];
    setQuizQuestion(question);
  };

  const loadNewQuestion = () => {
    setSecond(20)
    addSingleQuestion();
  };

  useEffect(() => {
    loadNewQuestion();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((prevSecond) => (prevSecond > 0 ? prevSecond - 1 : prevSecond));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [second]);

  useEffect(() => {
    setScore(rightQuestion.length);
  }, [rightQuestion]);

  useEffect(() => {
    console.log(quizQuestion);
  }, [quizQuestion]);

  const nextQuestion = () => {
    loadNewQuestion();
  };

  const resetTimer = (childData) => {
    if (childData) {
      setSecond(0);
    }
  };

  return (
    <main className='main-game-container'>
      <div className="inner-game-container">
        <div className="user-controllers-container">
          <div className="controls">
            <span className="icon"><FaUser /></span>
            <span className="text">{playerName}</span>
          </div>
          <div className="controls">
            <span className="icon"><FaClock /></span>
            <span className="text">{second}</span>
          </div>
          <div className="controls">
            <span className="icon"><FaFlag /></span>
            <span className="text">{score}</span>
          </div>
        </div>
        <div className="quiz-div">
          <Quiz question={quizQuestion} timer={second} resetTimer={resetTimer} />
        </div>
        <div className="main-controls">
          <button>Quit Game</button>
          <button onClick={nextQuestion}>Play Next</button>
        </div>
      </div>
    </main>
  );
}

export default Game;
