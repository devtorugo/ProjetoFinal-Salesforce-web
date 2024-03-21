import React from 'react';
import './styles.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button className="login-button">Fazer Login</button>
                <div>
                    <input type="checkbox" />
                    <label>Lembrar-me</label>
                </div>
            </div>
        </div>
    );
};

export default Login;
