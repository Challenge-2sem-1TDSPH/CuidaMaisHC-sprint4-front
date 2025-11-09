import { MdPhone } from 'react-icons/md'
import CardUnidade from "../../../components/CardUnidade/CardUnidade"
import { useEffect, useState } from "react";
import type { TipoUnidade } from "../../../types/tipos/Unidades/tipoUnidade";
const VITE_URL_API = import.meta.env.VITE_URL_API;
 
export default function Contato(){
    const [unidades, setUnidades] = useState<TipoUnidade[]>([]);

    useEffect(() => {
        const fetchdata = async ()=>{
            const response = await fetch(`${VITE_URL_API}/unidadehc`);
            const data: TipoUnidade[] = await response.json();
            setUnidades(data);
        }
        fetchdata(); 
    }, []); 

    return(
        <main className="flex flex-col text-center items-center lg:mt-45 xl:mt-50 2xl:mt-60">
            <h1 className="text-[var(--btn-color-menu)] font-bold text-[1.2rem] mt-10 flex flex-wrap
            items-center gap-3"> <MdPhone size={20} />Fale Conosco</h1>
            <div className="flex flex-col items-center p-5"> 
                <h2 className="text-[1rem] font-bold">Telefone</h2>
                <p className="text-[var(--color-font-black)] text-[1rem] m-3 lg:text-[0.9rem]">(11) 4673-4333</p>
            </div>
            <div className="flex flex-col items-center p-5 gap-10 m-10">
                {unidades.map((u) => (
                    <CardUnidade unidade={u}/>
                ))}
            </div>
        </main>
    );
}