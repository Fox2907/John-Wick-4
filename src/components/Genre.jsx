import React from 'react'
import { Chip } from './Chip'
import './Genre.css'

const Genre = ({movies}) => {
  
  const genre = movies.genre
  return (
    <div className='genre-container'>
        {
            genre.map((genero, index)=>{
                return <Chip genero={genero} key={index}/>
            })
        }
        
    </div>
  )
}

export default Genre