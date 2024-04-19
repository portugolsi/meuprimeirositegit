import React from "react";
import './styles/card.css'

export default function Card(props){
    return(
        <div className="card" >            
            <div className="foto">

                <img id="foto" src={props.image} ></img>

            </div>

            <div className="atributos">
                <h3 id="nome-personagem">{props.name}</h3>
                <div id="status">
                    <span id="bolinha"></span> <span id="status">{props.status}</span> - <span id="especie">{props.species}</span>
                </div>
                <p id="ultimo-local" >Last known location:</p>
                <a href="#" id="local" >{props.location.name}</a >
                <p id="primeiro-local">First seen in:</p>
                <a href="#" id="local" >{props.episode[0]}</a>
            </div>
        </div>
    )
}
