import React from 'react'
import MovieCard from "./MovieCard"
import styles from "./MovieList.module.css"
function MovieList({data }) {
    const {movieApiResponse ,  error , isError} = data;
    // console.log(movieApiResponse)
    if(isError){
        return (<h1>{error}</h1>)
    }
    if(movieApiResponse && movieApiResponse.Response == "False"){
        
        return <h1>{movieApiResponse.Error || "No result found"}</h1>
    }
    const arr = movieApiResponse.Search
  return (
    <div className={`${styles.moviesList} container`}>
        {/* movie list */}
        {arr.map((movie)=>{
            return (

                // <p key={movie.imdbID}>{movie.Title}</p>
                <MovieCard key={movie.imdbID} {...movie}/>
            )
        })}
    </div>
  )
}

export default MovieList