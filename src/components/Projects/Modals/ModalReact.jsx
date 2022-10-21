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
        <div className="geenidee">
        <div className='left'>
          <div className='text'>
            <h4> <strong>W</strong>hy</h4>
            <p> The biggest reason I chose React is for the Single-Page application. My focus was an easy to navigate simpel website. The fact that React is so widely used makes it easy to find help, documentation and libraries. 
              
      
            </p>
          </div>
          <div className='image-container '>
            {/* <img src={SettingsScreen} alt="Settings screen" className='center' /> */}
          </div>
        </div>
        <div className='right'>
          <div className='text'>
            <h4> <strong>W</strong>hat</h4>
            <p> Get a very quick overview of all my projects, what technologies I have used and how to contact me. </p>
          </div>
          <div className='image-container '>
            {/* <img src={PlayScreen} alt="Play screen" className='center' /> */}
          </div>
          
        </div>
        <div className='left'>
          <div className='text'>
            <h4> <strong>H</strong>ow</h4>
            <p> I worked in little cycles. Where I visualized the idea, realized it followed by a reflection and improved upon the idea if I was satisfied.  </p>
          </div>
          <div className='image-container '>
            {/* <img src={PlayScreen} alt="Play screen" className='center' /> */}
          </div>
          
        </div>
        <div className='left'>
          <div className='text'>
            <h4>  <strong>S</strong>elf reflection</h4>
            <p> Personally I am very proud of the aesthetics but I am having trouble creating a short demo for each project.</p>
          </div>
          <div className='image-container '>
            {/* <img src={PlayScreen} alt="Play screen" className='center' /> */}
          </div>
          
        </div>
        </div>
       
      </>
    );
  
  }
  
  
  export default ModalReact