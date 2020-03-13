
import React from 'react';

const estrella = (props) => {
    return (
        <div className="Estrellas">
            <img className="Estrella" src={"https://image.flaticon.com/icons/svg/54/54583.svg"} n="Estrella" onClick={props.estrella ? props.estrella.bind(this, 1) : null}/>
            <img className="Estrella" src={"https://image.flaticon.com/icons/svg/54/54583.svg"} n="Estrella" onClick={props.estrella ? props.estrella.bind(this, 2) : null}/> 
            <img className="Estrella" src={"https://image.flaticon.com/icons/svg/54/54583.svg"} n="Estrella" onClick={props.estrella ? props.estrella.bind(this, 3) : null}/> 
            <img className="Estrella" src={"https://image.flaticon.com/icons/svg/54/54583.svg"} n="Estrella" onClick={props.estrella ? props.estrella.bind(this, 4) : null}/> 
            <img className="Estrella" src={"https://image.flaticon.com/icons/svg/54/54583.svg"} n="Estrella" onClick={props.estrella ? props.estrella.bind(this, 5) : null}/>  
        </div>
    );
};
export default estrella;


