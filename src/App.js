import React, { Component } from 'react';
import './App.css';
import { HomeScene } from './scenes/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomeScene/>
      </div>
    );
  }
}

export default App;
