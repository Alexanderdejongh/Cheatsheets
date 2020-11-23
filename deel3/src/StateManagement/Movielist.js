import React,{useState, useContext} from 'react'
import Movie from "./Movie"
import {MovieContext} from './MovieContext'

function Movielist() {
    const [movies, setMovies] = useContext(MovieContext)
    console.log(movies)
    return (
        <div >
            {movies.map(movie =>(
                <Movie 
                    key={movie.id}
                    name={movie.name}
                    price={movie.price}
                />
            ))}
        </div>
    )
}

export default Movielist
