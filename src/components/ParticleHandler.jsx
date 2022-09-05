import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

import useWindowDimensions from "./useWindowDimensions";
import ParticlesBlackDots from "./Particles";
const ParticlesHandler = () => {

    const { height, width } = useWindowDimensions();
    //create variable named linkLength
    const [linkLength, setLinkLength] = useState([150]);
    const [amount, setAmount] = useState([70]);

    //console log the height and width of the window
    useEffect(() => {
        //switch statement
        switch (true) {
            case width > 2000:
                setLinkLength([300]);
                setAmount([200]);
                break;
            case width > 1800:
                setLinkLength([250]);
                setAmount([180]);
                break;
            case width > 1600:
                setLinkLength([200]);
                setAmount([160]);
                break;
            case width > 1400:
                setLinkLength([150]);
                setAmount([140]);
                break;
                case width > 600:
                    setLinkLength([120]);
                    setAmount([100]);
                    break;    
                    case width > 400:
                        setLinkLength([90]);
                        setAmount([70]);
                        break; 


            default:
                setLinkLength([90]);
                setAmount([50]);
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
