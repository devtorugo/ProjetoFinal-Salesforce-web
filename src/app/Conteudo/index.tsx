
import Image from "next/image";
import './styles.css';
import React from 'react';
import Link from "next/link";
import { Props } from "./interface";
 

 
const Conteudo = (props : Props) => {
    return(
        <>
            <h1 className="texto1">{props.texth1}</h1>
            <p>{props.textp}</p>
            <Link href={"/testegratis"}><button className="botao1">{props.botao1}</button></Link>
            <button className="botao2">{props.botao2}</button>
            <img className="image" src={props.image} alt={props.alt}/>
        </>
    )
}
 
export default Conteudo;