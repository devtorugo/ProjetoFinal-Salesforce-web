import React from 'react';
import './styles.css';

const TesteGratis = () => {
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
                <input type="text" id="nome" name="nome" />
                <label htmlFor="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" name="sobrenome" />
                <label htmlFor="email">Email corporativo:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" />
                <label htmlFor="tamanho-empresa">Tamanho da empresa:</label>
                <input type="text" id="tamanho-empresa" name="tamanho-empresa" />
                <label htmlFor="pais">País/Região:</label>
                <input type="text" id="pais" name="pais" />
                <label htmlFor="idioma">Idioma:</label>
                <input type="text" id="idioma" name="idioma" />
                <button className="botao">INICIAR TESTE GRATUITO</button>
            </div>
        </div>
    );
};

export default TesteGratis;
