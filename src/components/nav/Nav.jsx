/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import "./nav.css"
import {AiFillHome} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import {FaCode} from "react-icons/fa"
import {RiServiceFill} from "react-icons/ri"
import {AiFillMessage} from "react-icons/ai"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <AiFillHome />
        </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
        <FaUserAlt />
        </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
        <FaCode />
        </a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}>
        <RiServiceFill />
        </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
        <AiFillMessage />
        </a>
    </nav>
  )
}

export default Nav