import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

function Modal(props) {
    // console.log(estado)
  return (
    <>
    
        {props.estado &&
        
            <div className='overlay'>
                <section className='container__modal'>
                    <div className="modal__title">
                        <h2>{props.title__modal}</h2>
                    </div>

                    <div className="modal__bta-close">
                    <AiFillCloseCircle onClick={() => props.cambiarEstado(!props.estado)}/>
                    </div>

                    <p>{props.p__modal}</p>
                    <p>{props.p2__modal}</p>

                    <button className='btn btn-primary' onClick={() => props.cambiarEstado(!props.estado)}>Salir</button>
                </section>
            </div>
        }
    </>
  )
}

export default Modal