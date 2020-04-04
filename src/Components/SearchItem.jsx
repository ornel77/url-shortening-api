import React from 'react'

const SearchItem = ({url, shortenUrl}) => {
    return (
        <li className="result-item">
                <span className="origin">{url}</span>
                <span className="result">{shortenUrl}</span>
                <button className="copy">Copy</button>
        </li>
    )
}


export default SearchItem
