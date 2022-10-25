import React from 'react'

// import { Link } from 'react-router-dom';
// import { useFlip } from "react-easy-flip";
import "bootstrap/js/src/collapse.js";
// import profielfoto from '../assets/profielfoto.jfif';
// import programmingGif from '../assets/programmingGif.gif';

// import { fontawesome } from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCode, faGraduationCap, faTools, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import ParticlesHandler from '../components/ParticleHandler';
// import ParticlesBlackDots from '../components/Particles';
import logo from '../assets/logo.png';
// import logo from '../assets/LogoTorenZonderTekst.png';

import AOS from "aos";
import 'aos/dist/aos.css';

import { Divider } from './Divider';


// import {Triangle} from './Divider';
const Header = () => {
  const [selectedTab, setSelectedTab] = React.useState("");
  //is clicked state
  const [isClicked, setIsClicked] = React.useState(false);

  //handle click method that sets isClicked to true
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("geklikt op de knop");
  };

      

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className='relative-position'>
      <header>
        <div className='particles'>
          <ParticlesHandler />
        </div>
        <nav class="hide-big  navbar navbar-expand-lg navbar-dark">
        <div className='Logo'>
            <a href='/portfolio' ><img src={logo} style={{ width: "30px", height: "auto" }} /></a>
          </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li><a href="#projects" >
              <FontAwesomeIcon icon={faCode} className="fa-cog" />
              <a className='link'>Projects</a></a>
            </li>
            <li>
              <a href="#skills" >
                <FontAwesomeIcon icon={faTools} className="fa-cog" />
                <a className='link'>Skills</a></a>
            </li>

            <li>
              <a href="https://dieter-vanderzwalmen.github.io/portfolio/Dieter_Van_der_Zwalmen.pdf"
                target="_blank">
                <FontAwesomeIcon icon={faFile} className="fa-cog" />
                <a className='link'>Resume</a></a>
            </li>
            <li>
              <a href="#contact">
                <FontAwesomeIcon icon={faEnvelope} className="fa-cog" />
                <a className='link'>Contact</a> </a>
            </li>
    </ul>
  </div>
</nav>
        <nav className="denav">
          <div className='Logo'>
            <a href='/portfolio' ><img src={logo} style={{ width: "30px", height: "auto" }} /></a>
          </div>
          
          <ul className="nav-links ">
            <li><a href="#projects" >
              <FontAwesomeIcon icon={faCode} className="fa-cog" />
              <a className='link'>Projects</a></a>
            </li>
            <li>
              <a href="#skills" >
                <FontAwesomeIcon icon={faTools} className="fa-cog" />
                <a className='link'>Skills</a></a>
            </li>

            <li>
              <a href="https://dieter-vanderzwalmen.github.io/portfolio/Dieter_Van_der_Zwalmen.pdf"
                target="_blank">
                <FontAwesomeIcon icon={faFile} className="fa-cog" />
                <a className='link'>Resume</a></a>
            </li>
            <li>
              <a href="#contact">
                <FontAwesomeIcon icon={faEnvelope} className="fa-cog" />
                <a className='link'>Contact</a> </a>
            </li>
          </ul>
        </nav>

        <div className='naam' data-aos="fade-up" data-aos-offset="-1500">
          <h1> <strong>DIETER </strong><br></br> VAN DER ZWALMEN</h1>
          <h4> Applied informatics student at&nbsp;<strong>UCLL</strong></h4>

        </div>

      
        <a href='#projects' className={isClicked ? "display-none" : ""} onClick={handleClick} >
          <div class="drop-down scrollDown"></div>
        </a>
        
      </header>
      {/* <Divider color="wit"></Divider>  */}
    </div>
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