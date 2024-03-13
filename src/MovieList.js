import React from 'react';

const MovieList =(props)=>{
    console.log("Movielist props",props)

    return (
        <>
            {props.movies.map((movie)=> (
                <div className=' image-container col d-flex justify-content-start m-3' key={movie.imdbID}>
                <img src={movie.Poster} alt='movie'></img>
                
            </div>
            ))}
        </>
    );
};

export default MovieList;