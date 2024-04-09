
import React from 'react';
import Link from "next/link";
import { Props } from "./interface";
import './styles.css';

const Conteudo = (props: Props) => {
    return (
        <div className="conteudoContainer">
            <h1 className="titulo">Entregue sucesso agora com o<br/> Salesforce Costumer360.</h1>
            <p className="paragrafo">O Customer 360 é nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas ROI.</p>
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
