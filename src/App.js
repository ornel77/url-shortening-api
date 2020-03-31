import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


const App = props => {
  return (
    <div className="mobile-box">
      <Navbar/>
      <Hero/>
    </div>
  )
}


export default App

