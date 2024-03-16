import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <div>
         <header className="header">
          <div className="logo">
            <img src="https://login.salesforce.com/img/logo214.svg" alt="" width={100} height={70}/>
        </div>
        <div className="buscador">
          <input type="text" placeholder="Buscar serviços..." />
        </div>
        <div className="botoes">
          <button className="login-botao">Login</button>
          <button className="botao-testegratis">Teste Grátis</button>
        </div>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Indústrias</a></li>
          <li><a href="#">Aprendizado</a></li>
          <li><a href="#">Suporte</a></li>
          <li><a href="#">Empresa</a></li>
        </ul>
      </nav>
        </div>
    );
};

export default Header;