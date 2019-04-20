import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Travel from './components/Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="travels-container" id="travels">
          <div className="row">
            <Travel />
            <Travel />
            <Travel />
          </div>
          <div className="row">
            <Travel />
            <Travel />
            <Travel />
          </div>
          <div className="row">
            <Travel />
            <Travel />
            <Travel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
