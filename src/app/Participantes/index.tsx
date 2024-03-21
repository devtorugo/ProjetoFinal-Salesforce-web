import React from 'react';
import './styles.css';
import Link from "next/link";

const Participantes = () => {
    return(
        <div className="participantesContainer">
            <div className="aluno">
                <img src="/imagem1.jpeg" alt="Imagem Aluno 1" />
                <div>
                    <div className="nomeAluno">Victor Hugo Zambelli</div>
                    <div className="rmAluno">RM: 553108</div>
                </div>
            </div>
            <div className="aluno">
                <img src="imagem2.jpeg" alt="Imagem Aluno 2" />
                <div>
                    <div className="nomeAluno">Vinicius Malavia Lorenzetti</div>
                    <div className="rmAluno">RM: 553121</div>
                </div>
            </div>
            <div className="aluno">
                <img src="imagem3.jpeg" alt="Imagem Aluno 3" />
                <div>
                    <div className="nomeAluno">Jõao Pedro Villagra</div>
                    <div className="rmAluno">RM: 553343</div>
                </div>
            </div>
        </div>
    );
};

export default Participantes;
