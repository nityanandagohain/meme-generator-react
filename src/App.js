import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import MemeGenerator from './components/MemeGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <MemeGenerator/>
      </div>
    );
  }
}

export default App;
