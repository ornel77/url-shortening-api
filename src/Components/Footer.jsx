import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'


const Footer = props => {
    return (
        <footer>
            <div className="container">
                <div className="footer-flex">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className="links links-1">
                        <li className="heading">Features</li>
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                    <ul className="links links-2">
                        <li className="heading">Resources</li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    <ul className="links links-3">
                        <li className="heading">Company</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="socials">
                        <a href="#"><img src={facebook} alt="facebook"/></a>
                        <a href="#"><img src={twitter} alt="twitter"/></a>
                        <a href="#"><img src={pinterest} alt="pinterest"/></a>
                        <a href="#"><img src={instagram} alt="instagram"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
