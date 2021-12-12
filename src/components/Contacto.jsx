import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function introduccion() {
    return (
    <div>
        <div class="fondoSubtitulo"> 
            <div class="subtitulo" >
                <h1 class="display-6">Contacto</h1>
            </div>
        </div>
        <div class='fondoSubtitulo'>
            <div class="row">
                <div class='espacio'></div>
                <div class="col"><a href='https://www.instagram.com/agusstin.cuevas/'> <img src='https://cdn-icons-png.flaticon.com/512/174/174855.png' class='imagenContacto'/> </a> </div>
                <div class="col"><a href='https://github.com/AgusCuevas'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' class='imagenContacto'/> </a></div>
                <div class="col"><a href='https://www.linkedin.com/in/agustin-cuevas-b5287b1a0/'><img src='https://cdn-icons-png.flaticon.com/512/145/145807.png' class='imagenContacto'/> </a></div>
                <div class="col"><a href='mailto:cuevasagustin168@gmail.com'><img src='https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png' class='imagenContacto'/> </a></div>
                <div class="col"><a href='https://api.whatsapp.com/send?phone=1140667933'><img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' class='imagenContacto'/> </a></div>
                <div class='espacio'></div>
            </div>
        </div>  
    </div>
    )
}

export default introduccion;
