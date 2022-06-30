import React from "react"
import "../styles/footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"

function Footer() {
    return(
        <footer>
        <a href="#header" className="footer-logo">Malik Hannan</a>
        <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiInstagram/></a>
        </div>
        <div className="footer-copyright">
        <small>&copy; Malik Hannan Portfolio. All rights reserved.</small>
        </div>
        </footer>
    )
}
export default Footer