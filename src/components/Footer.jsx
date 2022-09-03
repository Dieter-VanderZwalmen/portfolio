import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo.png';
import {Divider,DividerTop} from './Divider';
const Footer = () => {
    return (
        <>
        <DividerTop></DividerTop>
            <footer>
                <img src={logo} style={{ width: "50px", height: "auto" }} />

                <h4>   <strong>DIETER</strong> <br></br> Van der Zwalmen</h4>

                {/* footer */}
                <div className='voeter'>

                    
                    

                    <ul className='footerLinks'>




                        <li> <a href="https://github.com/Dieter-VanderZwalmen"> <FontAwesomeIcon icon={faGithub} color="white" /></a>  </li>
                        {/* <li> <a href="https://www.linkedin.com/in/dieter-vdz/"><FontAwesomeIcon icon={faLinkedin} color="white" /></a> </li>
                        <li><a href="mailto:dieter.vanderzwalmen@student.ucll.be"><FontAwesomeIcon icon={faEnvelope} color="white" /></a> </li> */}
                    </ul>
                    
                </div>
                
               
            </footer>
            
        </>
    )
}

export default Footer;