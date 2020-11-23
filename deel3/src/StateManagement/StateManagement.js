import React, {useContext} from 'react'
import Movielist from "./Movielist"
import Nav from "./Nav"
import { MovieProvider, MovieContext } from './MovieContext'

function StateManagement() {
    // const [movies, setMovies] = useContext(MovieContext)

    return (
        <MovieProvider>
            <Nav />
            <Movielist />
        </MovieProvider>
    )
}

export default StateManagement
