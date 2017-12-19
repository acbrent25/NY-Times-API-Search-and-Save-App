import React, { Component } from 'react';
import Articles from './pages/Articles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Articles />
      </div>
    );
  }
}

export default App;
