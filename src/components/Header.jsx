import React from 'react'

import { Link } from 'react-router-dom';
import { useFlip } from "react-easy-flip";

import waveSVG from '../assets/waveSVG.svg';
import profielfoto from '../assets/profielfoto.jfif';
import programmingGif from '../assets/programmingGif.gif';

import { fontawesome } from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCode, faGraduationCap, faTools, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import ParticlesBlackDots from '../components/Particles';
import logo from '../assets/logo.png';

import AOS from "aos";
import 'aos/dist/aos.css';

import {Triangle} from './Divider';
const Header = () => {
  const [selectedTab, setSelectedTab] = React.useState("");


  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <>
    <header>
      <div className='particles'>
        <ParticlesBlackDots />
      </div>

      <ul className="denav">
        <div className='Logo'>
          <a href='/portfolio' ><img src={logo} style={{ width: "50px", height: "auto" }} /></a>
        </div>
        <ul className="nav-links ">
          <li>
            <FontAwesomeIcon icon={faCode} className="fa-cog" />
            <a href="#projects" class="link"> Projects</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTools} className="fa-cog" />
            <a href="#skills" class="link"
            ><i class="fas fa-tools"></i> Skills</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="fa-cog" />
            <a href="#education" class="link"> Education</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faFile} className="fa-cog" />
            <a href="https://a7m2a8t7.rocketcdn.me/wp-content/uploads/2021/05/Ronnie-Coleman-Leg-Workout-e1621309722852.jpg" class="link"
              target="_blank"> Resume</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="fa-cog" />
            <a href="#contact" class="link"> Contact</a>
          </li>
        </ul>
      </ul>

      <div className='naam' data-aos="fade-up" data-aos-offset="-1500">
        <h1> <strong>DIETER </strong><br></br> </h1>
        <h1>VAN DER ZWALMEN</h1>
        <h4> Applied informatics student at&nbsp;<strong>UCLL</strong></h4>
      </div>
      
    </header>
      
    </>
  );

}

export default Header;
{/* export default SimpelHeader


//import videoBg from '../assets/videoBg.mp4'

/*
 <header>
   
        <video src={videoBg} autoPlay loop muted>
        
        </video>
        <div className='navbar'>
            <ul>
                <li><a>About</a></li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Maak hier nog links van</li>
            </ul>
        </div>

        </header>*/


/*
const tabs = [
  { id: "", text: "Home" },
  { id: "Projects", text: "Projects" },
  { id: "Contact", text: "Contact me" },
];


{tabs.map((tab) => (
               <Link
                 key={tab.id}
                 to={`/${tab.id}`}
                 className={`nav-link ${selectedTab === tab.id && "active"}`}
                 onClick={() => setSelectedTab(tab.id)}
               >
                 {tab.text}
               </Link>))}*/





/*<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
<a class="navbar-brand" href="#!">Dieter Van der Zwalmen</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
{tabs.map((tab) => (
 <Link 
   key={tab.id}
   to={`/${tab.id}`}
   className={`link ${selectedTab === tab.id && "active"}`}
   onClick={() => setSelectedTab(tab.id)}
 >
   {tab.text}
 </Link>))}
</ul>
</div>
</div>
</nav>*/ }