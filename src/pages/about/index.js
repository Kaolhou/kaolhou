import './index.css'
import github from '../../media/github.png'
import instagram from '../../media/instagram.png'
import twitter from '../../media/twitter.png'
import twitch from '../../media/twitch-55.png'
import gmail from '../../media/gmail.png'
import linkedin from '../../media/linkedin.png'

//devido a um erro de estilização tirei a importação para poder dar classes diferentes
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
function BoxContainer(props){
    return(
        <div className="card-conteiner">
            {props.children}
        </div>
    )
}

function ItemConteiner(props){
    useEffect(()=>{
        Aos.init({duration:1500})
    },[])
    return(
        <a href={props.link} target='_blank' rel='NOREFERRER' data-aos='fade-up' >
            <div className="cardA" >
                <div className="imgBoxA">
                    <img src={props.url} alt="aoba" className="imgImage drag"/>
                </div>
                <div className="card-contentA">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </a>
    )
}

function About(){
    return(
        <div id="about-container">
            <h1>Redes Sociais e Contato</h1>
            <BoxContainer>
                <ItemConteiner
                    url={github}
                    title='Github'
                    link='https://github.com/Kaolhou'
                />
                <ItemConteiner
                    url={linkedin}
                    title='Linkedin'
                    link='https://www.linkedin.com/in/andremrocha-3ab925193/'
                />
                <ItemConteiner
                    url={instagram}
                    title='Instagram'
                    link='https://www.instagram.com/andre._.mendess/'
                />
                <ItemConteiner
                    url={twitter}
                    title='Twitter'
                    link='https://twitter.com/Kaolhou'
                />
                <ItemConteiner
                    url={twitch}
                    title='Twitch'
                    link='https://www.twitch.tv/kaolhou'
                />
                <ItemConteiner
                    url={gmail}
                    title='E-mail'
                    content='xdroid42@gmail.com'
                />
            </BoxContainer>
        </div>
    )
}
export default About