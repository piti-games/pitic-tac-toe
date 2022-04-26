
import * as React from "react";
import hueso from "../assets/hueso.png";
import gominola from "../assets/gominola.png";
import logo from "../assets/logo.svg";
import { SquareProps } from "../types";


//EJEMPLO DE CONPONENTE EN CLASE VS COMPONENTE EN FUNCION
/* class Square extends React.Component {
  render() {
    return (
      <button className='square' onClick={() => this.props.onClick()}>
      {this.props.value}
      </button>
      );
    }
  }
  */

function Square(props: SquareProps) {
  const emptyState:boolean = props.value !== "X" && props.value !== "O";

  let iconName:string =
    props.value === "X" ? hueso : props.value === "O" ? gominola : logo;

  

  return (
    
    <button className='square' onClick={props.onClick}>
      <img
        src={iconName}
        alt='icon'
        className={`square-image ${emptyState ? "square-logo" : ""}`}
      />
    </button>
  );
}

export default Square;
