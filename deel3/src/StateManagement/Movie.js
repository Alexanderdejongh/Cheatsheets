import React from 'react'

function Movie(props) {
    console.log(props)
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default Movie
