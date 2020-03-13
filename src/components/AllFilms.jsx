import React from "react";
import Film from "./Film";
import Estrella from "./Estrella";
const allFilms = (props) =>{
return(
    <div className = "AllFilms">
        {props.data.map(film =>{
               return(
                    <div>
                       <Film image = {film.image} nombre = {film.title} id={film.episode_id} clickPeli = {props.clickPeli}></Film>
                       
                    </div>
                );
        })}  
    </div>
    )
}

export default allFilms;