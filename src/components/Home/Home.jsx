import programmingGif from '../../assets/programmingGif.gif';
import bucketlistGif from '../../assets/bucketlistGif.gif';
import profielfoto from '../../assets/profielfoto.jfif';
import goals from '../../assets/goals.jpg';
import thinkinghead from '../../assets/thinkinghead.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    //state for info with default value = "default"

    return (

        <>
            <div class="text-center my-5" data-aos="fade-up">
                <img class="img-fluid rounded-circle mb-4" src={profielfoto} style={{ height: "150px", width: "150px" }} alt="..." />
                <h1 class="text-black fs-3 fw-bolder textShadow">Dieter Van der Zwalmen</h1>
                <p class="text-black-50 mb-0  ">Petit slogan ofzo</p>
            </div>
            <h4> Deze site is nog niet af! </h4>
            <p> de kleuren, text, fotos en de knoppen in de contacteer me pagina moeten aangepast worden </p>
                <p>misschien ga ik de projects pagina nog opsplitsen ook is de site nog niet responsive</p>

            <div className="info" data-aos="fade-up">
                <div className="left">
                    <h3> About Me</h3>
                    <hr></hr>
                    <p>Interested in everything related to computer hardware or software.
                        Expanding my knowledge in higher education combined with little projects at home like
                        building and repairing computers, setting up networks and writing scripts.
                        I combine this with all my hobbies to experience each day to its fullest.</p>
                </div>
                <div className="right">

                </div>
            </div>




            


        </>
    )

}


export default Contact