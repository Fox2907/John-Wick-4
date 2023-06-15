import React from 'react'
import "./Movie.css"
const Movie = ({categoria}) => {
  return (
    <div className='movie-poster-container'>
        <img src={`https://image.tmdb.org/t/p/w500${categoria.backdrop_path}`} alt="" />
    </div>
  )
}

export default Movie