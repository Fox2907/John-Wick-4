import { Chip } from './Chip'
import './Genre.css'

const Genre = ({peliculas}) => {
  const genre = peliculas.Genre ? peliculas.Genre.split(", ") : [];
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