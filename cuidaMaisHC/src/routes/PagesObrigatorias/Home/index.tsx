import { Link } from "react-router-dom";
import { MdElderly } from "react-icons/md";
import { FaUserAlt, FaMobileAlt, FaRobot  } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { TipoPaciente } from "../../../types/tipos/Pacientes/tipoPaciente";


export default function Home(){

    const [paciente, setPaciente] = useState<TipoPaciente>();

    useEffect(() =>{
            const dadosSalvos = sessionStorage.getItem("paciente");
            if (dadosSalvos) {
                setPaciente(JSON.parse(dadosSalvos));
            }
        }, []);

    return(  
        <main className="p-5 lg:mt-40 xl:mt-40 2xl:mt-40">
            {paciente ? 
            (<div className="my-16 flex flex-col gap-2 m-6 text-center lg:px-40 lg:text-center 2xl:px-100">
                <h1 className="text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">Olá, {paciente.nome}</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">
                    O <strong>Cuida Mais HC</strong> é uma plataforma desenvolvida para aproximar você dos cuidados com a sua saúde. 
                    Aqui, você pode <strong>consultar, agendar e confirmar suas consultas</strong>, receber lembretes automáticos e acessar informações de forma 
                    <strong>simples e acessível</strong>. Nosso objetivo é tornar o atendimento no Hospital das Clínicas mais humano, eficiente e digital, 
                    ajudando especialmente quem tem dificuldades com o uso de tecnologias. 
                    Cuidar da sua saúde nunca foi tão fácil 💚
                </p>
            </div>): (<div></div>)}
            <div className="my-16 flex flex-col gap-2 m-6 text-center lg:px-40 lg:text-left 2xl:px-100">
                <h1 className="text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">Hospital das Clínicas FMUSP</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">O Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo é um complexo de instituições de saúde, localizado em várias regiões da cidade de São Paulo, Brasil.</p>
            </div>
            <div className="my-16 flex flex-col text-[1.2rem] gap-5 items-center lg:flex-wrap">
                <h1 className="text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">Benefícios Cuida Mais HC</h1>
                <MdElderly className="text-[var(--btn-color-menu)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Acesso simples para idosos</p>
                <FaRobot className="text-[var(--btn-color-menu)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Assistente virtual simples</p>
                <FaUserAlt className="text-[var(--btn-color-menu)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Login fácil</p>
                <FaMobileAlt className="text-[var(--btn-color-menu)] font-bold text-[2rem]"/>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Acessibilidade para saúde digital</p>
            </div>
            {paciente?
            (<div className="m-16 flex flex-col text-center items-center gap-3 2xl:gap-6">
                <h1 className="text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">No nosso site</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Se tiver dúvidas acesse nossa página de dúvidas frequentes</p><Link className="btnCuidaMais" to="/FAQ">Dúvidas Frequentes</Link>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Entre em contato conosco através da página de contato</p>
                <Link className="btnCuidaMais" to="/contato">Contato</Link>
            </div>): 
            (<div className="m-16 flex flex-col text-center items-center gap-3 2xl:gap-6">
                <h1 className="text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">No nosso site</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Entre na sua conta ou faça login</p>
                <Link className="flex items-center justify-center bg-[var(--btn-color-menu)] w-[40vw] h-[4vh] text-[1rem] text-center text-white font-bold rounded-2xl lg:w-[15vw] lg:h-[5vh] lg:text-[0.8rem] 2xl:text-[1rem]" to="/login-or-create-account">Entrar</Link>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Se tiver dúvidas acesse nossa página de dúvidas frequentes</p><Link className="flex items-center justify-center bg-[var(--btn-color-menu)] w-[40vw] h-[4vh] text-[1rem] text-center text-white font-bold rounded-2xl lg:w-[15vw] lg:h-[5vh] lg:text-[0.8rem] 2xl:text-[1rem]" to="/FAQ">Dúvidas Frequentes</Link>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">Entre em contato conosco através da página de contato</p>
                <Link className="flex items-center justify-center bg-[var(--btn-color-menu)] w-[40vw] h-[4vh] text-[1rem] text-center text-white font-bold rounded-2xl lg:w-[15vw] lg:h-[5vh] lg:text-[0.8rem] 2xl:text-[1rem]" to="/contato">Contato</Link>
            </div>)}
            <div className="my-16 flex flex-col items-center p-5 m-6 gap-5 lg:px-40 2xl:px-100 2xl:gap-8">
                <h1 className="text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">Hospital das Clínicas FMUSP</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">O Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo é um complexo de instituições de saúde, localizado em várias regiões da cidade de São Paulo, Brasil.</p>
                <p className="endereco">Av. Dr. Enéas de Carvalho Aguiar, 225 Cerqueira César São Paulo</p>
                <Link className="flex items-center justify-center bg-[var(--btn-color-menu)] w-[40vw] h-[4vh] text-[1rem] text-center text-white font-bold rounded-2xl lg:w-[15vw] lg:h-[5vh] lg:text-[0.8rem] 2xl:text-[1rem]" to="https://maps.app.goo.gl/2v5JZJah4BUYKXN16" target="_blank" rel="noopner noreferrer">Como chegar</Link>
            </div>
            <div className="my-16 flex flex-col m-6 gap-5 items-center lg:px-40 2xl:px-100 2xl:gap-8">
                <h1 className="text-[1.2rem] font-bold text-center 2xl:text-[1.5rem]">Integrantes</h1>
                <p className="lg:text-[1rem] 2xl:text-[1.2rem]">O Cuida Mais HC foi produzido por Moisés Waidemann, Gabriel Sbrana e Thiago Mota da 1TDSPH. Acesse nossa página de integrantes para mais informações sobre.</p>
                <Link className="flex items-center justify-center bg-[var(--btn-color-menu)] w-[40vw] h-[4vh] text-[1rem] text-center text-white font-bold rounded-2xl lg:w-[15vw] lg:h-[5vh] lg:text-[0.8rem] 2xl:text-[1rem]" to="/integrantes">Integrantes </Link>
            </div>
        </main>
    );
}