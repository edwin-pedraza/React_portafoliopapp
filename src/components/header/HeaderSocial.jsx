import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {SiGithub} from 'react-icons/si'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/edwin-y-pedraza-b-/" target="_blank"  rel="noreferrer"> <GrLinkedin/> </a>
        <a href="https://github.com/edwin-pedraza" target="_blank" rel="noreferrer"> <SiGithub/> </a>
        
    </div>
  )
}

export default HeaderSocial