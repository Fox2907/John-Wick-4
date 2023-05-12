import React from 'react'
import './ActorCard.css'
//import actor from '../assets/actor.json'

export const ActorCard = (props) => {
  const actor = props.actor
  return (
    <div className='actor-container'>
        <img src={actor.imgsrc} alt="" />
        <span>{actor.name}</span>
    </div>
  )
}