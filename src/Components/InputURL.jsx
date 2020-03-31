import React, { Component } from 'react'

class InputURL extends Component {
    render () {
        return (
            <div className="container">
                <section className="input-url">
                    <div className="form-content">
                        <form>
                            <label htmlFor="url"></label>
                            <input type="text" placeholder="Shorten a link here" className="input-link" />
                            <button type="submit" className="shorten">Shorten It!</button>
                        </form>
                        <p className="err-msg">Please add a link</p>
                    </div>
                    <ul className="result-list">
                        <li className="result-item">
                            <span className="origin">htpp://twitter.com</span>
                            <span className="result">http://shorthghfghffghfgh</span>
                            <button className="copy">Copy</button>
                        </li>
                        <li className="result-item">
                            <span className="origin">htpp://twitter.com</span>
                            <span className="result">http://short</span>
                            <button className="copy">Copy</button>
                        </li>
                        <li className="result-item">
                            <span className="origin">htpp://twitter.com</span>
                            <span className="result">http://short</span>
                            <button className="copy">Copy</button>
                        </li>
                    </ul>
                </section>
            </div>
            
        )
    }
}

export default InputURL