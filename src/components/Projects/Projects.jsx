import React from 'react'
import CardFlip from './CardFlip';

import { useState } from 'react'; // zet {} rond useState anders werkt de useState niet zoals hier!!!!







import { Divider } from '../Divider';


const Projects = () => {
    //state for info with default value = "default"
    const [info, setInfo] = useState("default");

    //showinformation function
    const showInformation = (title) => {
        setInfo(title);
        console.log(info)
    }
    return (

        <>
        <Divider></Divider>
        <div className='projects whitebackground' id='projects'>
            
            <h2 style= {{color: "black"}}>My <strong>Projects</strong></h2>
            <hr className='black'></hr>
            <h4 style={{ color:"black",display: "flex", justifyContent: "center" }}>Here are all my most noteworthy projects that I have made over the years.</h4>

            <div className='cards' data-aos="fade-up" data-aos-offset="-500">
                

             
                <CardFlip img="simple-icons:springboot" title="Springboot Website" subtitle="Springboot website" text="A framework for Java that makes developing web applications fast and easy." githublink="https://github.com/Dieter-VanderZwalmen/Springboot-website" />
                <CardFlip img="akar-icons:react-fill" title="React Website" subtitle="React website" text="A JavaScript library aimed to easily create fast user interfaces for websites and applications alike" githublink="https://github.com/Dieter-VanderZwalmen/portfolio" />
                <CardFlip img="teenyicons:c-sharp-solid" title="Minesweeper" subtitle="Minesweeper in C# " text="The classic logic puzzle video game created in c# and xaml to create a ui." githublink="https://github.com/Dieter-VanderZwalmen/Minesweeper" />
                <CardFlip title="Huffmann Encoding" subtitle="Huffman Encoding in C++ " img="bxl:c-plus-plus" githublink="https://github.com/Dieter-VanderZwalmen/Huffman" text="A lossless data encoding algorithm. All characters are converted to a binary code, the more frequent a character is the shorter the binary code becomes." />
                <CardFlip title="Phoenix" subtitle="Website made with phoenix elixir" text="A web development framework written in the functional programming language Elixir. Developed to provide highly performant and scalable web applications." img="la:phoenix-framework" githublink="https://github.com/ucll-internet-programming-major/project-jan-Dieter-VanderZwalmen" />

                <CardFlip title="Scripting" subtitle="Scripting in Javascript and Python " text="Smalls scripts made to automate exercises made in Python" img="bxl:python" githublink="https://github.com/Dieter-VanderZwalmen/Scripts" />
{/* 
                <CardFlip title="Devops" text="Basic knowledge devops. Experience with Kubernetes and Gitlab." img="clarity:ci-cd-line" githublink="https://git.uclllabs.be/r0795533" /> */}

                    



            </div>

       


        </div>
            
        </>
    )

}


export default Projects