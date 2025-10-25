import { useParams, Link  } from "react-router-dom";
import type { TipoIntegrante } from "../../../types/tipos/Integrantes/tipoIntegrante";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {integrantes} from "../../../data/integrantes";

export default function IntegrantesDetails(){ 
    const {id} = useParams<string>();

    const integrante: TipoIntegrante[] = integrantes.filter(i => i.id === Number(id));
    const encontrado = integrante[0];
    
    return(
        <main className="pageDetails">
            <h1 className="text">Detalhes do {encontrado.nome}</h1>
            <div>
                <div className="detailIntegrante">
                    <img className="imgIntegrantes" src={encontrado.urlImg} alt={`Imagem do ${encontrado.nome}`} />
                    <p>{encontrado.paragrafo}</p>
                    <div className="btnIntegrantes">
                        <Link className="btnGit" target="_blank" rel="noopner noreferrer" to={`${encontrado.urlGit}`}><FaGithub/></Link>
                        <Link className="btnlinkedIn" target="_blank" rel="noopner noreferrer" to={`${encontrado.urlLinkedIn}`}><FaLinkedin/></Link>  
                    </div>
                </div>
            </div>
        </main>
    );
}