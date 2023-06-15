import React, { useEffect, useState } from 'react';
import "./MovieContainer.css";
import Movie from "./Movie";
import ScrollBar from "./ScrollBar";
const MovieContainer = ({categories}) => {

  return (
    <div className="movie-container">
      <h5 className="category">Latest</h5>
      <div className="movies-category">
        <ScrollBar categories={categories}/>
      </div>
    </div>
  );
};

export default MovieContainer;
