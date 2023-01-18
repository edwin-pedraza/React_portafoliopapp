import React from 'react'

function Interest(props) {
  return (
    <article className='about__card'>
            
        <h1 className='modal__title'>{props.icon}</h1>
        <h5>{props.title__interest}</h5>
        <button  onClick={() => props.cambiarEstado(!props.estado)}>See more...</button>

    </article>
  )
}

export default Interest