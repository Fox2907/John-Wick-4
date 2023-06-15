import React from 'react'
import { BarraBusqueda } from './BarraBusqueda'
import "./MoviesScreen.css"
import MenuMovie from './MenuMovie'
import ScrollBar from './ScrollBar'
import MovieContainer from './MovieContainer'

const MoviesScreen = ({categories}) => {
  return (
    <div className='movie-screen'>
        <BarraBusqueda/>
        <MovieContainer categories={categories} />
        <MovieContainer categories={categories} />
        <MovieContainer categories={categories} />
        <MenuMovie/>
    </div>
  )
}

export default MoviesScreen