import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function barraNavegacion() {
    return (
        <div>
            <div class='menu'>
                <li><a href='#fotoPerfil'>Inicio</a></li>
                <li><a href='#presentacion'>Sobre mi</a></li>
                <li><a href='#estudio'>Estudios</a></li>
                <li><a href='#carrera'>Carrera</a></li>
                <li><a href='#conocimiento'>Conocimietos</a></li>
                <li><a href='#CV'>CV</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </div>
        </div>       
    )
}

export default barraNavegacion;
