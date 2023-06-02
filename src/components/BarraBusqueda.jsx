import React from 'react'
import './BarraBusqueda.css'
import Busqueda from "../icons/search_icon.svg"

export const BarraBusqueda = () => {
  return (
    <div className='barra-busqueda-container'>
      <div className="barra-busqueda">
        <img src={Busqueda} alt="" />
        <h5>Search Movie</h5>
      </div>
        
    </div>
  )
}
