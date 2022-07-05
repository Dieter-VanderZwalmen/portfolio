import React from 'react'

import {  Link } from 'react-router-dom';
import { useFlip, FlipProvider } from "react-easy-flip";


const tabs = [
  { id: "", text: "Home" },
  { id: "Projects", text: "Projects" },
  { id: "Contact", text: "Contact me" },
];

const SimpelHeader = () => {
  const [selectedTab, setSelectedTab] = React.useState("home");

  const flipRootId = "flipRoot";

  useFlip(flipRootId);


  return (
    <header>
      
       
   
    
      <h1>Dieter Van der Zwalmen</h1>
    
    {/* for every tab in tabs create a link with the text of the tab and highlight the active tab */}
    <div>
    {tabs.map((tab) => (
      <Link
        key={tab.id}
        to={`/${tab.id}`}
        className={`nav-link ${selectedTab === tab.id && "active"}`}
        onClick={() => setSelectedTab(tab.id)}
      >
        {tab.text}
      </Link>
    ))}
      </div>
  
  
    </header>
  );
    
}

  
export default SimpelHeader


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


 