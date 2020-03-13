import React from "react";
import Character from "./Character"

const allCharacters = (props) =>{
    return(
        <div className = "App">
            {props.peliSelect.characters.map(character =>{
                return(
                        <div >
                           <Character todo= {character}></Character>
                        </div>
                    );
            })}  
        </div>
    )
}

export default allCharacters;