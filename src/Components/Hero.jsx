import React from 'react'
import illustration from '../images/illustration-working.svg'



const Hero = props => {
    return (
        <div className="container">
            <section className="hero">
                <div className="hero-content">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                    <a href="#" className="btn">Get Started</a>
                </div>
                <div className="illustration">
                    <img src={illustration} alt="illustration" />
                </div>
            </section>
        </div>
    )
}

export default Hero
