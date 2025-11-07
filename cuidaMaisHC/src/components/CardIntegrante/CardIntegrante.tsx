import type { TipoIntegrante } from "../../types/tipos/Integrantes/tipoIntegrante";

export default function CardIntegrantes(props:{integrante:TipoIntegrante}){
    return(
        <div className="flex flex-col justify-center gap-20 items-center shadow-2xl w-[var(--size-X-card-intg)] h-[var(--size-Y-card-intg)] rounded-2xl  m-10  md:h-[45vh] lg:w-[25vw] lg:h-[55vh] lg:my-10 xl:my-20 2xl:my-30 xl:h-[65vh]">
            <h2 className="font-bold text-[1rem] text-[var(--color-font-black)] text-center">{props.integrante.nome}</h2>
            <img className="w-[var(--img-integrantes)] rounded-lg lg:w-[10vw] xl:w-[10vw] 2xl:w-[10vw]" src={props.integrante.urlImg} alt="Foto do integrante" />
        </div>
    );
} 