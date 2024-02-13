import logo from './logo.svg';
import './App.css';

function Button() {
  return (
      <button className="Button">Botoncillo</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is my first react application</h1>
        <Button />
      </header>
    </div>
  );
}

export default App;
