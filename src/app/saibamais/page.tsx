import React from 'react';
import './styles.css'; 

const SaibaMais = () => {
    return (
        <div className="saiba-mais-container">
           
            <div className="saiba-mais-content">
                <h2>Starter Suite</h2>
                <p>Comece a usar o CRM e veja os resultados desde o primeiro dia com o Starter Suite — o conjunto completo de ferramentas de marketing, vendas e atendimento ao cliente de que você precisa para ter sucesso. Obtenha o poder do CRM nº 1 do mundo em um pacote simplificado e fácil de usar, criado para empresas em crescimento.</p>
                
                <h3>O que você pode alcançar com o Starter Suite?</h3>
                <p>O Starter Suite permite que você organize dados rapidamente, gerencie relacionamentos com clientes e obtenha informações valiosas sobre o seu negócio. É um pacote de CRM simples, mas poderoso, fácil de configurar em questão de minutos, com login social (single sign-on) e orientação integrada.</p>

                <h3>Identifique mais leads e impulsione o crescimento.</h3>
                <p>Modelos de e-mail: Atraia clientes com modelos de e-mail personalizáveis que combinem com sua marca.</p>
                <p>Visualização prévia de e-mail.</p>
                <p>Listas Dinâmicas: Conquiste mais negócios em menos tempo.</p>

                <h3>Mantenha os clientes satisfeitos e solucione casos com eficiência.</h3>
                <p>Case Management: Ofereça uma experiência pessoal e conectada durante cada interação com uma visão de 360 ​​graus de seus clientes. Ajude sua equipe de atendimento e seus clientes a encontrar rapidamente as melhores respostas para perguntas comuns com artigos de conhecimento. Reduza a carga de sua equipe e permita que os clientes resolvam problemas com facilidade.</p>
                
                <h2>Tabela de preços do Starter Suite e Pro Suite</h2>
                <p>Descubra o produto ideal para a sua empresa:</p>
                <div className="tabela-precos">
                    <div className="pacote">
                        <h3>Starter Suite</h3>
                        <p>$25 usuário/mês USD (cobrado anualmente)</p>
                        <ul>
                            <li>E-mail marketing e análise de dados</li>
                            <li>Processos de vendas prontos para usar</li>
                            <li>Atendimento ao cliente integrado</li>
                        </ul>
                    </div>
                    <div className="pacote">
                        <h3>Pro Suite</h3>
                        <p>$100 usuário/mês USD (cobrado anualmente)</p>
                        <ul>
                            <li>Alto poder de personalização e automação</li>
                            <li>Geração de orçamentos e previsões de vendas</li>
                            <li>Comunicação aprimorada e em tempo real</li>
                        </ul>
                    </div>
                </div>
                
            
            </div>
        </div>
    );
}

export default SaibaMais;
