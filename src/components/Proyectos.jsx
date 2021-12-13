import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function proyectos() {
    return (
    <div>
        <div class="fondoSubtitulo"> 
            <div class="subtitulo" >
                <h1 class="display-4">Proyectos</h1>
            </div>
        </div>
        <div class="espacio"></div>
            <ul class="galeria">    
            <li><a href="#img1"><img src="http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg"/></a></li>
            <li><a href="#img2"><img src="http://neo-deco.es/wp-content/uploads/2013/01/Paisaje-de-monta%C3%B1a.jpg"/></a></li>
            <li><a href="#img3"><img src="http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg"/></a></li>
            <li><a href="#img4"><img src="http://neo-deco.es/wp-content/uploads/2013/01/Paisaje-de-monta%C3%B1a.jpg"/></a></li>
            </ul>

        <div class="modal" id="img1">
            <h3>Paisaje 1</h3>
            <div class="imagen">
                <a href="#img4">&#60;</a>
                <a href="#img2"><img src="http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg"/></a>
                <a href="#img2">&#62;</a>
            </div>
            <a class="cerrar" href="#proyectos">X</a>
        </div>
        
        <div class="modal" id="img2">
            <h3>Paisaje 2</h3>
            <div class="imagen">
                <a href="#img1">&#60;</a>
                <a href="#img3"><img src="http://neo-deco.es/wp-content/uploads/2013/01/Paisaje-de-monta%C3%B1a.jpg"/></a>
                <a href="#img3">&#62;</a>
            </div>
            <a class="cerrar" href="#proyectos">X</a>
        </div>
        
        <div class="modal" id="img3">
            <h3>Paisaje 3</h3>
            <div class="imagen">
                <a href="#img2">&#60;</a>
                <a href="#img4"><img src="http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg"/></a>
                <a href="#img4">&#62;</a>
            </div>
            <a class="cerrar" href="#proyectos">X</a>
        </div>
        
        <div class="modal" id="img4">
            <h3>Paisaje 4</h3>
            <div class="imagen">
                <a href="#img3">&#60;</a>
                <a href="#img1"><img src="http://neo-deco.es/wp-content/uploads/2013/01/Paisaje-de-monta%C3%B1a.jpg"/></a>
                <a href="#img1">&#62;</a>
            </div>
            <a class="cerrar" href="#proyectos">X</a>
        </div>
        
        <div class="espacio" id="CV"></div>
    </div>
    )
}

export default proyectos;