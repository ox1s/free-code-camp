import { useState } from "react";

let buttons = Array.from({ length: 9 }, (_, i) => ({
  id: `btn_${i}`,
  value: "ㅤ",
}));

export default function Board() {
  const [player, setPlayer] = useState("X");
  const [boardButtons, setBoardButtons] = useState(buttons);
  const [winner, setWinner] = useState(null);

  const handleReset = () => {
    setPlayer("X");
    setBoardButtons(buttons);
    setWinner(null);
  };

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkNeighborhood(newButtons) {
    for (let combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      const valA = newButtons[a].value;
      const valB = newButtons[b].value;
      const valC = newButtons[c].value;

      if (valA !== "ㅤ" && valA === valB && valA === valC) {
        setWinner(player);
      }
    }
    if (newButtons.every((item) => item.value !== "ㅤ")) setWinner("DRAW");
  }
  const handleChangeState = (id) => {
    if (winner !== null) {
      return;
    }
    setPlayer(player === "X" ? "O" : "X");
    const newButtons = boardButtons.map((button) =>
      button.id === id ? { ...button, value: player } : button,
    );
    setBoardButtons(newButtons);
    checkNeighborhood(newButtons);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {winner === "DRAW" ? (
        <h4>It's a Draw!</h4>
      ) : (
        <h4>
          {winner === null ? `Next Player: ${player}` : `Winner: ${winner}`}
        </h4>
      )}
      <div className="container">
        <div className="board">
          {boardButtons.map((button) => (
            <button
              key={button.id}
              className="square"
              onClick={() => handleChangeState(button.id)}
              disabled={button.value !== "ㅤ"}
            >
              {button.value}
            </button>
          ))}
        </div>
        <button className="reset" id="reset" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
