import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Introduccion from './components/Introduccion'
import Contacto from './components/Contacto'
import Estudio from './components/Estudio'
import Conocimientos from './components/Conocimientos'
import BarraNavegacion from './components/BarraNavegacion'
import BarraNavegacionFija from './components/BarraNavegacionFija'
import Proyectos from './components/Proyectos'
import CV from './components/CV'
import Carrera from './components/Carrera'
import './App.css'

function App() {
  return (
    <div class="fondoSubtitulo">
      <div>
        <BarraNavegacionFija/>
      </div>
      <div>
        <BarraNavegacion/>
      </div>
      <div class='row'>
        <Introduccion/>
      </div>
      <div class='row'>
        <Estudio/>
      </div>
      <div class='row'>
        <Carrera/>
      </div>
      <div class='row'>
        <Conocimientos/>
      </div>
      <div class="row">
        <Proyectos/>
      </div>
      <div class='row'>
        <CV/>
      </div>
      <div class='row'>
        <Contacto/>
      </div>
    </div>
  );
}

export default App;
