import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

function Nav() {
    const [movies, setMovies] = useContext(MovieContext)
        console.log(movies)
    return (
        <div>
            <h3>Alexander</h3>
            <p>list of Movies:{movies.length}</p>
        </div>
    )
}

export default Nav
