import React, { useEffect, useState } from 'react';
import { MovieMain } from './components/MovieMain'
import { TopCastContainer } from './components/TopCastContainer'
import { BookingButton } from './components/BookingButton'
import './App.css'
import { BarraBusqueda } from './components/BarraBusqueda';
import MenuMovie from './components/MenuMovie';
import MoviesScreen from './components/MoviesScreen';
import ScrollBar from './components/ScrollBar';
import { getMovies } from './services/movies';
import { getMovieDBCategories } from './services/themoviedb';

function App() {
  const [peliculas, setMovies] = useState([]);
  const [categories, setMoviesCat] = useState([]);

  useEffect(() => {
    getMovieDBCategories("now_playing").then((data)=> setMoviesCat(data.results))
  }, []);
  useEffect(() => {
    getMovies("The X Files").then((data)=> setMovies(data))
  }, []);

  /* useEffect(() => {
    getMovieDB("tt0120902").then((data)=> setMovies(data))
  }, []); */
  
  return (
    <div className="App">
      {/* <MovieMain peliculas={peliculas} />
      <TopCastContainer />
      <BookingButton/> */}
      <MoviesScreen categories={categories} />
    </div>
  )
}

export default App
