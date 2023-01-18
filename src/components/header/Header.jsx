import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/foto_edwin.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Edwin Pedraza</h1>
        <h5 className='text-light'>Junior Front Developer</h5>
        <CTA />
        

        <div class="content-banner">
            <div class="container-img container-circle">
                <img src={ME} alt="" />
            </div>
            <div class="social">
            <HeaderSocial />

            </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <a href="#contact" className='scroll__down-left'>Scroll Down</a>
      </div>


    </header>
    
  )
}

export default Header