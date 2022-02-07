import './index.css'
import img from '../../media/image.jpeg'
import react from '../../media/react-original.svg'
import css from '../../media/css3-original.svg'
import html from '../../media/html5-original.svg'
import express from '../../media/express-original.svg'
import js from '../../media/javascript-original.svg'
import node from '../../media/nodejs-original.svg'
import pgsql from '../../media/postgresql-original.svg'
import sequelize from '../../media/sequelize-original.svg'
import ts from '../../media/typescript-original.svg'
import {Langs, LangItem} from '../../components/body/index'


function Main(){
    return(
        <div className="home-conteiner">
            <div className='content'>
                <div className="data">
                    <h1>Olá</h1>
                    <p>
                        Olá! Meu nome é André Mendes da Rocha, sou um desenvolverdor JavaScript Júnior, moro em
                        São Paulo - SP no Brasil, e tive meus estudos de programação iniciados em 2019 na Etec Parque
                        Belém no curso técnico de Informática para a Internet (período pré-integral), estou atualmente
                        aprendendo TypeScript e estudando para prestar Graduação no Curso de Ciência da Computação na
                        Impacta.
                    </p>
                </div>
                <div className='img'>
                    <img src={img} alt="foto"  />
                </div>
            </div>
            <div className='languages'>
                <h1 className="h1this">Conhecimentos</h1>
                <Langs>
                    <LangItem
                        url={css}
                        lang="CSS3"
                        level="Intermediário"
                    />
                    <LangItem
                        url={html}
                        lang="HTML5"
                        level="Avançado"
                    />
                    <LangItem
                        url={js}
                        lang="JavaScript"
                        level="Intermediário"
                    />
                    <LangItem
                        url={ts}
                        lang="TypeScript"
                        level="Estudando"
                    />
                    <LangItem
                        url={node}
                        lang="Node.js"
                        level="Intermediário"
                    />
                    <LangItem
                        url={pgsql}
                        lang="PostgreSQL"
                        level="Básico"
                    />
                    <LangItem
                        url={sequelize}
                        lang="Sequelize"
                        level="Intermediário"
                    />
                    <LangItem
                        url={express}
                        lang="Express.js"
                        level="Intermediário"
                    />
                    <LangItem
                        url={react}
                        lang="React.js"
                        level="Intermediário"
                    />
                </Langs>
            </div>
        </div>
    )
}
export default Main