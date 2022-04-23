import React from "react";
import hueso from "./assets/hueso.png";
import gominola from "./assets/gominola.png";
import logo from "./assets/logo.svg";

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

function Square(props) {
  const emptyState = props.value === null;

  let iconName =
    props.value === "X" ? hueso : props.value === "O" ? gominola : logo;

  return (
    /* {
       gameEnd && <Piti>
       gameEnd ? <Piti props={props}/> : <Board></Board>
      } */
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
