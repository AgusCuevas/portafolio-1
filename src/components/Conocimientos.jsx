import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function conocientos() {
    return (
        <div>
            <div class="fondoSubtitulo"> 
                <div class="subtitulo">
                    <h1 class="display-4">Conocimientos</h1>
                </div>
            </div>
            <div class='espacio'></div>
            <div class='fondoSubtitulo tabla'>
                <div class="row display-6">
                    <div class="col border border-info conocimientos "><img src='http://www.buscaminegocio.com/img/programacion-orientada-a-objetos.png' class='imagenConocimiento'/> Programacion Orientada a Objetos</div>
                    <div class="col border border-info conocimientos "><img src='https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png' class='imagenConocimiento'/> Estructura de datos</div>
                </div>
                <div class='row display-6'>
                    <div class="col border border-info conocimientos "><img src='https://w7.pngwing.com/pngs/108/671/png-transparent-database-administrator-computer-icons-others-orange-logo-data.png' class='imagenConocimiento'/> Base de datos</div>
                    <div class="col border border-info conocimientos "><img src='https://e7.pngegg.com/pngimages/482/922/png-clipart-application-programming-interface-logo-computer-programming-api-icon-text-logo.png' class='imagenConocimiento'/>APIs</div>
                </div>
                <div class='row display-6'>
                    <div class="col border border-info conocimientos "><img src='https://previews.123rf.com/images/lefttime/lefttime1711/lefttime171100027/89092883-redes-de-computadoras-globo-terr%C3%A1queo-concepto-de-world-wide-web-ilustraci%C3%B3n-vectorial.jpg' class='imagenConocimiento'/>Redes de computadoras</div>
                    <div class="col border border-info conocimientos "><img src='https://www.cognodata.com/wp-content/uploads/2019/04/Screenshot-2019-07-18-at-13.37.37-min.png' class='imagenConocimiento'/>Metodologias Agiles</div>
                </div>
                <div class='row display-6'>
                    <div class="col border border-info conocimientos "><img src='https://www.alexmedina.net/wp-content/uploads/2019/12/javascript.png' class='imagenConocimiento'/>Javascript</div>
                    <div class="col border border-info conocimientos "><img src='https://www.techfor.id/wp-content/uploads/2019/12/html.png' class='imagenConocimiento'/> HTML</div>
                </div>
                <div class='row display-6'>
                    <div class="col border border-info conocimientos "><img src='https://cms-assets.tutsplus.com/uploads/users/1499/posts/29328/preview_image/kotlin.jpg' class='imagenConocimiento'/> Kotlin</div>
                    <div class="col border border-info conocimientos "><img src='https://okhosting.com/resources/uploads/2019/01/java.jpg' class='imagenConocimiento'/> Java</div>
                </div>
                <div class='row display-6'>
                    <div class="col border border-info conocimientos "><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' class='imagenConocimiento'/>Python</div>
                    <div class="col border border-info conocimientos "><img src='https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png' class='imagenConocimiento'/>GitHub</div>
                </div>
                <div class='row display-6'>
                    <div class="col border border-info conocimientos "><img src='https://www.mancomun.gal/wp-content/uploads/2018/09/mariadb_solTic.png' class='imagenConocimiento'/>MariaDB</div>
                    <div class="col border border-info conocimientos "><img src='https://img2.freepng.es/20190302/oti/kisspng-application-programming-interface-computer-icons-a-update-native-postman-on-ubuntu-calliditasblog-5c7b404490d035.8226799515515812525932.jpg' class='imagenConocimiento'/>Postman</div>
                </div>
            </div>
            <div class='espacio' id='proyectos'></div>  
        </div>       
    )
}

export default conocientos;
