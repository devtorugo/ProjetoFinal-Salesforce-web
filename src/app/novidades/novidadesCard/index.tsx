import React from 'react';
import './styles.css';
import NovidadesCard from './interfaces';
import Image from 'next/image';

const NovidadeCard = (props: NovidadesCard) => {
  return (
    <>
      <div className="cardnovi">
        <div className="flex justify-center">
          <Image className="novidadesImg" src={props.image} width={250} height={200} alt="" />
        </div>
 
        <div className="novidades-content">
          <h3>{props.title}</h3>
          <button className='link-conheca'>Conheça agora</button> {/* Adicionando a classe "link-conheca" ao botão */}
        </div>
      </div>
    </>
  );
};
 
export default NovidadeCard;
