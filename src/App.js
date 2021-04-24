import logo from './logo.svg';
import './App.css';
var tuPutaMadre = 'Esteban'
var numeroTermo = 33

function mostrarPorPantalla(nombre, numeroTermo){
  var returneo =  
        <div> 
          <h2> <p>Hola, soy {nombre}, pelotas de </p> </h2>
          <h1> cabeza de termo {numeroTermo} </h1>
        </div>
  return returneo
}

function App() {
  var prueba = <h2> xD </h2>
  return (
    <div className="App">
      <header className="App-header">
     
      { mostrarPorPantalla(tuPutaMadre, numeroTermo) }

      </header>
    </div>
  );
}

export default App;
