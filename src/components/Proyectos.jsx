import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import climaApp from '../Clima app.jpeg'
import EquiposDeFutbol from '../Equipos de futbol.png'
import MercaditoLibre from '../mercadito libre.png'

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
            <li><a href="#img1"><img src={EquiposDeFutbol}/></a></li>
            <li><a href="#img2"><img src={climaApp}/></a></li>
            <li><a href="#img3"><img src={MercaditoLibre}/></a></li>
            </ul>

        <div class="modal" id="img1">
            <h3>Equipos de futbol</h3>
            <div class="imagen">
                <a href="#img3">&#60;</a>
                <a href="#img1"><img src={EquiposDeFutbol} class='imgModal'/></a>
                <a href="#img2">&#62;</a>
                <div class='descripcion'>
                    Esta aplicacion nos muestra equipos de futbol de todo el mundo, al azar, con su logo, nombre y jugadores.
                    <div><a class='letraFoto' href="https://optimistic-brahmagupta-04bf73.netlify.app"><img class='clickAqui' src="https://www.dentegra.com.mx/wp-content/uploads/2018/12/boton-click-aqui.png"></img></a></div>
                    <div><a href="#proyectos"><img class='imgCerrar' src='https://www.freeiconspng.com/thumbs/close-button-png/black-circle-close-button-png-5.png'/></a></div>
                </div>
                
            </div>
        </div>
        
        <div class="modal" id="img2">
            <h3>Clima App</h3>
            <div class="imagen">
                <a href="#img1">&#60;</a>
                <a href="#img2"><img src={climaApp} class='imgModal'/></a>
                <a href="#img3">&#62;</a>
                <div class='descripcion'>
                    En esta aplicacion podemos ver como esta el clima en cualquier lugar del mundo. 
                    <div><a class='letraFoto' href="https://gifted-curran-285740.netlify.app/"><img class='clickAqui' src="https://www.dentegra.com.mx/wp-content/uploads/2018/12/boton-click-aqui.png"></img></a></div>
                    <div><a href="#proyectos"><img class='imgCerrar' src='https://www.freeiconspng.com/thumbs/close-button-png/black-circle-close-button-png-5.png'/></a></div>
                </div>
            </div>
        </div>
        
        <div class="modal" id="img3">
            <h3>Mercadito Libre</h3>
            <div class="imagen">
                <a href="#img2">&#60;</a>
                <a href="#img3"><img src={MercaditoLibre} class='imgModal'/></a>
                <a href="#img1">&#62;</a>
                <div class='descripcion'>
                    Con esta aplicacion podemos buscar productos por su nombre y agregarlos al carrito. Tambien podemos eliminar los productos del carrito
                    <div><a class='letraFoto' href="https://vibrant-curie-4be795.netlify.app"><img class='clickAqui' src="https://www.dentegra.com.mx/wp-content/uploads/2018/12/boton-click-aqui.png"></img></a></div>
                    <div><a href="#proyectos"><img class='imgCerrar' src='https://www.freeiconspng.com/thumbs/close-button-png/black-circle-close-button-png-5.png'/></a></div>
                </div>
            </div>
        </div>
        
        <div class="espacio" id="CV"></div>
    </div>
    )
}

export default proyectos;