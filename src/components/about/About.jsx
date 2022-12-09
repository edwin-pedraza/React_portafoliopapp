import React from 'react'
import './about.css'
import ME from '../../assets/foto_edwin.png'
import {RiAwardFill} from 'react-icons/ri'
import {HiUsers} from 'react-icons/hi'
import {HiFolderOpen} from 'react-icons/hi'

const about = () => {
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
          <div className="about__cards">
            <article className='about__card'>
              
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small> 3+ Year Working</small>

            </article>

            <article className='about__card'>

              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 200+ Year Worldwide</small>

            </article>

            <article className='about__card'>

              <HiFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small> 80+ Completed</small>

            </article>
          </div>

          <p>
            <span>Hi, i'm Edwin Pedraza.</span> A professional System Engineer with proven working experience that combines different technology facets from system user acceptance testing, advanced hardware maintenance, software installations, and helpdesk support. Highlight skilled in highlight issues to help improving system performance, ability to work to best practice guidelines as well as natural attention to details, customer-focused, with excellent communication, influencing skills and problem-solving to achieve the best possible outcome for the team and the project as a whole. Experience in IT Systems such as SQL, HTML, CSS Java Scripts, Web pages testing, ISTQB standards.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about