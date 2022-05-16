import logo from './logo.svg';
import './App.css';
import HelloClass from './Hello-class';
import HelloFunc from './hello-func';
import FormState from './form-state'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloClass />
      <HelloFunc />
      <FormState />
    </div>
  );
}

export default App;
