import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsListScreen from 'projects/ProjectsListScreen.js'
import MainRouter from 'MainRouter.js'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="background">
        <MainRouter></MainRouter>
      </div>
    </div>
  );
}

export default App;
