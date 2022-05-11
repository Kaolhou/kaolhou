import './index.css'
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
            <div className="card" >
                <div className="imgBox">
                    <img src={props.url} alt="aoba" className="person drag"/>
                </div>
                <div className="card-content">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </a>
    )
}
export {BoxContainer, ItemConteiner}