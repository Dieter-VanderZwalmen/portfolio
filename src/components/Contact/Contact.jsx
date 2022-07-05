import mail from '../../assets/mail.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import CardComponent from './CardComponent';
const Contact = () => {
    //state for info with default value = "default"
    
    return (

        <>




            <div className='cards' >
                <CardComponent title="Mail" text="link naar mail dieter.vdz@gmail.com" src={mail} trigger="morph" link="https://github.com/Dieter-VanderZwalmen/Minesweeper" />
                <CardComponent title="Linkedin" text="in c#" src={linkedin} trigger="morph" link="https://github.com/Dieter-VanderZwalmen/Minesweeper" />
                <CardComponent title="Github" text="al mijn repos zijn hier te vinden" src={github} trigger="morph" link="https://github.com/Dieter-VanderZwalmen/Huffman" />
                





            </div>

           


        </>
    )

}


export default Contact