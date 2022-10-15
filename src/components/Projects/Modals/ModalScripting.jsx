import React from "react";
import { useEffect,useState } from "react";

const ModalReact = (props) => {
  
    return (
      <>
        <div className='centered-title-text'>
          <h4>Lorem Ipsum title</h4>
          <p> Lorem ipsum intro </p>
        </div>
        <div className='left'>
          <div className='text'>
            <h4> <strong>VLSM</strong> calculator</h4>
            <p> Quickly calculate all the subnets and hosts for a given network. </p>  
            <video></video>
          </div>
          
        </div>
        <div className='right'>
          <div className='text'>
            <h4> <strong>Cheat sheet</strong> </h4>
            <p> Write text without anyone being able to see the script running. </p>
          </div>
          <video></video>
          
        </div>
        
       
      </>
    );
  
  }
  
  
  export default ModalReact