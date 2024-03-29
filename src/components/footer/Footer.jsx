import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {SiGithub} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href="#logo" className='footer__logo'>EPEDRAZA</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/edwin-y-pedraza-b-/" target="_blank"  rel="noreferrer"> <GrLinkedin/> </a>
        <a href="https://github.com/edwin-pedraza" target="_blank" rel="noreferrer"> <SiGithub/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EPEDRAZA. all right reserved</small>
      </div>
    </footer>
  )
}

export default Footer