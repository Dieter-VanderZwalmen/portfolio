import mail from '../../assets/mail.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import CardComponent from './CardComponent';
const Contact = () => {
    //state for info with default value = "default"
    
    return (

        <>



            <h2> Contact me</h2>
            <div className='cards' >
                <CardComponent title="Mail" text="link naar mail dieter.vdz@gmail.com" src={mail} trigger="morph" link="mailto:dieter.vdz@gmail.com" />
                <CardComponent title="Linkedin" text="in c#" src={linkedin} trigger="morph" link="https://www.linkedin.com/in/dieter-vdz/" />
                <CardComponent title="Github" text="al mijn repos zijn hier te vinden" src={github} trigger="morph" link="https://github.com/Dieter-VanderZwalmen" />
                





            </div>

           


        </>
    )

}


export default Contact