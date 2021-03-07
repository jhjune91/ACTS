//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Subject from './components/page1';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './routes/Home';
/*
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
    </div>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ACTS</h1>
        <Subject title="Hello Web" sub="links"> </Subject>
      </div>
    );
  }
}
*/

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Home}/>
      </div>
    </Router>
  );
};

export default App;
