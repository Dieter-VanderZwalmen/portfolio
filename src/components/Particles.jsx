import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

import useWindowDimensions from "./useWindowDimensions";

const ParticlesBlackDots = (props) => {


    const { height, width } = useWindowDimensions();
    //create variable named linkLength


    //console log the height and width of the window


    const particlesInit = (main) => {
        //console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        //console.log(container);
    };
   
        return (



            <Particles


                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: false,


                    background: {
                        color: {
                            value: "#242424",
                        },
                    },
                    fpsLimit: 25,
                    interactivity: {
                        events: {
                            // onClick: {
                            //     enable: false,
                            //     mode: "push",
                            // },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 100,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#00b7ff",
                        },
                        links: {
                            color: "#8f8f8f",
                            distance: props.distance,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: false,
                                value:20,
                            },
                            value: props.aantal,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}

            />
        );
    
}
    export default ParticlesBlackDots;
