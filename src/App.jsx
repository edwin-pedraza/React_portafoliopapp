import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/experience'
// import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Tetimonials from './components/testimonials/Testimonials'
import Contacts from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        < Header />
        < Nav />
        < About />
        < Experience />
        {/* < Services /> */}
        < Portfolio />
        {/* < Tetimonials /> */}
        < Contacts />
        < Footer />


    </div>
  )
}

export default App