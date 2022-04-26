import * as React from "react";
import piti from "../assets/piti.png";
import { PitiProps } from "../types";


function Piti( props: PitiProps){

    let winner = props.winner
    return(
        <div className="piti-component">
            <div className="piti-component__data">
            <h1 className="piti-component__title">Felicidaces!</h1>
            <p> The winner is :{winner}</p>ç
            <button>Jugar de nuevo</button>
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