import React from 'react';
import './ScrollBar.css';
import MovieContainer from './MovieContainer';
import Movie from './Movie';

const ScrollBar = ({categories}) => {
  return (
    <div className="scroll-container">
      <div className='peliculas'>
        {
          categories.map((categoria)=>{
            return <Movie categoria={categoria}/> 
          })
        }
      </div>
      
    </div>
  );
};

export default ScrollBar;
