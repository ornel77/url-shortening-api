import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import InputURL from './Components/InputURL'


const App = props => {
  return (
    <div className="mobile-box">
      <Navbar/>
      <Hero/>
      <InputURL/>
    </div>
  )
}


export default App

