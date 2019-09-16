import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
