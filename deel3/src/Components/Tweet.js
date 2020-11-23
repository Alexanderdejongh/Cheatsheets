import React from 'react'

function Tweet(props) {
    return (
        <div className="tweet">
            <h1>{props.name}</h1>
            <p>{props.tweet}</p>
        </div>
    )
}

export default Tweet
