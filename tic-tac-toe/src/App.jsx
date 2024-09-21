import { useState } from "react";
import "./App.css";

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [boardSize, setBoardSize] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [playerDetail, setPlayerDetail] = useState({
    player1: { name: "", symbol: "" },
    player2: { name: "", symbol: "" },
  });
  const winConditions = generateWinCondition(boardSize);
  const [board, setBoard] = useState([]);
  const initialBoardSizes = [3, 4, 5];
  const players = 2;
  const [winner, setWinner] = useState(null)

  function handleSubmit(event) {
    event.preventDefault();
    setBoard(Array(boardSize * boardSize).fill(""));
    event.target.reset();
    setUserAuthenticated(true);
    setCurrentPlayer(playerDetail.player1.name);
  }

  function generateWinCondition(size) {
    const winCondition = [];
    // rows
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j);
      }
      winCondition.push(row);
    }
    // columns
    for (let i = 0; i < size; i++) {
      const col = [];
      for (let j = 0; j < size; j++) {
        col.push(i + size * j);
      }
      winCondition.push(col);
    }
    // diagonals
    const dig1 = [];
    for (let i = 0; i < size; i++) {
      dig1.push(i * size + i);
    }
    winCondition.push(dig1);

    const dig2 = [];
    for (let i = 0; i < size; i++) {
      dig2.push(i * size + (size - 1 - i));
    }
    winCondition.push(dig2);

    return winCondition;
  }

  function handleButtonClick(event, index) {
    event.target.disabled = true
    if (board[index] !== "") return;
    const currentSymbol =
      currentPlayer === playerDetail.player1.name
        ? playerDetail.player1.symbol
        : playerDetail.player2.symbol;

    const newBoard = [...board];
    newBoard[index] = currentSymbol;
    setBoard(newBoard);
    const win = calculateWinner(newBoard, winConditions)
    if (win) {
      if (playerDetail.player1.symbol === win) {
        setWinner(playerDetail.player1.name)
      }
      else {
        setWinner(playerDetail.player2.name)
      }
      setTimeout(() => {
        setUserAuthenticated((prev) => !prev)
      }, 2000)
    }
    else if (newBoard.every(cell => cell != "")) {
      setTimeout(() => {
        alert("The Game Is Tied")
        setUserAuthenticated((prev) => !prev)
      }, 2000)
    }
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === playerDetail.player1.name
        ? playerDetail.player2.name
        : playerDetail.player1.name
    )
  }
  function handleReset() {
    window.location.reload()
  }

  function calculateWinner(newBoard, winConditions) {
    for (let winCondition of winConditions) {
      const [a, b, c, ...rest] = winCondition;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        if (rest.length > 0 && rest.every((index) => newBoard[index] === newBoard[a])) {
          return newBoard[a]
        }
        else if (rest.length == 0) {
          return newBoard[a]
        }
      }
    }
    return null
  }

  function handlePlayerName(event, player) {
    const { value } = event.target;
    setPlayerDetail((prevDetail) => ({
      ...prevDetail,
      [player]: { ...prevDetail[player], name: value },
    }));
  }

  function handlePlayerSymbol(event, player) {
    if (event.target.value.length >= 1) {
      event.target.disabled = true;
    }
    const { value } = event.target;
    setPlayerDetail((prevDetail) => ({
      ...prevDetail,
      [player]: { ...prevDetail[player], symbol: value },
    }));
  }

  return (
    <div className="main-container">
      {userAuthenticated ? (
        <div className="game-container">
          <div className="navbar">
            {
              winner ? (
                <h1>{winner} Won The Game</h1>
              ) : (
                <div className="inner-navbar">
                  <div className="players">
                    <h1>{playerDetail.player1.symbol} : {playerDetail.player1.name}</h1>
                    <h1>{playerDetail.player2.symbol} : {playerDetail.player2.name}</h1>
                  </div>
                  <div className="chance-show">
                    {`${currentPlayer.toUpperCase()}'s Chance`}
                  </div>
                </div>
              )
            }
          </div>
          <div
            style={getGridStyle(boardSize)}
            className="game-board"
          >
            {board.length > 0
              ? board.map((singleBoard, index) => {
                return (
                  <button
                    onClick={(event) => handleButtonClick(event, index)}
                    key={index}
                  >
                    {singleBoard}
                  </button>
                );
              })
              : "Error"}
          </div>
        </div>
      ) : (
        <div className="userContainer">
          <form onSubmit={handleSubmit}>
            <h1>Welcome To Tic Tac Toe</h1>
            {Array(players)
              .fill(null)
              .map((_, index) => {
                const playerKey = `player${index + 1}`;
                return (
                  <div className="game-form-box" key={index}>
                    <input
                      type="text"
                      name={`player${index + 1}-name`}
                      id={`player${index + 1}-name`}
                      placeholder={`Name Of Player ${index + 1}`}
                      onChange={(event) => handlePlayerName(event, playerKey)}
                    />
                    <input
                      type="text"
                      name={`Player${index + 1}`}
                      placeholder={`Symbol Of Player ${index + 1}`}
                      id={`Player${index + 1}`}
                      onChange={(event) => handlePlayerSymbol(event, playerKey)}
                    />
                  </div>
                );
              })}
            <p>Game Board Sizes</p>
            <div className="board-sizes">
              {initialBoardSizes.map((board, index) => {
                return (
                  <button
                    type="button"
                    onClick={() => setBoardSize(board)}
                    key={index}
                  >
                    {board}
                  </button>
                );
              })}
            </div>
            <label htmlFor="starting-player">Starting Player</label>
            <select
              name="players"
              id="players"
              onChange={(event) => setCurrentPlayer(event.target.value)}
            >
              <option value={playerDetail.player1.name}>
                {playerDetail.player1.name || "Player 1"}
              </option>
              <option value={playerDetail.player2.name}>
                {playerDetail.player2.name || "Player 2"}
              </option>
            </select>
            <button type="submit" className="submit">
              Play
            </button>
            <button type="button" onClick={handleReset} className="submit">
              Reset
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
const getGridStyle = (size) => ({
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: `repeat(${size}, 1fr)`,
});
export default App;
