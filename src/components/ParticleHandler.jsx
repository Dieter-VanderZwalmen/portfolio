import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

import useWindowDimensions from "./useWindowDimensions";
import ParticlesBlackDots from "./Particles";
const ParticlesHandler = () => {

    const { height, width } = useWindowDimensions();
    //create variable named linkLength
    const [linkLength, setLinkLength] = useState([150]);

    //console log the height and width of the window
    useEffect(() => {
        //switch statement
        switch (true) {
            case width > 2000:
                setLinkLength([300]);
                break;
            case width > 1800:
                setLinkLength([250]);
                break;
            case width > 1600:
                setLinkLength([200]);
                break;
            case width > 1400:
                setLinkLength([150]);
                break;
                



            default:
                setLinkLength([150]);
                break;
        }

        console.log(linkLength);
        console.log(width);
    }, [width]);


    return (
        <>
            <ParticlesBlackDots distance={linkLength} />

        </>
    );

}

export default ParticlesHandler;
