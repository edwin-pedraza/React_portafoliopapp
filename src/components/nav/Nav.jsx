import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {FaUserTie} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import {RiServiceFill} from 'react-icons/ri'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {

  const [activeNav, setactiveNav] = useState('#');
  return (
    <nav className='nav'>
      <a href="#home" onClick={ () => setactiveNav('#')} className = {activeNav === '#' ? 'active' : ''}>< IoIosHome /></a>
      <a href="#about" onClick={ () => setactiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}>< FaUserTie /></a>
      <a href="#experience" onClick={ () => setactiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}>< ImProfile /></a>
      <a href="#services" onClick={ () => setactiveNav('#services')} className = {activeNav === '#services' ? 'active' : ''}>< RiServiceFill /></a>
      <a href="#contact" onClick={ () => setactiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}>< MdOutlineConnectWithoutContact /></a>
    </nav>
  )
}

export default Nav