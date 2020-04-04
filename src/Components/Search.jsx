import React, { Component } from 'react'
import SearchItem from './SearchItem';

const liObject = [
    {
        originUrl: 'http://facebook.com',
        shortenUrl: 'http://rel.fgdfg',
        copy: false
    },
    {
        originUrl: 'http://instagram.com',
        shortenUrl: 'http://rel123dfg',
        copy: false
    },
    {
        originUrl: 'http://pinterest.com',
        shortenUrl: 'http://relaze12345zaa.g',
        copy: false
    },
]

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: null,
            input: '',
            url: '',
            sent: false,
            shortenUrl: ''
        }
    }

    handleChange = e => {
        this.setState({ input: e.target.value })
        // const name = e.target.getAttribute('name')
        // console.log(name);
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ url: this.state.input , sent: true,})

    }

    render() {
        // const items = this.state.list.map((li, i) => {
        //     return (
        //         <SearchItem key={i} url={this.state.url}/>
        //     )
        // });
        return (
            <div className="container">
                <section className="search">
                    <div className="form-content">
                        <form >
                            <label htmlFor="url"></label>
                            <input 
                                type="text" 
                                placeholder="Shorten a link here" className="input-link" 
                                name="result" 
                                value={this.state.originUrl}
                                onChange={this.handleChange}
                            />
                            <button onClick={this.handleSubmit} type="submit" className="shorten">Shorten It!</button>
                        </form>
                        <p className="err-msg">Please add a link</p>
                    </div>
                    <ul className="result-list">
                        {
                            this.state.sent?  <SearchItem url={this.state.url}/> : ''
                        }
                    </ul>
                </section>
            </div>

        )
    }
}

export default Search