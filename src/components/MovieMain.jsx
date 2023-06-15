import React, { useEffect, useState } from 'react';
import Genre from './Genre'
import './MovieMain.css'

export const MovieMain = ({peliculas}) => {
  
  return (
    <div className='movie-main-container' >
        <img src={peliculas.Poster} alt="" />
        <Genre peliculas={peliculas} />
        <span>
            {peliculas.Plot}
        </span>
    </div>
  )
}

