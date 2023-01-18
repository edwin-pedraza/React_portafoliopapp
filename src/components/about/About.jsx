import React, { useState } from 'react'
import Interest from './Interest'
import Modal from './Modal'
import './about.css'
import ME from '../../assets/foto_edwin.png'
import {MdOutlineDraw} from 'react-icons/md'
import {BiCycling} from 'react-icons/bi'

import {IoLogoGameControllerB} from 'react-icons/io'

const About = () => {

  const [estadoModal, setModal] = useState(false);
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
        <h2>Something interest about me</h2>
          <div className="about__cards">

            
            
            <Interest 
              estado = {estadoModal}
              cambiarEstado = {setModal}
              title__interest = {'Game'} 
              icon ={<IoLogoGameControllerB
              className='about__icon'/>}/
            
            >
            
            <Interest title__interest = {'Draw'} icon ={<MdOutlineDraw className='about__icon'/>}/>
            
            <Interest title__interest = {'Sport'} icon ={<BiCycling className='about__icon'/>}/>
            
          </div>

          <p>
            <span>Hi, i'm Edwin Pedraza.</span> A professional System Engineer with proven working experience that combines different technology facets from system user acceptance testing, advanced hardware maintenance, software installations, and helpdesk support. Highlight skilled in highlight issues to help improving system performance, ability to work to best practice guidelines as well as natural attention to details, customer-focused, with excellent communication, influencing skills and problem-solving to achieve the best possible outcome for the team and the project as a whole. Experience in IT Systems such as SQL, HTML, CSS Java Scripts, Web pages testing, ISTQB standards.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

      <Modal 
        estado = {estadoModal}
        cambiarEstado = {setModal}
        title__modal= {'My Passion for Video Games'}
        p__modal ={'My passion since I was a child has always been videogames, a passion that continues to accompany me, but now I like to know how it works, how they are created and give life to an idea and share it with friends and be able to play something created by me.'}

        p2__modal ={'this is my passion that I continue to cultivate, I study by myself to create videogames in unity as an engine and I use blender and procreate to create character designs or backgraound'}
      />

    </section>
  )
}

export default About