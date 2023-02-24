/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./about.css"
import ME_IMG from "../../assets/me-about.jpg"
import {MdWork} from "react-icons/md"
import {FaUsers} from "react-icons/fa"
import {FaAward} from"react-icons/fa"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME_IMG} alt="my-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ World Wide</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed Project</small>
            </article>
          </div>
          <p>
            Meet a talented web developer who is self-taught 😊 and has a solid foundation in 
            cyber security and networking. Graduating from Zayed University in Abu-Dhabi 🇦🇪, 
            this developer has honed their skills and expertise to create visually stunning 
            websites that are secure and user-friendly. With their extensive knowledge in both web 
            development and cyber security, this developer brings a unique and valuable 
            perspective to every project they work on.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About