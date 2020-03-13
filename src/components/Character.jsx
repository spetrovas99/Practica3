import React from "react";

const characters = (props) =>{
return(
    <div>
        <div className = "Characters">
            <img className="imageCharacter" src={props.todo.image}/>
            <div className ="App">
                <div><b>Nombre:</b>  {props.todo.actor}</div>
                <div><b>Actor:</b> {props.todo.name}</div>
             
                
               
            </div>
           
        </div>
        
    </div>
)
}

export default characters;