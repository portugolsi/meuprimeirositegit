import React from "react";
import './styles/card.css'

export default function Card(){
    return(
        <div className="card" >            
            <div className="foto">

                <img id="foto" src="https://rickandmortyapi.com/api/character/avatar/65.jpeg" ></img>

            </div>

            <div className="atributos">
                <h3>Chris</h3>
                <div id="status">
                    <span id="bolinha"></span> <span id="status">Alive</span> - <span id="especie">Humanoid</span>
                </div>
                Last known location:
                Rick's Battery Microverse
                First seen in:
                The Ricks Must Be Crazy
            </div>
        </div>
    )
}
