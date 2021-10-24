import React from "react";
import { Link } from "react-router-dom";
export const Form = () => {
    return (

        <div>
        <form class="formulario">
            <label for="fname">Nombre y Apellido:</label>
            <input class="textoForm"type="text" id="fname" name="fname"></input>
            <label for="ldoc">Documento:</label>
            <input class="textoForm" type="text" id="ldoc" name="ldoc"></input>
            <label for="fubi">Provincia, localidad:</label>
            <input class="textoForm" type="text" id="fubi" name="fubi"></input>
            <label for="lmail">Mail:</label>
            <input class="textoForm" type="text" id="fmarca" name="lmail"></input>
            <label for="lnota">Agregar Nota:</label>
            <input class="textoForm" type="text" id="fnota" name="nota"></input>
        </form>
        <Link to="pantalla-final">
        <button class="button" onclick="addCar()">
            Finalizar Compra
        </button>
        </Link>
        
    </div>
        
    )
}

