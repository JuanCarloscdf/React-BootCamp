import logo from './logo.svg';
import './App.css';

function App() {
  const mensajes = 'hola mundos'
  return (
    <div className="App">
      <h1>{mensajes + ' dasdasda'}</h1><br/>
      {+new Date()}
      
    </div>
  );
}

export default App;
