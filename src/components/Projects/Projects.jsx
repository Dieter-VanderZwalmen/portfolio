import React from 'react'
import CardFlip from './CardFlip';

import { useState } from 'react'; // zet {} rond useState anders werkt de useState niet zoals hier!!!!






import {Divider} from '../Divider';
import { Card } from 'react-bootstrap';


const Projects = () => {
    //state for info with default value = "default"
    const [info, setInfo] = useState("default");

    //showinformation function
    const showInformation = (title) => {
        setInfo(title);
        console.log(info)
    }
    return (

        <div className='position-relative'>
        
        <div className='projects whitebackground' id='projects'>
        
            <h2 style= {{color: "black"}}>My <strong>Projects</strong></h2>
            <hr className='black'></hr>
            <h4 style={{ color:"black",display: "flex", justifyContent: "center" }}>Here are all my most noteworthy projects that I have made over the years.</h4>
            <h4 style={{color: "gray"}}>
              The demos are not finished!
            </h4>

            <div className='cards' data-aos="fade-up" data-aos-offset="000">
                

            {/* https://icon-sets.iconify.design/?query=light%20bulb */}
           

                <CardFlip img="simple-icons:springboot" title="Springboot Website" subtitle="Springboot website" text="Springboot is a framework for Java that makes developing web applications fast and easy." githublink="https://github.com/Dieter-VanderZwalmen/Springboot-website" />
                <CardFlip img="akar-icons:react-fill" title="React Website" subtitle="React website" text="React is a JavaScript library aimed to easily create fast user interfaces for websites and applications alike." githublink="https://github.com/Dieter-VanderZwalmen/portfolio" />
                <CardFlip img="teenyicons:c-sharp-solid" title="Minesweeper" subtitle="Minesweeper in C# " text="The classic logic puzzle video game created in c# and WPF to create a ui." githublink="https://github.com/Dieter-VanderZwalmen/Minesweeper" />
                <CardFlip title="Huffmann Encoding" subtitle="Huffman Encoding in C++ " img="bxl:c-plus-plus" githublink="https://github.com/Dieter-VanderZwalmen/Huffman" text="A lossless data encoding algorithm. All characters are converted to a binary code, the more frequent a character is the shorter the binary code becomes." />
                <CardFlip title="Ray tracing" subtitle="Ray tracing in C++ " img="akar-icons:light-bulb" text="Selfmade implementation of ray tracing made in c++" />
                <CardFlip title="Phoenix Website" subtitle="Website made with phoenix elixir" text="Phoenix is a web development framework written in the functional programming language Elixir. Developed to provide highly performant and scalable web applications." img="la:phoenix-framework" githublink="https://github.com/ucll-internet-programming-major/project-jan-Dieter-VanderZwalmen" />
                <CardFlip img="bxl:flutter" title="Mobile application" subtitle="Mobile application" text="Mobile application made with flutter for Android and IOS that makes keeping an overview of all your tasks easy. " /> 
                <CardFlip title="Scripting" subtitle="Scripting in Javascript and Python. " text="Smalls scripts made to automate exercises made in Python" img="bxl:python" githublink="https://github.com/Dieter-VanderZwalmen/Scripts" />
                <CardFlip title="Datamining" subtitle="Datamining with Python, Jupyter and Python. " text="Datamining with Python, Jupyter and Python. Visualizing, correcting and displaying data to create a consensus." img="eos-icons:data-mining" />
{/* 
                <CardFlip title="Devops" text="Basic knowledge devops. Experience with Kubernetes and Gitlab." img="clarity:ci-cd-line" githublink="https://git.uclllabs.be/r0795533" /> */}

                    



            </div>

       


        </div>
        {/* <Divider color="grijs"></Divider> */}

        </div>
    )

}


export default Projects