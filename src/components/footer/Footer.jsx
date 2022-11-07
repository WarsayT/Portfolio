/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./footer.css"
import {FaLinkedinIn, FaInstagram, FaTwitter, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Warsay</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/warsay-teklebrhan-4b775a199" target="_blank"><FaLinkedinIn /></a>
        <a href="https://instagram.com/warsay_wediteklia/" target="_blank"><FaInstagram /></a>
        <a href="https://twitter.com/WTeklebrhan" target="_blank"><FaTwitter /></a>
        <a href="https://github.com/WarsayT"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Warsay Teklebrha 2022</small>
      </div>
    </footer>
  )
}

export default Footer