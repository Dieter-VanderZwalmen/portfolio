import React from 'react'
import CardFlip from './CardFlip';

import { useState } from 'react'; // zet {} rond useState anders werkt de useState niet zoals hier!!!!

import springbootlogo from '../../assets/spring-boot-logo.png';
import pythonlogo from '../../assets/python-logo.jpg';
import postgreslogo from '../../assets/postgres-logo.png';
import phoenixlogo from '../../assets/phoenix-logo3.png';
import cpplogo from '../../assets/cpp-logo.png';
import csharplogo from '../../assets/csharp-logo.png';
import reactlogo from '../../assets/react-logo.png';
import tutoringlogo from '../../assets/tutoring-logo.png';
import networklogo from '../../assets/network-logo.jpg';
import devopslogo from '../../assets/devops-logo.png';
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
            
            <h2>All my projects</h2>
           
            
            <div className='cards' >
                    {/* <CardComponent showInformation={showInformation} title="Studies" text="student ucll TI" src="https://cdn.lordicon.com/stxtcyyo.json" trigger="morph" />
                    <CardComponent showInformation={showInformation} title="dit ben ik" text="geen idee" src="https://cdn.lordicon.com/nobciafz.json" trigger="hover" />
                    <CardComponent showInformation={showInformation} title="Contacteer me" text="mail linked in etc etc" src="https://cdn.lordicon.com/zpxybbhl.json" trigger="hover" /> */}


                {/* <CardComponent showInformation={showInformation} title="React"   src={reactlogo} githublink="https://github.com/Dieter-VanderZwalmen/Huffman" />
                <CardComponent showInformation={showInformation} title="Minesweeper"  src={csharplogo} githublink="https://github.com/Dieter-VanderZwalmen/Minesweeper" />
                <CardComponent showInformation={showInformation} title="Huffmann Encoding"  src={cpplogo}  githublink="https://github.com/Dieter-VanderZwalmen/Huffman" />
                <CardComponent showInformation={showInformation} title="Phoenix"  src={phoenixlogo}  githublink="https://github.com/ucll-internet-programming-major/project-jan-Dieter-VanderZwalmen"/>
                <CardComponent showInformation={showInformation} title="Springboot"  src={springbootlogo}  githublink="https://github.com/Dieter-VanderZwalmen/Springboot-website" />
                <CardComponent showInformation={showInformation} title="Scripting" text="Smalls scripts" src={pythonlogo} />
                <CardComponent showInformation={showInformation} title="Databanken" text="Queries and server management " src={postgreslogo}  />
                <CardComponent showInformation={showInformation} title="Netwerken" text="Basic knowledge of networking" src={networklogo}  />
                <CardComponent showInformation={showInformation} title="Tutoring" text="Helping other students exceed" src={tutoringlogo}  /> */}

                {/* img/title/subtitle/text */}
                <CardFlip img={springbootlogo} title="Springboot" subtitle="Springboot website" text="This is a website made with Springboot" githublink="https://github.com/Dieter-VanderZwalmen/Springboot-website"/>
                <CardFlip img={reactlogo} title="React" subtitle="React website" text="This is a website made with React" githublink="https://github.com/Dieter-VanderZwalmen/portfolio"/>
                <CardFlip img={csharplogo} title="Minesweeper" subtitle="Minesweeper in C# " text="This is an application made with c#. Made with a guide blah blah" githublink="https://github.com/Dieter-VanderZwalmen/Minesweeper" />
                <CardFlip  title="Huffmann Encoding" subtitle="Huffman Encoding in C++ " img={cpplogo} githublink="https://github.com/Dieter-VanderZwalmen/Huffman" text="This is an application made with c++. Made with a guide blah blah" />
                <CardFlip  title="Phoenix" subtitle="Website made with phoenix elixir" text="this site was with phoenix which is a funciton language" img={phoenixlogo} githublink="https://github.com/ucll-internet-programming-major/project-jan-Dieter-VanderZwalmen" />

                <CardFlip title="Scripting" subtitle="Scripting in Javascript and Python " text="Smalls scripts to automate exercises, provide information with the click of a button and ofcourse the exercises given in class! " img={pythonlogo} githublink="https://github.com/Dieter-VanderZwalmen/Scripts" />
                <CardFlip  title="Databases" subtitle="Postgresql "text="Queries, databases creation and server management" img={postgreslogo} />
                <CardFlip  title="Netwerken" text="Basic knowledge of networking like setting up a network and monitoring traffic" img={networklogo} />
                <CardFlip title="Devops" text="Basic knowledge devops. Experience with Kubernetes and Gitlab " img={devopslogo} />
                <CardFlip title="Tutoring" subtitle="Tutoring other students" text="Helping other students exceed. I have helped students that did and did not study informatics with python, javascript, etc" img={tutoringlogo} /> 


                </div>

                {/* <div class="info">
                    <TextComponent info={info} />
                </div> */}
            
           
        </>
    )

}


export default Projects