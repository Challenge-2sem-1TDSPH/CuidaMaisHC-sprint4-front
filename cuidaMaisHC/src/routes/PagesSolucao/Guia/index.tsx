import { Link } from "react-router-dom";
import bot from "../../../Images/ImgPagesSolucao/Guia/bot.png";
import guia from "../../../Images/ImgPagesSolucao/Guia/guia.png";

export default function Guia(){
    return(
        <main className="flex items-center flex-col gap-15 my-10 text-center text-[var(--color-font-black)] lg:mt-50 lg:flex-row lg:justify-center xl:mt-50 2xl:mt-60">
            <div className="m-3 shadow-2xl flex flex-col items-center rounded-2xl w-[var(--size-guia-X)] h-[var(--size-guia-Y)] gap-10 p-12 lg:w-[30vw] lg:h-[75vh] lg:p-8"> 
                <h1 className="font-bold text-[1.2rem]">Guia</h1>
                <img className="w-[var(--img-guia)] lg:w-[10vw]" src={guia} alt="Imagem de um boneco"/>
                <p>Bem-vindo ao nosso app! Agende suas consultas médicas de forma rápida e fácil, seguindo as instruções na tela. Se precisar de ajuda, estamos à disposição. Clique no botão abaixo para agendar sua consulta.</p>
                <Link className="flex items-center justify-center bg-[var(--btn-color-guia)] w-[var(--btn-size-X-guia)] h-[var(--btn-size-Y-guia)] text-[1.2rem] text-center text-white font-bold rounded-2xl shadow-2xl border-b-2 lg:w-[13vw] lg:h-[10vh] lg:text-[0.9rem] xl:h-[5vh]" to="/agendamento">Clique Aqui</Link>
            </div>
            <div className="m-3 shadow-2xl flex flex-col items-center rounded-2xl w-[var(--size-guia-X-bot)] h-[var(--size-guia-Y-bot)] gap-10 p-12 lg:w-[30vw] lg:h-[75vh] lg:p-8">
                <h1 className="font-bold text-[1.2rem]">Robô</h1>
                <img className="w-[var(--img-guia)] lg:w-[10vw]" src={bot} alt="Imagem do assistente virtual"/>
                <p>Olá! Sou seu assistente de consultas, pronto para te ajudar. Estou à disposição para tirar dúvidas ou ajudar.</p>
            </div>
        </main>
    );
}