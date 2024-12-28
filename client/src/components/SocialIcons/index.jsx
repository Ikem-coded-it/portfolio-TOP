import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import "./styles.css";

function SocialIcons() {
  return (
    <div className="social-icons-container">
        <a href="https://wa.link/i7nalh" target="_blank">
        <FaWhatsapp color="white" size="24px"/>
        </a>

        <a href="https://x.com/IkemO06934594" target="_blank">
        <FaXTwitter color="white" size="24px"/>
        </a>

        <a href="https://www.linkedin.com/in/ikemefuna-onubogu-84914323a/" target="_blank">
        <FaLinkedinIn color="white" size="24px"/>
        </a>

        <a href="https://github.com/Ikem-coded-it" target="_blank">
        <FaGithub color="white" size="24px"/>
        </a>
    </div>
  )
}

export default SocialIcons