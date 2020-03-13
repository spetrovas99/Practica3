import React from "react";
import Characters from "./Character";
import Estrella from "./Estrella";
const film = (props) =>{
        return(
            <div className = "Film"  onClick= {props.clickPeli.bind(this, props.nombre)}>
                <img className="imagePeli" src={props.image}/>
                <h3>{props.nombre}</h3>  
                Episode: {props.id} 
                  
                <Estrella mediaEstrellas={props.mediaEstrellas}></Estrella>
                
            </div>
        )    
}


export default film;