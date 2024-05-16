import React from 'react';
import './styles.css';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='https://login.salesforce.com/img/logo214.svg' alt="" width={100} height={70}/>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Indústrias</a></li>
                    <li><a href="#">Aprendizado</a></li>
                    <li><a href="#">Suporte</a></li>
                    <li><a href="#">Empresa</a></li>
                </ul>
            </nav>
            <div className='content'>
                <div className='buscador'>
                    <input type="text" placeholder='Buscar serviços...' />
                </div>
                <div className='botoes'>
                    <Link href={'/login'}><button className="login-botao">Login</button></Link>
                    <Link href={'/testegratis'}><button className='botao-testegratis'>Teste Grátis</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
