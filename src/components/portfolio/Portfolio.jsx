import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  
  {
    id: 1,
    img: IMG1,
    title: 'CriptpCurrency Dashboard',
    github: 'https://github.com/edwin-pedraza',
    demo: 'https://github.com/edwin-pedraza'
  },

  {
    id: 2,
    img: IMG2,
    title: 'CriptpCurrency Dashboard',
    github: 'https://github.com/edwin-pedraza',
    demo: 'https://github.com/edwin-pedraza'
  },

  {
    id: 3,
    img: IMG3,
    title: 'CriptpCurrency Dashboard',
    github: 'https://github.com/edwin-pedraza',
    demo: 'https://github.com/edwin-pedraza'
  },

  {
    id: 4,
    img: IMG4,
    title: 'CriptpCurrency Dashboard',
    github: 'https://github.com/edwin-pedraza',
    demo: 'https://github.com/edwin-pedraza'
  },

  {
    id: 5,
    img: IMG5,
    title: 'CriptpCurrency Dashboard',
    github: 'https://github.com/edwin-pedraza',
    demo: 'https://github.com/edwin-pedraza'
  },

  {
    id: 6,
    img: IMG6,
    title: 'CriptpCurrency Dashboard',
    github: 'https://github.com/edwin-pedraza',
    demo: 'https://github.com/edwin-pedraza'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, img, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
            
              <div className="portfolio__item-img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
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