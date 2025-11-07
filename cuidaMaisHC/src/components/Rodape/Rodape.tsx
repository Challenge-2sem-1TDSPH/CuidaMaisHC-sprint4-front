import { FaGooglePlay, FaAppStore, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Rodape(){
    return(
        <footer className="w-[100vw] text-[1rem] text-[var(--color-font-rodape)] font-bold flex flex-col text-center bg-[var(--bg-rodape)] p-5 sm:text-[1.2rem] lg:text-[0.8rem] xl:text-[1rem]">
            <p>&copy; 2025 Cuida Mais HC - Todos os direitos reservados</p>
            <h1 className="m-4">Contato</h1>
            <div>
                <p className="flex flex-wrap gap-7 justify-center">
                    <Link className="text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[1.4rem] xl:text-[1.7rem]" target="_blank" rel="noopner noreferrer" to="https://web.facebook.com/hospitaldasclinicasdafmusp"><FaFacebook /></Link> |
                    <Link className="text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[1.4rem] xl:text-[1.7rem]" target="_blank" rel="noopner noreferrer" to="https://www.instagram.com/hospitalhcfmusp/"><FaInstagram/></Link> |
                    <Link className="text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[1.4rem] xl:text-[1.7rem]" target="_blank" rel="noopner noreferrer"  to="https://www.youtube.com/@hospitaldasclinicasdafmusp3623"><FaYoutube /></Link> |
                    <Link className="text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[1.4rem] xl:text-[1.7rem]" target="_blank" rel="noopner noreferrer" to="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente"><FaGooglePlay/> </Link> |
                    <Link className="text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[1.4rem] xl:text-[1.7rem]" target="_blank" rel="noopner noreferrer" to="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502"><FaAppStore/> </Link>
                </p>
            </div>
        </footer>
    );
}