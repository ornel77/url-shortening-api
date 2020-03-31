import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import InputURL from './Components/InputURL'
import Statistic from './Components/Statistic'


const App = props => {
  return (
    <div className="mobile-box">
      <Navbar/>
      <Hero/>
      <div className="sub-container">
        <InputURL/>
        <Statistic/>
      </div>
      
    </div>
  )
}


export default App

