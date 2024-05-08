import React from 'react';
import './styles.css';

const DeveloperPage: React.FC = () => {
  return (
    <div className="developer-page">
      <h1>Desenvolvedores</h1>
      <div className="developer-list">
        <div className="developer">
          <img src="imagem1.jpeg" alt="Desenvolvedor 1" />
          <p>Victor Hugo Zambelli - RM: 553108</p>
        </div>
        <div className="developer">
          <img src="imagem2.jpeg" alt="Desenvolvedor 2" />
          <p>Vinicius Malavia Lorenzetti - RM: 553121</p>
        </div>
        <div className="developer">
          <img src="imagem3.jpeg" alt="Desenvolvedor 3" />
          <p>João Pedro Fontana - RM: 553343</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
