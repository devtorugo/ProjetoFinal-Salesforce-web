"use client";
import React, { useState } from 'react';
import './styles.css';

const TesteGratis = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [idioma, setIdioma] = useState("");
    const [regiao, setRegiao] = useState("");
    const [termo, setTermo] = useState("");

const handleClick = async () => {
    // Validação básica dos campos
    if (!nome || !telefone || !email || !senha || !empresa || !idioma || !regiao || !termo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/testes-gratis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                nome: nome, 
                telefone: telefone, 
                email: email, 
                senha: senha, 
                empresa: empresa, 
                idioma: idioma, 
                regiao: {regiao: regiao}, 
                termo: {termo: termo}
            })
        });

        const dados = await response.json();
        console.log(dados);
        alert("Teste grátis efeutado!");
    } catch (error) {
        console.log("Ocorreu um erro");
        console.log(error);
        alert("Ocorreu um erro ao enviar o teste grátis. Por favor, tente novamente mais tarde.");
    }
};


    const handleNomeChange = (event: any) => {
        setNome(event.target.value);
    };

    const handleTelefoneChange = (event: any) => {
        setTelefone(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event: any) => {
        setSenha(event.target.value);
    };

    const handleEmpresaChange = (event: any) => {
        setEmpresa(event.target.value);
    };

    const handleIdiomaChange = (event: any) => {
        setIdioma(event.target.value);
    };

    const handleRegiaoChange = (event: any) => {
        setRegiao(event.target.value);
    };

    const handleTermoChange = (event: any) => {
        setTermo(event.target.value);
    };

    return (
        <div className="container">
            <div className="texto">
                <h2>Experimente nossa<br />solução completa de CRM<br />e vendas, grátis por 30 dias.</h2>
                <p><strong>Com o Sales Cloud Professional Edition, você tem acesso a:</strong></p>
                <ul>
                    <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
                    <li>Processos, relatórios e dashboards pré-configurados;</li>
                    <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
                    <li>Guias e outros materiais sobre boas práticas de vendas;</li>
                    <li>Onboarding integrado, treinamentos e webinars online;</li>
                    <li>Configuração de pontuação e roteamento de leads;</li>
                    <li>Ferramentas para automação de tarefas recorrentes;</li>
                    <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
                </ul>
                <h3>Dúvidas?</h3>
                <p>Entre em contato e fale com um de nossos especialistas: 0800 891 1887</p>
                <img src="/imagemteste.png" alt="" />
            </div>
            <div className="formulario">
                <label htmlFor="nome">Nome:</label>
                <input id="nome" onChange={handleNomeChange} type="json"/>

                <label htmlFor="telefone">Telefone:</label>
                <input id="telefone" onChange={handleTelefoneChange} type="json" />

                <label htmlFor="email">Email corporativo:</label>
                <input id="email" onChange={handleEmailChange} type="json" />

                <label htmlFor="senha">Senha:</label>
                <input id="senha" onChange={handleSenhaChange} type="json"/>

                <label htmlFor="empresa">Empresa:</label>
                <input id="empresa" onChange={handleEmpresaChange} type="json" />
                
                <label htmlFor="idioma">Idioma:</label>
                <input id="idioma" onChange={handleIdiomaChange} type="json"  />

                <label htmlFor="regiao">País/Região:</label>
                <input id="regiao" onChange={handleRegiaoChange} type="text"/>

                <label htmlFor="termo">Aceitar Termo: "true/false"</label>
                <input id="termo" onChange={handleTermoChange} type="text"/>

                <button onClick={handleClick} className="botao">INICIAR TESTE GRATUITO</button>
            </div>
        </div>
    );
};

export default TesteGratis;
