import React, { Component } from 'react'
import logo from '../images/logo.svg'


class Navbar extends Component {
    handleClick() {
        document.body.classList.toggle('show-nav')
    }

    render() {
        return (
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <button className="hamburger" onClick={this.handleClick} >
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
                            <li><button href="#" className="btn">Sign Up</button></li>
                        </ul>
                    </div>
                </nav>
            </div >
        )
    }
}


export default Navbar
