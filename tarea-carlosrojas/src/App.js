import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">React vs React Native</h1>
        <p className="lead">
          React y React Native son dos tecnologías desarrolladas por Facebook, utilizadas para crear interfaces de usuario. Aunque comparten muchas similitudes, están diseñadas para propósitos diferentes.
        </p>
        
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <h2>React</h2>
              <p>
                React es una biblioteca de JavaScript que se utiliza principalmente para el desarrollo de aplicaciones web. Su objetivo es facilitar la creación de interfaces de usuario en aplicaciones de una sola página (SPA) mediante el uso de componentes reutilizables y el DOM virtual para mejorar el rendimiento.
              </p>
              <ul>
                <li>Es ideal para aplicaciones web.</li>
                <li>Utiliza HTML, CSS y JavaScript.</li>
                <li>Trabaja con el DOM (Document Object Model) del navegador.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2>React Native</h2>
              <p>
                React Native es un marco de trabajo basado en React que permite crear aplicaciones móviles nativas para iOS y Android usando JavaScript y componentes propios. En lugar de utilizar HTML, React Native usa componentes nativos y accede a la API de cada plataforma.
              </p>
              <ul>
                <li>Está enfocado en el desarrollo móvil.</li>
                <li>Usa componentes nativos en lugar de HTML.</li>
                <li>Permite el desarrollo multiplataforma (iOS y Android).</li>
              </ul>
            </div>
          </div>

          <footer className="mt-5">
            <p className="text-muted">
              Para más información, visita la documentación oficial de <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> y <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer">React Native</a>.
            </p>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;