import React from 'react';
import './App.css';

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Search from './Components/Search'
import Statistic from './Components/Statistic'
import Starter from './Components/Starter'
import Footer from './Components/Footer'


const App = props => {
  return (
    <div className="mobile-box">
      <Navbar/>
      <Hero/>
      <div className="sub-container">
        <Search/>
        <Statistic/>
      </div>
      <Starter/>
      <Footer/>
    </div>
  )
}


export default App

