import Menu from "../Menu/Menu";
import logo from"../../Images/ImgCabecalho/logohc.png"
import { Link, useLocation, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

export default function Cabecalho(){
    const {id} = useParams<string>();
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isIntegrantesDetails = location.pathname.startsWith("/integrantes/") && id;

    return(
        <header className="w-[100vw] flex flex-col bg-white shadow-lg lg:bg-[var(--btn-color-menu)] lg:h-[20vh]">
            <div className="text-center flex flex-wrap justify-between items-center w-full h-[16vh] fixed bg-white p-2 shadow-md sm:h-[22vh] sm:p-5 md:h-[17vh] lg:h-[13.5vh] lg:p-1 xl:h-[15.2vh] 2xl:h-[13.5vh]">
                {isIntegrantesDetails ? (<Link className="bg-[var(--btn-color-menu)] flex justify-center items-center w-[8vw] h-[4vh] rounded-full text-white text-[1.5rem] sm:w-[7.5vw] sm:h-[6vh] sm:text-[2rem] md:w-[6vw] lg:w-[4vw] lg:bg-white lg:text-[var(--color-font-black)] lg:rounded-none xl:w-[4vw] hover:bg-[var(--color-font-rodape)] hover:rounded-none transition-all duration-300" to="/integrantes"><FiArrowLeft /></Link>) : !isHome ? (<Link className="bg-[var(--btn-color-menu)] flex justify-center items-center w-[8vw] h-[4vh] rounded-full text-white text-[1.5rem] sm:w-[7.5vw] sm:h-[6vh] sm:text-[2rem] md:w-[6vw] lg:w-[4vw] lg:bg-white lg:text-[var(--color-font-black)] lg:rounded-none xl:w-[4vw] hover:bg-[var(--color-font-rodape)] hover:rounded-none transition-all duration-300" to="/"><FiArrowLeft /></Link>) : (<div className="w-[8vw] h-[4vh] sm:w-[7.5vw] md:w-[6vw] lg:w-[4vw]"></div>)}
                <div className="flex flex-col items-center">
                    <Link to="/"><img className="w-[var(--img-logo)] md:w-[13.5vw] lg:w-[10vw]" src={logo} alt="Imagem do Logo do Hospital das clínicas"/></Link>
                    <h1 className="font-bold text-[1rem] text-[var(--btn-color-menu)] sm:text-[1.5rem] lg:text-[1rem] md:text-[1.2rem]">Cuida Mais HC</h1>
                </div>
                <div className="w-7"></div>
            </div>
            <Menu/>
        </header>
    );
}