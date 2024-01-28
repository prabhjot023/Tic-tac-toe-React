import React from "react";
import Square from "./Square";
import { useState } from "react";
var count = 0;
export default function Board() {
  const [state, setState] = useState([Array(9).fill(null)]);
  const [xisNext, setXisNext] = useState(true);
  const winner = calculateWinner();

  function handleClick(index) {
    console.log("clicked");

    if (state[index] == "X" || state[index] == "O" || calculateWinner()) {
      return;
    }
    const copyState = [...state];
    copyState[index] = xisNext ? "X" : "O";
    count = count + 1;
    console.log(count);
    setState(copyState);
    setXisNext(!xisNext);
  }

  function resetBoard() {
    count = 0;
    setState(Array(9).fill(null));
    setXisNext(true);
  }
  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winner = "";
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] != null && state[a] == state[b] && state[b] == state[c]) {
        return "Winner is : " + state[a];
      }
    }

    return;
  }
  return (
    <>
      <div>{winner}</div>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square
          onClick={() => {
            handleClick(1);
          }}
          value={state[1]}
        />
        <Square
          onClick={() => {
            handleClick(2);
          }}
          value={state[2]}
        />
      </div>
      <div className="board-row">
        <Square
          onClick={() => {
            handleClick(3);
          }}
          value={state[3]}
        />
        <Square
          onClick={() => {
            handleClick(4);
          }}
          value={state[4]}
        />
        <Square
          onClick={() => {
            handleClick(5);
          }}
          value={state[5]}
        />
      </div>
      <div className="board-row">
        <Square
          onClick={() => {
            handleClick(6);
          }}
          value={state[6]}
        />
        <Square
          onClick={() => {
            handleClick(7);
          }}
          value={state[7]}
        />
        <Square
          onClick={() => {
            handleClick(8);
          }}
          value={state[8]}
        />
      </div>

      {(winner || count === 9) && (
        <div>
          <button className="play" onClick={() => resetBoard()}>
            Play again
          </button>
        </div>
      )}
    </>
  );
}
