import React from 'react'
import "./services.css"
import {BsCheckLg} from "react-icons/bs"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article>
          <div className="service">
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>
            </ul> 
          </div>
        </article>
        {/* End of UI/UX */}

        <article>
          <div className="service">
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>
            </ul>
          </div>
        </article>
        {/* End of Web development */}

        <article>
          <div className="service">
            <div className='service__head'>
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Lorem, ipsum dolor sit amet consecteture leite</p>
              </li>
            </ul>
          </div>
        </article>
        {/* End of content creation */}

      </div>
    </section>
  )
}

export default Services