import { Link } from "react-router-dom";
import CardIntegrantes from "../../../components/CardIntegrante/CardIntegrante";
import type { TipoIntegrante } from "../../../types/tipos/Integrantes/tipoIntegrante";
import {integrantes} from "../../../data/integrantes";

export default function Integrantes(){
    
    const todosIntegrante: TipoIntegrante[] = integrantes;

    return(
        <main className="text-center flex flex-col items-center my-10 lg:mt-50 xl:mt-60 2xl:mt-70">
            <h1 className="font-bold text-[1.2rem] text-[var(--btn-color-menu)] text-center">Integrantes</h1>
            <div className="text-[var(--color-font-black)] text-[1rem] text-center lg:flex lg:flex-wrap">{todosIntegrante.map((i) => (
                <Link to={`/integrantes/${i.id}`}>
                    <CardIntegrantes integrante={i}/>
                </Link>
            ))}
            </div>
            <p>Clique no Card para ver detalhes dos integrantes da 1TDSPH</p>
        </main>
    );
} 
  