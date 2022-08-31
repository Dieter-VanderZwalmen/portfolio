



import {React, useState,useEffect} from 'react';
import {Icon} from '@iconify/react';
import Popup from 'reactjs-popup';
import PopupComponent from './PopupComponent';

import { useNavigate } from "react-router-dom";
import ModalComponentv2 from "./ModalComponentv2";

const CardFlip = (props) => {
    //flip state
    const [flip, setFlip] = useState(false);

    //is flipped state
    const [isFlipped, setIsFlipped] = useState("is-flipped");
    const [isHovering, setIsHovering] = useState(false);
    
    // const card = document.querySelector('.card_inner');

    // card.addEventListener('click', function () {
    //     card.classList.toggle('is-flipped');
    // });

    //set flip
    const flipCard = (props) => {
        setFlip(!flip);
    }

    // when the page is loaded flip the card after 2 seconds
    useEffect(() => {
        setTimeout(() => {
        flipCard();
        }, 2000);
    }
    , [])

    const handleMouseOver = () => {
       // console.log("mouse over" + isHovering);
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        //console.log("mouse out" + isHovering);
        setIsHovering(false);
    }

    const goToLink = (path) =>{
        window.location.href = path + "test";

    }



    return ( 
        <div className='cardContainer'>
        <div class="card" onClick={() => flipCard()} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            <div class={`card__inner`} >
                 <div class="card__face card__face--front">
                    <div className='logo-title'>
                    <center>< Icon icon={props.img} style={{ color: 'white'}} /></center>
                    
                    <h2>{props.title}</h2>
                    {/* hr with the className="white" */}
                    </div>
                    <hr className="white"></hr>


                         <div className='description'>
                                <p>{props.text}</p>
                         </div>
                </div>
               
            </div> 
            
         </div>

         {/* <a className='btn btn-primary' href={props.link}>Demo</a> */}
         {/* <PopupComponent></PopupComponent> */}
         <ModalComponentv2 data-aos="fade-up"  img = {props.img} title = {props.title}></ModalComponentv2>
        </div>
        
    );
}

export default CardFlip



    
    // < img src = { props.img } alt = "" class="pp" />