import { useEffect, useState } from "react";
import type { TipoLogradouro } from "../../types/tipos/Logradouros/tipoLogradouro";
import type { TipoUnidade } from "../../types/tipos/Unidades/tipoUnidade";
const VITE_URL_API = import.meta.env.VITE_URL_API;

export default function CardUnidade(props:{unidade:TipoUnidade}) {

    const idLogradouro = props.unidade.idLogradouro;

    const [logradouro, setLogradouro] = useState<TipoLogradouro>();

    useEffect(() => {
        const fetchdata = async ()=>{
            const response = await fetch(`${VITE_URL_API}/logradouro/${idLogradouro}`);
            const data: TipoLogradouro = await response.json();
            setLogradouro(data);
        }
        fetchdata();
    }, [idLogradouro]);
    return(
        <div>
            <h2>{props.unidade.nomeUnidade}</h2>
            <p>{logradouro?.nomeLogradouro} {logradouro?.numero}, {logradouro?.bairro} {logradouro?.cidade} {logradouro?.sgEstado} - {logradouro?.cep}</p>
            <p>{props.unidade.dataFundacao}</p>
        </div>
    );
}