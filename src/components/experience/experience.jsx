import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Expirience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Fronend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>
              <div className="experiance__details_text">
                
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>

              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>

              <div className="experiance__details_text">
                <h4>CSS</h4>
                <small className='text-light'>Experience</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>

              <div className="experiance__details_text">
                <h4>JaveScript</h4>
                <small className='text-light'>Experience</small>

              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>

              <div className="experiance__details_text">
                <h4>Bootstrap</h4>
                <small className='text-light'>Experience</small>

              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>

              <div className="experiance__details_text">
                <h4>React</h4>
                <small className='text-light'>Experience</small>
              </div>
              
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>

              <div className="experiance__details_text">
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>

              <div className="experiance__details_text">
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = "experiance__details-icon"/>

              <div className="experiance__details_text">
                <h4>Python</h4>
                <small className='text-light'>Basic</small>

              </div>
              
            </article>

          </div>
        </div>



      </div>
    </section>
  )
}

export default Experience