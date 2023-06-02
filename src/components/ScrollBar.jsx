import React from 'react';
import './ScrollBar.css';
import MovieContainer from './MovieContainer';
import Movie from './Movie';

const ScrollBar = () => {
  return (
    <div className="scroll-container">
      <div className='peliculas'>
        <Movie/>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
      
    </div>
  );
};

export default ScrollBar;
