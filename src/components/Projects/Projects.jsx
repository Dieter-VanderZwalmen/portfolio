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
                

             
                <CardFlip img="simple-icons:springboot" title="Springboot Website" subtitle="Springboot website" text="A website with basic CRUD operations, a database, relations between entities, security and i18n." githublink="https://github.com/Dieter-VanderZwalmen/Springboot-website" />
                <CardFlip img="akar-icons:react-fill" title="React Website" subtitle="React website" text="This website is made with React. The code, all the ideas, nonoptimal solutions and a self reflection are available in the demo. ofzoiets kweet ni goed hoe ik het moet verwoorden" githublink="https://github.com/Dieter-VanderZwalmen/portfolio" />
                <CardFlip img="teenyicons:c-sharp-solid" title="Minesweeper" subtitle="Minesweeper in C# " text="Minesweeper, The classic logic puzzle video game created in c# with the aid of a guide." githublink="https://github.com/Dieter-VanderZwalmen/Minesweeper" />
                <CardFlip title="Huffmann Encoding" subtitle="Huffman Encoding in C++ " img="bxl:c-plus-plus" githublink="https://github.com/Dieter-VanderZwalmen/Huffman" text="The huffman encoding was made with the help of a guide. This application can encode en decode any file." />
                <CardFlip title="Phoenix" subtitle="Website made with phoenix elixir" text="A website with basic CRUD operations, a database, relations between entities, security and i18n." img="la:phoenix-framework" githublink="https://github.com/ucll-internet-programming-major/project-jan-Dieter-VanderZwalmen" />

                <CardFlip title="Scripting" subtitle="Scripting in Javascript and Python " text="Smalls scripts to automate exercises, provide information with the click of a button and ofcourse the exercises given in class! " img="bxl:python" githublink="https://github.com/Dieter-VanderZwalmen/Scripts" />
{/* 
                <CardFlip title="Devops" text="Basic knowledge devops. Experience with Kubernetes and Gitlab." img="clarity:ci-cd-line" githublink="https://git.uclllabs.be/r0795533" /> */}

                    



            </div>

       


        </div>
            
        </>
    )

}


export default Projects