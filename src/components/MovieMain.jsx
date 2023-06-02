import React, { useEffect, useState } from 'react';
import Genre from './Genre'
import './MovieMain.css'

export const MovieMain = ({peliculas}) => {
  
  return (
    <div className='movie-main-container' >
        <img src={"https://image.tmdb.org/t/p/w500"+peliculas.poster_path} alt="" />
        <Genre peliculas={peliculas} />
        <span>
            {peliculas.overview}
        </span>
    </div>
  )
}

