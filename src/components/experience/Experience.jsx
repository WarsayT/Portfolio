import React from 'react'
import "./experience.css"
import {AiFillCheckCircle} from "react-icons/ai"
import {ImHtmlFive} from "react-icons/im"
import {SiCss3, SiJavascript, SiBootstrap, SiReact, SiMysql,SiMongodb} 
from "react-icons/si"
import {FaNodeJs, FaJava, FaPython} from "react-icons/fa"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <ImHtmlFive className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiCss3 className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiBootstrap className='experience__details-icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiReact className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaJava className='experience__details-icons'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icons'/>
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMysql className='experience__details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaPython className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience