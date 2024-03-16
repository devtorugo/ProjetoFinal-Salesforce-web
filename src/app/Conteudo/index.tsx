
import Image from "next/image";
import './styles.css';
import React from 'react';
 
interface Props {
    texth1: string;
    textp: string;
    botao1: string;
    botao2: string;
    image: string;
    alt: string;
}
 
const Conteudo = (props : Props) => {
    return(
        <>
            <h1 className="texto1">{props.texth1}</h1>
            <p>{props.textp}</p>
            <button className="botao1">{props.botao1}</button>
            <button className="botao2">{props.botao2}</button>
            <img className="image" src={props.image} alt={props.alt}/>
        </>
    )
}
 
export default Conteudo;