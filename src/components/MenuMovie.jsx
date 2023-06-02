import React from 'react'
import "./MenuMovie.css"
import Home from "../icons/home_icon.svg"
import Discount from "../icons/discount_icon.svg"
import Favourites from "../icons/favourites_icon.svg"
import Profile from "../icons/profile_user_icon.svg"
import Boton from './Boton'


const MenuMovie = () => {
  return (
    <div className='menu-movie-container'>
        <Boton icono={Home} name_class={"boton-menu"}/>
        <Boton icono={Discount} name_class={"boton-menu"}/>
        <Boton icono={Favourites} name_class={"boton-menu"}/>
        <Boton icono={Profile} name_class={"boton-menu"}/>

    </div>
  )
}

export default MenuMovie