import './Game.css';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../utilities/userQuizContext';
import { randomNumber } from '../../utilities/localFunc';
import { FaUser, FaClock, FaFlag, FaWindowClose } from 'react-icons/fa';

function Game() {
  const navigate = useNavigate();
  const {
    playerName,
    singleQuestion,
    rightQuizQuestions,
    wrongQuizQuestions,
    setRightQuizQuestions,
    setWrongQuizQuestions,
    setSingleQuizQuestion,
    exitGame,
    allQuizQuestion,
  } = useGame();

  const chances = 5 - wrongQuizQuestions.length;
  const [second, setSecond] = useState(20);
  const [disabled, setDisabled] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [clickedOnAnswer, setClickedOnAnswer] = useState(false);

  const revealAnswer = useCallback(() => {
    setShowControls(true);
    document.querySelectorAll('.answers button').forEach((button) => {
      if (button.innerText === singleQuestion.answer) {
        button.style.backgroundColor = 'green';
      } else {
        button.style.backgroundColor = 'red';
      }
    });
  }, [singleQuestion.answer]);

  useEffect(() => {
    if (second <= 0) {
      revealAnswer();
      if (!clickedOnAnswer) {
        setWrongQuizQuestions(singleQuestion);
        setClickedOnAnswer(true);
      }
      setDisabled(true);
      return;
    }

    const intervalId = setInterval(() => {
      setSecond((prevSecond) => prevSecond - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [second, clickedOnAnswer, singleQuestion, setWrongQuizQuestions, revealAnswer]);

  function handleButtonClick(event) {
    const clickedAnswer = event.target.innerText;
    setDisabled(true);
    setSecond(0);

    if (clickedAnswer === singleQuestion.answer) {
      event.target.style.backgroundColor = 'green';
      setRightQuizQuestions(singleQuestion);
    } else {
      event.target.style.backgroundColor = 'red';
      setWrongQuizQuestions(singleQuestion);
    }

    setClickedOnAnswer(true);
  }

  function exitGameFunc() {
    navigate('/gameover');
    exitGame();
  }

  function playNext() {
    if (allQuizQuestion.length > 0) {
      document.querySelectorAll('.answers button').forEach((button) => {
        button.style.backgroundColor = '';
        button.style.color = '';
      });
      const question = allQuizQuestion[randomNumber(allQuizQuestion.length)];
      setSingleQuizQuestion(question);
      setSecond(20);
      setDisabled(false);
      setClickedOnAnswer(false);
      setShowControls(false);
    } else {
      console.log('No more questions available.');
    }
  }

  if (chances <= 0) {
    navigate('/gameover');
  }

  return (
    <section className='game-page'>
      <div className='inner-game-container'>
        <div className='user-details'>
          <div className='user game-user' title='Player'>
            <span className='icon'>
              <FaUser />
            </span>
            <span className='detail'>{playerName}</span>
          </div>
          <div className='user timer' title='Timer'>
            <span className='icon'>
              <FaClock />
            </span>
            <span className='detail'>{second}</span>
          </div>
          <div className='user right-question' title='Score'>
            <span className='icon'>
              <FaFlag />
            </span>
            <span className='detail'>{rightQuizQuestions.length}</span>
          </div>
          <div className='user wrong-question' title='Chance'>
            <span className='icon'>
              <FaWindowClose />
            </span>
            <span className='detail'>{chances}</span>
          </div>
        </div>
        <div className='game-container'>
          <h1 className='question'>{singleQuestion?.question || 'Loading question...'}</h1>
          <div className='answers'>
            {singleQuestion?.options?.length > 0 ? (
              singleQuestion.options.map((option, index) => (
                <button
                  disabled={disabled}
                  onClick={handleButtonClick}
                  key={index}
                >
                  {option}
                </button>
              ))
            ) : (
              <p>No options available.</p>
            )}
          </div>
        </div>
        <div className='game-controls'>
          {showControls && (
            <div className='controls'>
              <button onClick={exitGameFunc}>Exit Game</button>
              <button onClick={playNext}>Play Next</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Game;
