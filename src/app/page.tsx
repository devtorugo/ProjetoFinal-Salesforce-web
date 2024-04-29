'use client'
import Link from 'next/link';
import Conteudo from './components/Conteudo';
import Produtos from './produtos';
import Novidades from './novidades';



export default function Home() {

 
  return (
    <main>
      <Conteudo texth1={"Entregue sucesso agora com o Salesforce Costumer360."}

      textp={"O customer 360 é nossa súite de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas ROI."}

      botao1={"Faça o teste grátis"}

      botao2={"Saiba mais"}

      image={"./startimage.webp"} alt={"imagem do produto"} />

      <Produtos />
      <Novidades />

         
    </main>
  );
};

