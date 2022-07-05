



import {React, useState} from 'react';


const CardFlip = (props) => {
    //flip state
    const [flip, setFlip] = useState(false);
    
    // const card = document.querySelector('.card_inner');

    // card.addEventListener('click', function () {
    //     card.classList.toggle('is-flipped');
    // });

    //set flip
    const flipCard = (props) => {
        setFlip(!flip);
    }

    return ( 
                
        <div class="card" onClick={() => flipCard()}>
            
            <div class={`card__inner ${flip ? "is-flipped" : ""}`} >
                 <div class="card__face card__face--front">
                    <center><img src={props.img} alt="" class="pp" /></center>
                    <h2>{props.title}</h2>
                    
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