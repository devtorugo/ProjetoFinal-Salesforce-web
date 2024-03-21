import React from 'react';
import './styles.css';

const Login = () => {
    return (
        <div className="login-container">
            <img src="/sales.png" alt="imagem salesforce" className="fundo-imagem" />
            <div className="login-form">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button className="login-button">Fazer Login</button>
                <label><input type="checkbox" /> Lembrar-me</label>
            </div>
        </div>
    );
};

export default Login;
