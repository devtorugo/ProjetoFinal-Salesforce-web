import React from 'react';
import './styles.css';
import Link from 'next/link';


const Footer = () => {
    
    return (
        <footer>
           <Link href={'/participantes'}><button className='botaoFooter'>Participantes</button></Link>
        </footer>
    );
};

export default Footer;