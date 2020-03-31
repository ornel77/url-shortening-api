import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import InputURL from './Components/InputURL'
import Statistic from './Components/Statistic'
import Starter from './Components/Starter'
import Footer from './Components/Footer'


const App = props => {
  return (
    <div className="mobile-box">
      <Navbar/>
      <Hero/>
      <div className="sub-container">
        <InputURL/>
        <Statistic/>
      </div>
      <Starter/>
      <Footer/>
    </div>
  )
}


export default App

