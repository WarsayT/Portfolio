/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./contact.css"
import {MdEmail} from "react-icons/md"
import {BsWhatsapp, BsLinkedin} from "react-icons/bs"
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cebtngj', 'template_x0shjc7', form.current, 'VsC7GMpiqYTvg2MTS')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:warsay.teklebrhan@outlook.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/971523980628" target="_blank" rel="noreferrer">Send me a text</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/warsay-teklebrhan-4b775a199" target="_blank" rel="noreferrer">View profile</a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact