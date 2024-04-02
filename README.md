
# Projeto de Monitoramento de Cliques em uma Página Web

Este projeto consiste em uma aplicação web que monitora cliques do usuário e gera um heatmap (mapa de calor) com base nos dados coletados. A seguir, é apresentado um guia básico sobre o projeto.

## Visão Geral

A aplicação é desenvolvida utilizando a biblioteca React.js para o frontend e JavaScript para o backend. O projeto inclui uma página web com cabeçalho, conteúdo, rodapé e um componente responsável pelo monitoramento dos cliques. Os dados de clique são coletados e armazenados em formato CSV para posterior análise e geração do heatmap.

## Componentes

### Header

Componente que exibe o cabeçalho da página, contendo o logotipo da empresa e botões de login e teste grátis.

### Footer

Componente que exibe o rodapé da página, contendo um botão para acessar a página de participantes.

### Conteúdo

Componente que apresenta o conteúdo principal da página, incluindo texto, botões e imagens promocionais.

### Login

Componente responsável pela interface de login do usuário.

### Participantes

Componente que exibe uma lista de participantes com suas respectivas imagens e informações.

### Teste Grátis

Componente que exibe informações sobre o teste gratuito da aplicação CRM e um formulário para registro de interesse.

### RootLayout

Componente de layout principal que engloba todos os outros componentes e define a estrutura básica da página.

## Funcionalidades

- **Monitoramento de cliques:** Utiliza um componente para rastrear os cliques do usuário na página.
- **Geração de heatmap:** Os dados de cliques são processados e utilizados para gerar um mapa de calor, mostrando as áreas mais clicadas da página.
- **Exportação de dados:** Os dados de cliques são exportados em formato CSV para permitir análises adicionais.

## Como Usar

1. Clone o repositório para sua máquina local.
2. Instale as dependências necessárias executando `npm install`.
3. Inicie a aplicação com `npm start`.
4. Interaja com a página web normalmente e os cliques serão registrados automaticamente.
5. Ao finalizar a sessão, os dados de cliques serão exportados para um arquivo CSV automaticamente.
6. Analise os dados exportados e gere o heatmap conforme necessário.


Este projeto foi desenvolvido por Victor Hugo Zambelli.

Para mais informações ou suporte, entre em contato pelo email: victorzarbesugmail.com
