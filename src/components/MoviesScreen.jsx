import React from 'react'
import { BarraBusqueda } from './BarraBusqueda'
import "./MoviesScreen.css"
import MenuMovie from './MenuMovie'
import ScrollBar from './ScrollBar'
import MovieContainer from './MovieContainer'

const MoviesScreen = () => {
  return (
    <div className='movie-screen'>
        <BarraBusqueda/>
        <MovieContainer />
        <MovieContainer />
        <MovieContainer />
        <MovieContainer />
        <MovieContainer />
        <MenuMovie/>
    </div>
  )
}

export default MoviesScreen