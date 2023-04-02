
import { Icon } from '@iconify/react';
import AOS from "aos";
import 'aos/dist/aos.css';

import { react, useEffect } from 'react';
import { faRotate } from "@fortawesome/free-solid-svg-icons";

import csharp from "../../assets/Programming-Languages/c-sharp-c-seeklogo.com.svg"
import cplusplus from "../../assets/Programming-Languages/ISO_C++_Logo.svg"
import orange from "../../assets/orange.png"

import { Divider, DividerTop, DividerTriangle, DividerTriangleTop } from "../Divider";
const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);


    // list of html elements

    var color = "";

    return (

        <div className='position-relative'>

            <a class="anchor" id="skills"></a>
            <div className='projects blackbackground white-text' >
                {/* <div className='projects blackbackground white-text'> */}

                <h2>My <strong>Skills</strong></h2>
                <hr className="white"></hr>
                <h4 style={{ display: "flex", justifyContent: "center" }}>All languages and technologies I have used, learnt and implemented in projects.</h4>

                {/* loop through the list of html elements and display them */}







                <ul className="skills blackbackground white-text" data-aos="fade-in" data-aos-offset="250" >



                    <li > <Icon icon="logos:java" style={{ color }} /> <p>Java</p></li>
                    <li> <img src={csharp} /> <p>C#</p></li>
                    <li> <img src={cplusplus} /> <p>C++</p></li>
                    <li>  <Icon icon="logos:python" style={{ color }} /> <p>Python</p></li>
                    <li><Icon icon="logos:javascript" style={{ color }} /> <p>Javascript</p></li>
                    <li> <Icon icon="vscode-icons:file-type-elixir" style={{ color }} /> <p>Elixir</p></li>
                    <li>  <Icon icon="logos:html-5" style={{ color }} /> <p>HTML</p></li>
                    <li> <Icon icon="logos:css-3" style={{ color }} /> <p>CSS</p></li>
                    <li> <Icon icon="logos:postgresql" style={{ color }} /> <p>Postgresql</p></li>
                    <li> <Icon icon="logos:mysql" style={{ color }} /> <p>Mysql</p></li>
                    <li>  <Icon icon="logos:nodejs-icon" style={{ color }} /> <p>Nodejs</p></li>
                    <li>  <Icon icon="logos:react" style={{ color }} className={"rotate"} /> <p>React</p></li>
                    <li> <Icon icon="logos:vue" style={{ color }} /> <p>Vue</p></li>
                    <li> <Icon icon="logos:typescript" style={{ color }} /> <p>Typescript</p></li>
                    <li> <Icon icon="logos:phoenix" style={{ color }} /> <p>Phoenix</p></li>

                    <li> <Icon icon="simple-icons:springboot" style={{ color: "rgb(104,189,69)" }} /> <p>Springboot</p></li>
                    <li> <Icon icon="akar-icons:django-fill" style={{ color }} /> <p>Django</p></li>

                    <li> <Icon icon="logos:git-icon" style={{ color }} /> <p>Git</p></li>


                    <li> <Icon icon="cib:cisco" style={{ color }} /> <p>Packet tracer</p></li>

                    <li> <Icon icon="flat-color-icons:linux" style={{ color }} className={"rotate"} /> <p>Linux</p></li>
                    <li> <Icon icon="logos:docker-icon" style={{ color }} /> <p>Docker</p></li>
                    <li> <Icon icon="logos:kubernetes" style={{ color }} /> <p>Kubernetes</p></li>
                    <li> <Icon icon="clarity:ci-cd-line" style={{ color }} /> <p>CI-CD</p></li>
                    <li> <Icon icon="logos:flutter" style={{ color }} /> <p>Flutter</p></li>
                    <li> <Icon icon="logos:jupyter" style={{ color }} /> <p>Jupyter</p></li>
                    <li>  <img src={orange} /> <p>Orange data mining</p></li>
                    <li> <Icon icon="logos:tensorflow" style={{ color }} /> <p>Tensorflow</p></li>
                    <li> <Icon icon="logos:bootstrap" style={{ color }} /> <p>Bootstrap</p></li>
                    <li> <Icon icon="logos:tailwindcss-icon" style={{ color }} /> <p>Tailwind</p></li>
                    <li> <Icon icon="simple-icons:keras" style={{
                        color: "rgb(150,0,0)"
                    }} /> <p>Keras</p></li>
                    <li> <Icon icon="vscode-icons:file-type-assembly" style={{ color }} /> <p>Assembly</p></li>
                </ul>


            </div>
            {/* <Divider  color="wit"></Divider> */}
        </div>

    )
}

export default Skills;