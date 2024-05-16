import NovidadeCard from './novidadesCard';
import ProductCard from './novidadesCard'
import "./styles.css";
 
 
const Novidades = ()=> {
    return(
        <>
           <div className="novidades">
                <h2 className="text-novi">O que há de novo na Salesforce</h2>
                <div className="novidade-box">
                        <NovidadeCard
                            image='/image1.webp'
                            title='Conheça a Salesforce Starter: o pacote de CRM simples e poderoso'
                          
                        ></NovidadeCard>
                        <ProductCard
                            image='/image2.webp'
                            title='Encontre uma solução de IA adaptada às suas necessidades de negócios.'
                           
                        ></ProductCard>
                   
                        <NovidadeCard
                            image='/image3.webp'
                            title='Expanda sua pequena empresa com um CRM projetado para você.'
                          
                        ></NovidadeCard>
                   
                </div>
           </div>
        </>
    )
}
 
export default Novidades