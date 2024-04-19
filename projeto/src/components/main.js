import React , { useState, useEffect } from "react";
import './styles/main.css'
import Card from "./card";



export default function Main(){
    const [personagem,setPersoagem] = useState([]);

    // Começa a página, é feita uma nova requisição
    useEffect(() => {
        fetchPersonagens();  
      }, []);
    
    const fetchPersonagens = async () => {
        try {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          const data = await response.json();
          console.log(data)
        } catch (error) {
          console.error('Erro ao buscar Personagens:', error);
          
        }
      };


    return (
        <div className="main" >

            <div className="row-main" >
                
               
            </div>
        </div>
    )
}