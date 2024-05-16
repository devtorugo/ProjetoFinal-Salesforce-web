import ProductCard from './produtoCard'
import './styles.css';
 
 
const Produtos = ()=> {
    return(
        <>
           <div className="products">
                <h2 className="text-center">Saiba como a Salesforce ajuda você a
                <br></br>
                trabalhar de maneira mais inteligente e a crescer com mais rapidez</h2>
                <div className="product-box">
                   
                        <ProductCard
                            image='/pequenasempresas.webp'
                            title="Pequenas Empresas"
                            desc="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."
                        ></ProductCard>
                        <ProductCard
                            image='/vendas.webp'
                            title="Vendas"
                            desc="Feche mais negócios e acelere o crescimento com o CRM nº1."
                        ></ProductCard>
                   
                        <ProductCard
                            image='/atendimento.webp'
                            title="Atendimento"
                            desc="Gaste menos com serviços escaláveis que os clientes adoram."
                        ></ProductCard>
                        <ProductCard
                            image='/todos.webp'
                            title="Veja todos os produtos"
                            desc="Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato."
                        ></ProductCard>
                   
                </div>
           </div>
        </>
    )
}
 
export default Produtos