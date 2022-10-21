import React from "react";
import { useEffect,useState } from "react";


import bitsNeeded from '../../../assets/Demo/Scripting/bitsNeeded.png';
import input from '../../../assets/Demo/Scripting/input.png';
import netwerken from '../../../assets/Demo/Scripting/netwerken.png';
import sorteren from '../../../assets/Demo/Scripting/sorteren.png';
import subnetMask from '../../../assets/Demo/Scripting/subnetMask.png';




const ModalScripting = (props) => {

  const [imageList, setImageList] = useState([input,sorteren, bitsNeeded, subnetMask, netwerken ]);
  const [index, setIndex] = useState(0);



  const handleNext = (index, type) => {
    switch (type) {


      case 'vlsm':
        setIndex(index);
        break;
      
      default:
        console.log("default in handleNext. Gekozen type: " + type);

        break;
    }

  }
  
    return (
      <>
        <div className="geenidee">
        <div className='left'>
          <div className='text'>
            <h4> <strong>VLSM</strong> calculator</h4>
            <p> Quickly calculate all the subnets and hosts for a given network. </p>  
            
          </div>
          <div className='buttons-left-right'>
            <button onClick={() => handleNext(0, 'vlsm')} className={index === 0 ? "Demo-button activeButton" : "Demo-button"}>Input </button>
            {/* <button onClick={() => handleNext(1, 'vlsm')} className={index === 0 ? "Demo-button activeButton" : "Demo-button"}>Sorting</button>
            <button onClick={() => handleNext(2, 'vlsm')} className={index === 0 ? "Demo-button activeButton" : "Demo-button"}>Amount of bits needed</button>
            <button onClick={() => handleNext(3, 'vlsm')} className={index === 0 ? "Demo-button activeButton" : "Demo-button"}>Subnetmask</button> */}
            <button onClick={() => handleNext(4, 'vlsm')} className={index === 1 ? "Demo-button activeButton" : "Demo-button"}>Network information</button>
          </div>
        <div className='image-container slideshow '>
          
          <img src={imageList[index]} alt="Flooding explained on the board" className='center' />
        </div>
          
        </div>
        <div className='right'>
          <div className='text'>
            <h4> <strong>C</strong>heat sheet </h4>
            <p> Write text without anyone being able to see the script running. </p>
            <h5><strong>H</strong>ow does it work?</h5>
            <p>A vbs script calls a bat script to run, both the vbs and bat script are configured to show no window so it runs without it being visible. 
            The bat script start the python script which reads all the needed information out of a text file. 
            The script can be closed by pressing f11. The answers can be shown by using f2 to print an answer, f3 to get the previous answer and f4 for the next answer.</p>
          </div>
          {/* explanation */}
          

          
        </div>
        </div>
       
      </>
    );
  
  }
  
  
  export default ModalScripting