import * as React from "react";
import * as ReactDOM from "react-dom";
import  { useState } from "react";
import "./styles/index.css";
import Board from "./components/Board";
import Piti from "./components/Piti"
import { PitiProps } from "./types";

// añadir typescript tsx ✅
// GANADOR COMPONENT (piti si , tablero)
// jugar de nuevo funcionalidad
// Guardar partidas (guardar juegos)

/* function GameBoard(currentSquares, i){
return   <Board
squares={currentSquares}
onClick={(i) => this.handleClick(i)}
/>
} */

function WinnerGreting(props: PitiProps){
/* return <Piti config={props} ></Piti>  */
return <Piti winner={props.winner} newGame={props.newGame} ></Piti>
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


function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(calculateWinner(squares))

  const handleClick = (i: number) => {
    const squaresAux: string[] = squares.slice();
    if (squaresAux[i]) {
      return;
    }
    setWinner(calculateWinner(squares));
    
    squaresAux[i] = xIsNext ? "X" : "O";
    setSquares(squaresAux)
    setXisNext(!xIsNext)
  };

 // let winner: string | null = calculateWinner(squares);
  const newGame =()=>{
    console.log('winner');
    
   setWinner(null);
   setSquares(Array(9).fill(null));
  }

    return (
      <div className='game'>
        <div className='game-board'>
        <h1>PITIC-TAC-TOE</h1>
        { winner ? WinnerGreting({winner, newGame}) : 
        <Board squares={squares} onClick={(i:number) => handleClick(i)} />}
     
        </div>
        <div className='game-info'>
          <div>{ /* status  */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
