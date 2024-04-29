import "./styles.css";
import NovidadesCard from "./interfaces";
import Image from "next/image";
 
const NovidadeCard = (props: NovidadesCard) => {
  return (
    <>
      <div className="card">
        <div className="flex justify-center">
          <Image className="novidadesImg" src={props.image} width={250} height={200} alt="" />
        </div>
 
        <div className="novidades-content">
          <h3>{props.title}</h3>
          <button>Conheça agora</button>
        </div>
      </div>
    </>
  );
};
 
export default NovidadeCard;