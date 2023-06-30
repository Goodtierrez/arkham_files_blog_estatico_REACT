import React from "react";
import "../hojasDeEstilo/Juego.css"

const Juego = ({nombre,año, descripcionCorta, descripcionLarga, imagen}) =>{


    return(
        <div className="contenedor-juego">
            <img 
                className="imagen-juego"
                src={require(`../imagenes/${imagen}.jpg`)}
                alt="portada arkham horror 3"
            />
            <div className="contenedor-texto-juego">
                <p className="nombre-juego-año">{nombre} {año}</p>
                <p className="descripcion-corta">{descripcionCorta} </p>
                <p className="descripcion-larga">"{descripcionLarga}"</p>

            </div>

        </div>

    )


};

export default Juego;