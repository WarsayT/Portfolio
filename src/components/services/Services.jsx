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
                <p>Create user-centered designs based on requirements</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Wireframes, Prototypes, low-high-fidelity mockups.</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Build page navigation buttons and search fields</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Conduct layout adjustments based on user feedback</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Identify and troubleshoot UX problems (e.g. responsiveness)</p>
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
                <p>Creating website layout/user interfaces</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Integrating data from various back-end services/databases</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Gather and refine specifications and requirements</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Create and maintain software documentation</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Maintaining, Expanding, and scaling sites</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Cooperate with UI/UX to match visual design intent</p>
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
                <p>Writing, reviewing, editing, and updating content</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Conducting research to learn more about current trends</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Identify customer needs and recommend new topics</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Monitoring social media and company website metrics</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Assisting the creative team with the design for promotional</p>
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