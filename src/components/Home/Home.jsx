import programmingGif from '../../assets/programmingGif.gif';
import bucketlistGif from '../../assets/bucketlistGif.gif';
import profielfoto from '../../assets/profielfoto.jfif';
import goals from '../../assets/goals.jpg';
import thinkinghead from '../../assets/thinkinghead.webp';
const Contact = () => {
    //state for info with default value = "default"

    return (

        <>
            <h4> Deze site is nog niet af! </h4>
            <div className="info info_left">
                <div className="left">
                    <h3> About Me</h3>
                    <hr></hr>
                    <p>Interested in everything related to computer hardware or software.
                        Expanding my knowledge in higher education combined with little projects at home like
                        building and repairing computers, setting up networks and writing scripts.
                        I combine this with all my hobbies to experience each day to its fullest.</p>
                </div>
                <div className="right">
                    <img src={profielfoto} alt=" guy programming gif" style={{ width: '300px' }} />

                </div>
            </div>

            <div className="info info_right">
                <div className="left">
                    <img src={goals} alt="Bucket list" style={{ width: '350px' }} />
                </div>
                <div className="right">
                    <h3> My Goal</h3>
                    <hr></hr>
                    <p>beter worden. Veel bijleren. gezond werk-leven balans. relaties opbouwen en int algemeen groeien als persoon</p>
                </div>

            </div>

            <div className="info info_left">
                <div className="right">
                    <h3> Talents</h3>
                    <hr></hr>
                    <p>beter worden. Veel bijleren. gezond werk-leven balans. relaties opbouwen</p>
                </div>
                <div className="left">
                    <img src={thinkinghead} alt="Bucket list" style={{ width: '350px' }} />
                </div>


            </div>
            <div className="info info_right">
                <div className="left">
                    <img src={bucketlistGif} alt="Bucket list" />
                </div>
                <div className="right">
                    <h3> Interests</h3>
                    <hr></hr>
                    <p>beter worden. Veel bijleren. gezond werk-leven balans. relaties opbouwen</p>
                </div>

            </div>


        </>
    )

}


export default Contact