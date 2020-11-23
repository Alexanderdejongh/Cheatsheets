import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name: 'From Paris with Love',
            price: "€10",
            id:24682
        },
        {
            name: 'Taken',
            price: "€10",
            id:28622
        },
        {
            name: 'Taken 2',
            price: "€10",
            id:286224
        },
        {
            name: 'incredebles',
            price: "€10",
            id:2862242
        },
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}


