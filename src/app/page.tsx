
import Conteudo from "./conteudo";
import Link from 'next/link';

export default function Home() {

  const click1 = () => {
    console.log('Click 1');
  }
  const click2 = () => {
    console.log('Click 2');
  }
  const click3 = () => {
    console.log('Click 3');
  }
  return (
    <main>
      <Conteudo texth1={"Entregue sucesso agora com o Salesforce Costumer360."}

      textp={"O customer 360 é nossa súite de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas ROI."}

      botao1={"Faça o teste grátis"} onClick={click1}

      botao2={"Saiba mais"} 

      image={"./sales.png"} alt={"imagem do produto"}/>

         
    </main>
  );
};

