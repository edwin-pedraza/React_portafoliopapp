import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_photo.png'
import IMG2 from '../../assets/tic tac toe foto.png'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'


const data = [
  
  {
    id: 1,
    img: IMG1,
    title: 'Briefcase',
    paragraph: 'it is my last portfolio shows my knowledge and my advance in my knowledge',
    github: 'https://github.com/edwin-pedraza/PortafolioEdwinPedraza',
    demo: 'portafolioapp/src/components/portfolio/projects/portafolio_github/index.html'
  },

  {
    id: 2,
    img: IMG2,
    title: 'Tic Tac Toe Game',
    paragraph: 'This fun GAME was created in HTML, CSS and JAVASCRIPT leave me your suggestions in CONTACT',
    github: 'https://github.com/edwin-pedraza',
    demo: 'https://edwin-pedraza.github.io/React_portafoliopapp/build/tic%20tac%20toe/'
  }

  // {
  //   id: 3,
  //   img: IMG3,
  //   title: 'CriptpCurrency Dashboard',
  //   github: 'https://github.com/edwin-pedraza',
  //   demo: 'https://edwin-pedraza.github.io/React_portafoliopapp/build/tic%20tac%20toe/'
  // },

  // {
  //   id: 4,
  //   img: IMG4,
  //   title: 'CriptpCurrency Dashboard',
  //   github: 'https://github.com/edwin-pedraza',
  //   demo: 'https://github.com/edwin-pedraza'
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, img, title, github, demo, paragraph}) => {
            return(
              <article key={id} className='portfolio__item'>
            
              <div className="portfolio__item-img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{paragraph}</p>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              
    
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio