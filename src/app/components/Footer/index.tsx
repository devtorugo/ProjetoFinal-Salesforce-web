import Image from "next/image";
import "./styles.css"
 
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-section">
                    <Image src="https://login.salesforce.com/img/logo214.svg" alt="logo salesforce" width={90} height={70}/>
                    
                </div>
                <div className="footerpesquisas">
                    <div className="footer-section">
                        <p>Ainda não conhece a Salesforce?</p>
                        <a href="">O que é CRM?</a>
                        <a href="">O que é a Salesforce?</a>
                        <a href="">O que é computação na nuvem?</a>
                        <a href="">Histórias de Clientes</a>
                    </div>
                    <div className="footer-section">
                        <p>Sobre a Salesforce</p>
                        <a href="">Nossa história</a>
                        <a href="">Blog</a>
                        <a href="">Carreiras</a>
                        <a href="">Segurança</a>
                    </div>
                    <div className="footer-section">
                        <p>Links populares</p>
                        <a href="">Novos recursos e lançamentos</a>
                        <a href="">Salesforce para pequenas empresas</a>
                        <a href="">Encontre ou torne-se um parceiro</a>
                        <a href="">CRM Software</a>
                    </div>
                </div>
            </footer>
        </>
    );
};
 
export default Footer;