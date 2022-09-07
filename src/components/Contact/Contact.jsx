import mail from '../../assets/mail.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import CardComponent from './CardComponent';
import {Divider,DividerTop} from '../Divider';
import { Icon } from '@iconify/react';

import AOS from "aos";
import 'aos/dist/aos.css';


const Contact = () => {
    //state for info with default value = "default"
    
    return (
            <div className='position-relative'>
            
            <div className='projects' id="contact"  >


            
                <h2> <strong>Contact</strong> Me</h2>
            <hr className='black'></hr>
                <div className='skills'>
                <ul className='skills'>
                        <a href='mailto:dieter.vanderzwalmen@student.ucll.be' data-aos="fade-right" data-aos-offset="0" > 
                        {/* <a href='mailto:dieter.vanderzwalmen@student.ucll.be'>  */}
                         <li> 
                            <Icon icon="ci:mail" style={{ color: 'var(--grijs)' }} /> 
                            <p>Mail</p>
                        </li> 
                        </a>
                        <a href="https://www.linkedin.com/in/dieter-vdz/" data-aos="fade-left" data-aos-offset="0" >
                        {/* <a href="https://www.linkedin.com/in/dieter-vdz/" > */}
                             <li> 
                                <Icon icon="akar-icons:linkedin-box-fill" style={{ color: 'var(--grijs)' }} /> 
                                <p>Linkedin</p>
                            </li> 
                        </a>
                    
                        {/* <a href="tel:+00000000" data-aos="fade-up" data-aos-offset="-750" > <li> <Icon icon="nimbus:telephone" style={{ color: 'var(--grijs)' }} /> <p>Telephone</p></li></a> */}
                    </ul>
           </div>
                
        </div>
        {/* <Divider  color="grijs"></Divider> */}
        
        </div>
    )

}


export default Contact



    // < div className = 'cards' >
    //             <CardComponent title="Mail" text="link naar mail dieter.vdz@gmail.com" src={mail} trigger="morph" link="mailto:dieter.vdz@gmail.com" />
    //             <CardComponent title="Linkedin" text="in c#" src={linkedin} trigger="morph" link="https://www.linkedin.com/in/dieter-vdz/" />
    //             <CardComponent title="Github" text="al mijn repos zijn hier te vinden" src={github} trigger="morph" link="https://github.com/Dieter-VanderZwalmen" />
                





    //         </div >
