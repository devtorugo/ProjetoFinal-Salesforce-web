
import React from 'react';
import Link from "next/link";
import { Props } from "./interface";
import './styles.css';

const Conteudo = (props: Props) => {
    return (
        <div className="conteudoContainer">
            <h1 className="titulo"> Experimente o <br></br> Salesforce Starter <br></br> Suite <br></br> gratuitamente.</h1>
            <p className="paragrafo">Reúna marketing, vendas e atendimento em um único <br></br> aplicativo. Experimente o Salesforce 
            Starter Suite hoje<br></br> mesmo. Não há nada para instalar. Não é necessário<br></br> cartão de crédito.</p>
            <div className="botoesContainer">
                <Link href={"/testegratis"}><button className="botao1">Faça o teste grátis</button></Link>
                <button className="botao2">Saiba mais</button>
            </div>
            <div className="imagemContainer">
                <img className="image" src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}

export default Conteudo;
