import { MdPhone } from 'react-icons/md'
import CardUnidade from "../../../components/CardUnidade/CardUnidade"
import { useEffect, useState } from "react";
import type { TipoUnidade } from "../../../types/tipos/Unidades/tipoUnidade";
const VITE_URL_API = import.meta.env.VITE_URL_API;
 
export default function Contato(){
    const [unidades, setUnidades] = useState<TipoUnidade[]>([]);

    useEffect(() => {
        const fetchdata = async ()=>{
            const response = await fetch(`${VITE_URL_API}/unidadeHC`);
            const data: TipoUnidade[] = await response.json();
            setUnidades(data);
        }
        fetchdata();
    }, []);

    return(
        <main className="pageContato">
            <h1> <MdPhone size={20} />Fale Conosco</h1>
            <div>
                <h2>Telefone</h2>
                <p>(11) 4673-4333</p>
            </div>
            <div>
                {unidades.map((u) => (
                    <CardUnidade unidade={u}/>
                ))}
            </div>
        </main>
    );
}