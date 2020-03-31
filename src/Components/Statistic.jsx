import React from 'react'

import brand from '../images/icon-brand-recognition.svg'
import detailed from '../images/icon-detailed-records.svg'
import custom from '../images/icon-fully-customizable.svg'

const Statistic = props => {
    return (

        <section className="statistic">
            <div className="container">
                <header className="heading">
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
                </header>
                <div className="stat-grid">
                    <div className="stat-item">
                        <img src={brand} alt="brand" className="icon" />
                        <h3>Brand Recognition</h3>
                        <p>
                            Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.
                        </p>
                    </div>
                    <div className="stat-item">
                        <img src={detailed} alt="brand" className="icon" />
                        <h3>Detailed Records</h3>
                        <p>
                            Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.
                        </p>
                    </div>
                    <div className="stat-item">
                        <img src={custom} alt="brand" className="icon" />
                        <h3>Fully Customizable</h3>
                        <p>
                            Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Statistic
