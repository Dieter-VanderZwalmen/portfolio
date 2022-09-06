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
          <p>This site was made with React. This demo will go over serveral questions: <strong>Why</strong> did I choose react? <strong>What</strong> is the reason for the site, <strong>how</strong> was it accomplished and lastely a <strong>self reflection</strong> </p>
        </div>
        <div className='left'>
          <div className='text'>
            <h4> <strong>Why</strong></h4>
            <p> Why did I choose react.</p>
          </div>
          <div className='image-container '>
            {/* <img src={SettingsScreen} alt="Settings screen" className='center' /> */}
          </div>
        </div>
        <div className='right'>
          <div className='text'>
            <h4> <strong>P</strong>lay screen</h4>
            <p> The play screen has the minesweeper board and a play again button. </p>
          </div>
          <div className='image-container '>
            {/* <img src={PlayScreen} alt="Play screen" className='center' /> */}
          </div>
        </div>
  
       
      </>
    );
  
  }
  
  
  export default ModalReact