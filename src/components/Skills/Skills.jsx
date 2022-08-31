
import Divider from "../Divider";
import { Icon } from '@iconify/react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { DividerTop } from '../Divider';

import {react,useEffect} from 'react';
import { faRotate } from "@fortawesome/free-solid-svg-icons";

import csharp from "../../assets/Programming-Languages/c-sharp-c-seeklogo.com.svg"
import cplusplus from "../../assets/Programming-Languages/ISO_C++_Logo.svg"
const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    var color = "";
    return (
            
            <>
            <a class="anchor" id="skills"></a>
        {/* <div className='projects blackbackground white-text' data-aos="fade-up" data-aos-offset= "-900" > */}
        <div className='projects blackbackground white-text'>
                
                <h2>My <strong>Skills</strong></h2>
                <hr className="white"></hr>
                <h4 style={{ display: "flex", justifyContent: "center" }}>All languages I have used, learnt and implemented in projects.</h4>
                <ul className="skills blackbackground white-text" >
                <li> <Icon icon="logos:java" style={{ color }}  /> <p>Java</p></li>
                {/* <li> <Icon icon="teenyicons:c-sharp-solid" style={{ color }} /> <p>C#</p></li>
                <li>  <Icon icon="bxl:c-plus-plus" style={{ color }} /> <p>C++</p></li> */}
                 <li> <img src={csharp} style={{height:" 95px", width:"95px"}}/> <p>C#</p></li>
                <li>  <img src={cplusplus} style={{height:" 95px", width:"95px"}}/> <p>C++</p></li>
                <li>  <Icon icon="logos:python" style={{ color }} /> <p>Python</p></li>
                <li><Icon icon="logos:javascript" style={{ color }} /> <p>Javascript</p></li>
                <li>  <Icon icon="logos:nodejs-icon" style={{ color }} /> <p>Nodejs</p></li>
                <li>  <Icon icon="logos:react" style={{ color }} className={"rotate"} /> <p>React</p></li>
                <li> <Icon icon="logos:typescript" style={{ color }} /> <p>Typescript</p></li>
                <li>  <Icon icon="logos:html-5" style={{ color }} /> <p>HTML</p></li>
                <li> <Icon icon="logos:css-3" style={{ color }} /> <p>CSS</p></li>
                <li> <Icon icon="logos:git-icon" style={{ color }} /> <p>Git</p></li>
                <li> <Icon icon="logos:postgresql" style={{ color }} /> <p>Postgresql</p></li>
                <li> <Icon icon="clarity:ci-cd-line" style={{ color }} /> <p>CI-CD</p></li>
                
                
               
               
                
               
               
                
                

                </ul>
           
                
            </div>
        </>
           
    )
}

export default Skills;