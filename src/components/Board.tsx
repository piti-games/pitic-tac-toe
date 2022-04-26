
import  { useState } from "react";
import * as React from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);


  const handleClick = (i: number) => {
    const squaresAux: string[] = squares.slice();
    if (calculateWinner(squaresAux) || squaresAux[i]) {
      return;
    }
    squaresAux[i] = xIsNext ? "X" : "O";
    setSquares(squaresAux)
    setXisNext(!xIsNext)

  };

  const renderSquare = (i:number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner: string | null = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}



function calculateWinner(squares: string[]) {
  const lines: Array<number[]> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;