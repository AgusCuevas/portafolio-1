import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import materiasFoto from '../materias.png';

function carrera() {
    return (
    <div>
        <div class="fondoSubtitulo"> 
            <div class="subtitulo" >
                <h1 class="display-4">Carrera</h1>
            </div>
        </div>
        <div class='espacio'></div>
        <div class='display-6'> Tecnicatura universitaria en informatica</div>
        <div class='espacio'></div>
        <div class='display-6'> Año de la carrera: 3ro</div>
        <div class='espacio'></div>
        <div class='fondoSubtitulo'>
            <div class='display-6'> Materias aprobadas:</div>
            <img src={materiasFoto} class='materias'></img>
        </div>  
        <div class='espacio' id='conocimiento'></div>
    </div>
    )
}

export default carrera;
