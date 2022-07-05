import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>


            {/* footer */}
            <div >

                <h4>Dieter Van der Zwalmen</h4>
            </div>
            <ul >




                <li> <a href="https://github.com/Dieter-VanderZwalmen"> <FontAwesomeIcon icon={faGithub} /></a>  </li>
                <li> <a href="https://www.linkedin.com/in/dieter-vdz/"><FontAwesomeIcon icon={faLinkedin} /></a> </li>
                <li><a href="mailto:dieter.vanderzwalmen@student.ucll.be"><FontAwesomeIcon icon={faEnvelope} /></a> </li>
            </ul>



        </footer>
    )
}

export default Footer;