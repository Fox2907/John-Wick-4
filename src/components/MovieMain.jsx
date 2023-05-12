import React from 'react'
import movies from '../assets/pelicula.json'
import Genre from './Genre'
import './MovieMain.css'

export const MovieMain = () => {
  return (
    <div className='movie-main-container' >
        <img src={movies.imgsrc} alt=""/>
        <Genre movies = {movies}/>
        <span>
            {movies.plot}
        </span>
    </div>
  )
}

