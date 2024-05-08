"use client"
import React, { useState } from 'react';
import './styles.css';

const TesteGratis = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [regiao, setRegiao] = useState("");
    const [idioma, setIdioma] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const [resposta, setResposta] = useState("");

    const handleClick = async () => {
        setErro("");
        setResposta("");

        // Validar campos obrigatórios
        if (!nome || !sobrenome || !email || !telefone || !empresa || !regiao || !idioma) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/testes-gratis", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome, sobrenome, email, telefone, empresa, regiao, idioma })
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                setErro(errorMessage);
            } else {
                const successMessage = await response.text();
                setResposta(successMessage);
            }
        } catch (error) {
            console.error("Erro ao fazer a solicitação:", error);
            setErro("Ocorreu um erro ao processar sua solicitação.");
        }

        setLoading(false);
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
                <input id="nome" onChange={(e) => setNome(e.target.value)} type='text' className="nome" />

                <label htmlFor="sobrenome">Sobrenome:</label>
                <input id="sobrenome" onChange={(e) => setSobrenome(e.target.value)} type="text" className="sobrenome" />

                <label htmlFor="email">Email corporativo:</label>
                <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" className="email" />

                <label htmlFor="telefone">Telefone:</label>
                <input id="telefone" onChange={(e) => setTelefone(e.target.value)} type="tel" className="telefone" />

                <label htmlFor="empresa">Empresa:</label>
                <input id="empresa" onChange={(e) => setEmpresa(e.target.value)} type="text" className="empresa" />

                <label htmlFor="regiao">País/Região:</label>
                <input id="regiao" onChange={(e) => setRegiao(e.target.value)} type="text" className="regiao" />

                <label htmlFor="idioma">Idioma:</label>
                <input id="idioma" onChange={(e) => setIdioma(e.target.value)} type="text" className="idioma" />

                {loading ? (
                    <button className="botao" disabled>Enviando...</button>
                ) : (
                    <button onClick={handleClick} className="botao">INICIAR TESTE GRATUITO</button>
                )}

                {erro && <p className='error'>{erro}</p>}
                {resposta && <p className="success">{resposta}</p>}
            </div>
        </div>
    );
};

export default TesteGratis;
