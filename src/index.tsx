import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/index.css";
import Board from "./components/Board";
import Piti from "./components/Piti"
import { PitiProps } from "./types";

// añadir typescript tsx ✅
// GANADOR COMPONENT (piti si , tablero)
// jugar de nuevo funcionalidad
// Guardar partidas (guardar juegos)

function GameBoard(){
return <Board></Board>
}

function WinnerGreting(props: PitiProps){
/* return <Piti props={props} ></Piti> */
return <Piti winner={props.winner} gameEnd={props.gameEnd} ></Piti>
}

function Game() {

  const pitiData: PitiProps =
  { gameEnd: false,
  winner: '0'}

    return (

      /* {
       gameEnd && <Piti>
       gameEnd ? <Piti props={props}/> : <Board></Board>
      } */

      <div className='game'>
        <div className='game-board'>
        <h1>PITIC-TAC-TOE</h1>

      { pitiData.gameEnd ? WinnerGreting(pitiData) : GameBoard()}
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
