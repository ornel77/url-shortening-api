import React from 'react'
import logo from '../images/logo.svg'

const Navbar = props => {
    return (
        <div className="container">
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <button className="hamburger">
                    <i className="fas fa-bars fa-2x"></i>
                </button>
                <div className="navbar">
                    <ul className="navlist">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                    <ul className="login">
                        <li><a href="#">Login</a></li>
                        <li><a href="#" className="btn">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}


export default Navbar
