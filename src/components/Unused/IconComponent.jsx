// import useEffect from 'react';
import React, { useState, useEffect } from 'react';


/* component called cardC that takes prop argument */

{/* <Card.Img variant="top" src={props.img} style={{ width: '50%', margin: 'auto' }} /> */ }

const IconComponent = (props) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://cdn.lordicon.com/xdjxvujz.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (     
        <lord-Icon
        
            src={props.src}
            trigger={props.trigger}
            //style centered
            style={{ width: '35%', height: '35%' }} >

        </lord-Icon>
    )

}


export default IconComponent