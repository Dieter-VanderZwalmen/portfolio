import React from "react";
import { useEffect,useState } from "react";

const ModalReact = (props) => {
    // const [imageListFlooding, setImageListFlooding] = useState([Flooding, NoFlooding]);
    // const [indexFlooding, setIndexFlooding] = useState(0);
  
    // const [imageListSize, setImageListSize] = useState([boardSize1, boardSize2, boardSize3, boardSize4]);
    // const [indexSize, setIndexSize] = useState(0);
  
  
  
    const handleNext = (index, type) => {
      switch (type) {
  
  
        // case 'flooding':
        //   setIndexFlooding(index);
        //   break;
        // case 'size':
        //   setIndexSize(index);
        //   break;
        // default:
        //   console.log("default in handleNext. Gekozen type: " + type);
  
        //   break;
      }
  
    }
  
  
  
  
  
  
  
  
  
  
    return (
      <>
        <div className='centered-title-text'>
          <h4>My portfolio website</h4>
          <p>This site was made with React, but <strong>why</strong> did I choose react? <strong>what</strong> is the reason for the site, <strong>how</strong> was it accomplished and lastely a <strong>self reflection</strong> </p>
        </div>
        <div className='left'>
          <div className='text'>
            <h4> <strong>Why</strong></h4>
            <p> Why did I choose react.
              1 The component based rendering.
              2 The use of hooks.
              4 The use of props.
              5 The use of single page websites.
              9 Endless possible imports like aos and icons.
              10 Information available.
              
            </p>
          </div>
          <div className='image-container '>
            {/* <img src={SettingsScreen} alt="Settings screen" className='center' /> */}
          </div>
        </div>
        <div className='right'>
          <div className='text'>
            <h4> <strong>What</strong></h4>
            <p> very quick way to get an overview, more x than a resume, test myself, standout </p>
          </div>
          <div className='image-container '>
            {/* <img src={PlayScreen} alt="Play screen" className='center' /> */}
          </div>
          
        </div>
        <div className='left'>
          <div className='text'>
            <h4> <strong>How</strong></h4>
            <p> cycle => Drawing,Examples,trying,Feedback from peers,Improving </p>
          </div>
          <div className='image-container '>
            {/* <img src={PlayScreen} alt="Play screen" className='center' /> */}
          </div>
          
        </div>
        <div className='left'>
          <div className='text'>
            <h4> Self <strong>Reflection</strong></h4>
            <p> What went right (aesthetics, cards, modal header, particles header) What went wrong (optimal solutions, loops for information) </p>
          </div>
          <div className='image-container '>
            {/* <img src={PlayScreen} alt="Play screen" className='center' /> */}
          </div>
          
        </div>
       
      </>
    );
  
  }
  
  
  export default ModalReact