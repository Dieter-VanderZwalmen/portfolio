



import {React, useState,useEffect} from 'react';
import {Icon} from '@iconify/react';

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
        console.log("mouse over" + isHovering);
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        console.log("mouse out" + isHovering);
        setIsHovering(false);
    }



    return ( 
                
        <div class="card" onClick={() => flipCard()} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            <div class={`card__inner ${flip ? "" : "is-flipped"}`} >
                 <div class="card__face card__face--front">
                    <center>< Icon icon={props.img} style={{ color: 'white', marginTop: "10%" }} /></center>
                    
                    <h2>{props.title}</h2>
                    <div >
                        {isHovering ? <p className='white-text'>Click me!</p> : ""}
                    </div>
                    
                    {props.githublink !== undefined ? <a href={props.githublink} target="_blank" class="btn btn-primary">Source code</a> : ""} 
                </div>
                <div class="card__face card__face--back">
                    <div class="card__content">
                        <div class="card__header">
                            
                            <h2>{props.title}</h2>
                        </div>
                        <div class="card__body">
                            <h3>{props.subtitle}</h3>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div> 
            
         </div>
    );
}

export default CardFlip



    
    // < img src = { props.img } alt = "" class="pp" />