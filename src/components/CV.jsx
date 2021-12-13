import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CVfoto from '../CV.png';
import CVpdf from '../CV.pdf'

function CV() {
    return (
    <div>
        <div class="fondoSubtitulo"> 
            <div class="subtitulo" >
                <h1 class="display-4">CV</h1>
            </div>
        </div>
        <div class='espacio'></div>
        <div class='fondoSubtitulo'>
            <img src={CVfoto} class='CVfoto'></img>
            <div class='display-6'><a href={CVpdf} download="CV Agustin Cuevas"> Descargar Archivo </a></div>
        </div>  
        <div class='espacio' id='contacto'></div>
    </div>
    )
}

export default CV;
