import * as React from "react";
import piti from "../assets/piti.png";
import { PitiProps } from "../types";

/* {
    style: xs,
    props:{
        winner,
        gameEnd
    }
} */



 function Piti( {winner, newGame}: PitiProps){ 

  // function Piti(configProps){ //crear nueva interfaz

    return(
        <div className="piti-component">
            <div className="piti-component__data">
            <h1 className="piti-component__title">Felicidaces!</h1>
            <p>The winner is : {winner}</p>
            <button onClick={newGame}>Jugar de nuevo</button>
            </div>
            <div  className="piti-component__piti-wrapper">
                <img
                src={piti}
                alt='icon'
                className="piti-component__piti"
            />
        </div>
      </div>
    )
}

export default Piti;