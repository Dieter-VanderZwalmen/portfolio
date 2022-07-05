import ReactTypingEffect from 'react-typing-effect';

const TextComponent = (props) => {
    const infoArray = new Map([
        ["default", "klik op een vakje om er meer informatie over te zien"],
        ["Studies", "deze text gaat over mijn studies lorem ipsum"],
        ["dit ben ik", "deze text gaat meer vertellen over mezelf lorem ipsum"],
        ["Contacteer me", "Deze text gaat meer vertellen over hoe je me kan contacteren"]
    ]);
    return (

        <div className='extraUitleg'>
            <h1> {props.info}  </h1>
            <hr></hr>
            <p> {props.info}</p>
            {/* <ReactTypingEffect
                text={infoArray.get(props.info)} speed="20" eraseDelay="100000000000000" eraseSpeed="100000000000000000"></ReactTypingEffect> */}

        </div>
    )

}

export default TextComponent