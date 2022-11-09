import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpeg';
import IMG5 from '../../assets/portfolio5.jpeg';
import IMG6 from '../../assets/portfolio6.jpeg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MovieHUB",
    github: "https://github.com/WarsayT/react-movie-app",
    demo: "https://react-movie-app-hazel.vercel.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "CSS website",
    github: "https://github.com/WarsayT/CSS_Internship",
    demo: "http://css-updates-website.vercel.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio reactjs",
    github: "https://github.com/WarsayT/Portfolio",
    demo: "http://portfolio-warsayt.vercel.app/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Calculator-js",
    github: "https://github.com/WarsayT/caclulator-js",
    demo: "https://warsayt.github.io/caclulator-js/"
  },
  {
    id: 5,
    image: IMG5,
    title: "TinDog",
    github: "https://github.com/WarsayT/TinDog",
    demo: "https://warsayt.github.io/TinDog/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Quiz App",
    github: "https://github.com/WarsayT/Quiz-App-React",
    demo: "https://quiz-app-react-one.vercel.app/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key = {id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target = "_blank" rel="noreferrer">Live Demo</a>
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