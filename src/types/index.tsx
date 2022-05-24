import { MouseEventHandler } from "react";

export type SquareProps = {
    onClick: MouseEventHandler,
    value: string,
  }
  
export type PitiProps ={
  winner: String,
  newGame: MouseEventHandler,
}