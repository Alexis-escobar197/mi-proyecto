import './App.css'
import Introduccion from './introduccion';
import Cuadrado from './Cuadrado';
import Rectangulo from './Rectangulo';
import Circulo from './Circulo';
import Triangulo from './Triangulo';
import Poligono from './Poligono';
import Footer from './Footer';

function App() {
  return (
    <>
      <div>
        <h1>Área de figuras geométricas</h1>
        <Introduccion />
        <Cuadrado />
        <Rectangulo />
        <Circulo />
        <Triangulo />
        <Poligono />
        <Footer />
      </div>
    </>
  )
}

export default App
