import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import foto from '../foto.png'

function introduccion() {
    return (
    <div class="container">

        <div class="row align-items-start" id='letrasIntro' class='intro' id='fondo' >
            <img src={foto} class='fotoPerfil' id='fotoPerfil'/> 
        </div>

        <div class='presentacion'>  
            <div class="fondoPrincipal" class="display-4">
                <div class='espacio'></div>
                <div>Agustin Cuevas</div> 
                <div>Estudiante de sistemas</div> 
                <div class='espacio' id='presentacion'></div>
            </div>
        </div>

        <div class="fondoSubtitulo"> 
            <div class="subtitulo" >
                <h1 class="display-6">Sobre mi</h1>
            </div>

            <div class='objetivo display-6'>
                <div class='espacio'></div>
                <div>
                    Acualmente me encuentro cusarndo la carrera "Tecnicaruta en informatica", en la universidad nacional de Hurlingham.
                    Estoy cursando mi 3er ano de la carrera y me gustaria conseguir mi primer empleo en el mundo de la tecnologia
                </div>
                <div class='espacio' id='estudio'></div>
            </div>
            
        </div>
    </div>
    )
}

export default introduccion;
