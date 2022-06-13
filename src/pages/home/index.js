import './index.css'
import img from '../../media/andre.jpg'
import react from '../../media/react-original.svg'
import css from '../../media/css3-original.svg'
import html from '../../media/html5-original.svg'
import express from '../../media/express-original.svg'
import js from '../../media/javascript-original.svg'
import node from '../../media/nodejs-original.svg'
import pgsql from '../../media/postgresql-original.svg'
import sequelize from '../../media/sequelize-original.svg'
import ts from '../../media/typescript-original.svg'
import csharp from '../../media/csharp-original.svg'
import java from '../../media/java-original.svg'
import python from '../../media/python-original.svg'
import tailwind from '../../media/tailwindcss-plain.svg'
import {ItemConteiner, BoxContainer} from '../../components/cards/index'



function Main(){
    return(
        <div className="home-conteiner">
            <div className='content'>
                <div className="data">
                    <h1>Olá!</h1>
                    <p>
                        Meu nome é André Mendes da Rocha, sou um desenvolverdor Júnior, moro em São Paulo - SP no Brasil, e me formei no curso de Informática para a Internet (período pré-integral) na <a href="https://www.etecpqbelem.com.br" target='_blank' rel='NOREFERRER' className='und'>Etec Parque Belém</a>, local de início dos estudos. Atualmente estou graduando o curso bacharelado de Ciência da Computação na <a href="https://www.impacta.edu.br" target='_blank' rel="noreferrer" className="und">Faculdade Impacta Tecnologia</a> (período matutino), onde estou revendo conhecimentos de lógica de programação na linguagem Python (Atualizado 10/05), tenho interesse maior em javascript e  desenvolvimento web (front-end ou back-end). Sou PCD H54.4 (Cegueira em um olho), C69.6 (Neoplasia maligna de órbita), S05 (Traumatismo do olho e da órbita ocular)
                    </p>
                </div>
                <div className='img'>
                    <img src={img} alt="foto" className='drag' />
                </div>
            </div>
            <div className='languages'>
                <h1 className="h1this">Conhecimentos</h1>
                <BoxContainer>
                    <ItemConteiner
                        url={css}
                        title="CSS3"
                        content="Avançado"
                        link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                    />
                    <ItemConteiner
                        url={html}
                        title="HTML5"
                        content="Avançado"
                        link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                    />
                    <ItemConteiner
                        url={js}
                        title="JavaScript"
                        content="Avançado"
                        link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                    />
                    <ItemConteiner
                        url={ts}
                        title="TypeScript"
                        content="Intermediário"
                        link="https://www.typescriptlang.org/docs/"
                    />
                    <ItemConteiner
                        url={node}
                        title="Node.js"
                        content="Intermediário"
                        link="https://nodejs.org/pt-br/docs/"
                    />
                    <ItemConteiner
                        url={pgsql}
                        title="PostgreSQL"
                        content="Básico"
                        link="https://www.postgresql.org/docs/"
                    />
                    <ItemConteiner
                        url={sequelize}
                        title="Sequelize"
                        content="Intermediário"
                        link="https://sequelize.org/docs/v6/getting-started/"
                    />
                    <ItemConteiner
                        url={express}
                        title="Express.js"
                        content="Intermediário"
                        link="https://expressjs.com"
                    />
                    <ItemConteiner
                        url={react}
                        title="React.js"
                        content="Intermediário"
                        link="https://reactjs.org/docs/getting-started.html"
                    />
                    <ItemConteiner
                        url={java}
                        title="Java"
                        content="Estudando"
                        link="https://www.oracle.com/br/java/technologies/javase-jdk8-doc-downloads.html"
                    />
                    <ItemConteiner
                        url={python}
                        title="Python"
                        content="Estudando"
                        link="https://docs.python.org/pt-br/3/tutorial/"
                    />
                    <ItemConteiner
                        url={tailwind}
                        title="Tailwind"
                        content="Estudando"
                        link="https://tailwindcss.com/docs/installation"
                    />
                    <ItemConteiner
                        url={csharp}
                        title="C#"
                        content="Interessado"
                        link="https://docs.microsoft.com/pt-br/dotnet/csharp/"
                    />
                </BoxContainer>
            </div>
        </div>
    )
}
export default Main