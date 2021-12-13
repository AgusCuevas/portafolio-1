import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import escuela from '../escuela.png'
import universidad from '../unahur.png'


function introduccion() {
    return (
    <div>
        <div class="fondoSubtitulo"> 
            <div class="subtitulo" >
                <h1 class="display-4">Estudios</h1>
            </div>
        </div>
        <div class='espacio'></div>
        <div class='fondoSubtitulo'>
            <div class="row">
                <div class="col-6">
                    <div class="subtitulo2" >
                        <h1 class="display-6">Secundaria</h1>
                    </div>
                    <div class="display-6">
                        <div class="subtitulo3">
                        <div class='espacio'></div>
                            Instituto Nuestra Senora de Lourdes
                            <div class='espacio'></div>
                            <img src='https://institutolourdes.net/assets/images/logo-lourdes.jpg' class='logo'></img>
                            <div class='espacio'></div>
                            Ubicacion:
                            <div class="col"><a href='https://www.google.com/maps/place/Instituto+Nuestra+Se%C3%B1ora+de+Lourdes/@-34.6036895,-58.6972153,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcbe6172009399:0x1645e0e8a51b66d8!8m2!3d-34.6036939!4d-58.6950266'> <img src={escuela} class='ubicacion'/> </a> </div>
                            <div class='espacio'></div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="subtitulo2">
                        <h1 class="display-6">Universidad</h1>
                    </div>
                    <div class="display-6">
                        <div class="subtitulo3">
                        <div class='espacio'></div>
                            Universidad Nacional de Hurlingham
                            <div class='espacio'></div> 
                            <img src='https://webtest.unahur.edu.ar/wp-content/uploads/2021/03/UNAHUR-1.png' class='logo'></img>
                            <div class='espacio'></div>
                            Ubicacion:
                            <div class="col"><a href='https://www.google.com/maps/place/Universidad+Nacional+de+Hurlingham/@-34.6168674,-58.638284,15z/data=!4m5!3m4!1s0x95bcb8da75c7af63:0x275fa0fbb4f66f49!8m2!3d-34.6165168!4d-58.6344234'> <img src={universidad} class='ubicacion'/> </a> </div>
                            <div class='espacio'></div>
                        </div>
                    </div>
                </div>
                <div class='espacio' id='carrera'></div>
            </div>
        </div>  
    </div>
    )
}

export default introduccion;