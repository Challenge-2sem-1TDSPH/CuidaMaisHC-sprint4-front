import { useParams, Link  } from "react-router-dom";
import type { TipoIntegrante } from "../../../types/tipos/Integrantes/tipoIntegrante";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {integrantes} from "../../../data/integrantes";

export default function IntegrantesDetails(){ 
    const {id} = useParams<string>();

    const integrante: TipoIntegrante[] = integrantes.filter(i => i.id === Number(id));
    const encontrado = integrante[0];
    
    return(
        <main className="flex flex-col items-center my-10 text-center lg:my-55 xl:my-65">
            <h1 className="font-bold text-[1.2rem] text-[var(--btn-color-menu)] text-center">Detalhes do {encontrado.nome}</h1>
            <div>
                <div className="flex flex-col items-center justify-center gap-2 items-center shadow-2xl w-[var(--size-X-detail-intg)] h-[var(--size-Y-detail-intg)] rounded-2xl p-8 gap-6 m-10 xl:h-[70vh] 2xl:h-[75vh]">
                    <img className="w-[var(--img-integrantes)] rounded-lg" src={encontrado.urlImg} alt={`Imagem do ${encontrado.nome}`} />
                    <p>{encontrado.paragrafo}</p>
                    <div className="flex flex-wrap gap-10">
                        <Link className="flex flex-wrap items-center justify-center bg-[var(--btn-color-menu)] w-[var(--btn-size-X-detail)] h-[var(--btn-size-Y-detail)] text-[1.2rem] text-center text-white font-bold rounded-full shadow-2xl" target="_blank" rel="noopner noreferrer" to={`${encontrado.urlGit}`}><FaGithub/></Link>
                        <Link className="flex flex-wrap items-center justify-center bg-[var(--btn-color-menu)] w-[var(--btn-size-X-detail)] h-[var(--btn-size-Y-detail)] text-[1.2rem] text-center text-white font-bold rounded-full shadow-2xl" target="_blank" rel="noopner noreferrer" to={`${encontrado.urlLinkedIn}`}><FaLinkedin/></Link>  
                    </div>
                </div>
            </div>
        </main>
    );
}