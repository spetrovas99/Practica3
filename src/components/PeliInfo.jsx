import React from "react";
import AllCharacters from "./AllCharacters";
import Estrella from "./Estrella";

const peliInfo = (props) =>{
    return(
        <div className = "PeliInfo">
                        <div>
                            <h3>  {props.peliSelect.title}</h3>
                            <div className="Characters">
                                <img className="imagePeliMax" src={props.peliSelect.image}/>
                                <div >
                                <p><b>Episode:</b>{props.peliSelect.episode_id}</p> 
                                    <p><b>Director:</b>{props.peliSelect.director}</p>
                                    <p><b>Release:</b>{props.peliSelect.release_date}</p>
                                    <p><b>Begining:</b>{props.peliSelect.opening_crawl}</p>
                                </div>
                            </div>
                            
                            <AllCharacters peliSelect = {props.peliSelect}>
                            </AllCharacters>
                            <Estrella className="Estrellas" mediaEstrellas={props.mediaEstrellas} estrella={props.estrella}></Estrella>
                            <div>{props.n}</div>
                        </div>
                    
        </div>
    )
}

export default peliInfo;