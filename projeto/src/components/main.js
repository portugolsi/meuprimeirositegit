import React from "react";
import './styles/main.css'
import Card from "./card";

export default function Main(){
    return (
        <div className="main" >

            <div className="row-main" >
                
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>
        </div>
    )
}