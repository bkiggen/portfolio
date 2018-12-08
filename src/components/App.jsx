import React, { Component } from 'react';
import './App.css';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import hand from '../assets/hands L4.png';



class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="App--construction">This site is under construction...</h1>
        <img className="hand" src={hand}/>
      </div>
    );
  }
}


export default App;
