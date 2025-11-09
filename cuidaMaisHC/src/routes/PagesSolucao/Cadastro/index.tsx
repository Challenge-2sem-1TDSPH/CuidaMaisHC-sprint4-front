import { useNavigate } from "react-router-dom";
import FormCadastro from "../../../components/FormCadastro/FormCadastro";
import { useForm } from "react-hook-form";
import type { tipoCadastro } from "../../../types/tipoForm/tipoCadastro";
const URL_API = import.meta.env.VITE_URL_API;

export default function Cadastro(){

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<tipoCadastro>();

    const onSubmit =  handleSubmit(async (data) =>{
        const dataFormatada = data.dataNascimento.split("-").reverse().join("/");
        const dados = {
            nome: data.nome,
            idlogradouro: data.idlogradouro, 
            dataNascimento: dataFormatada,
            cpf: data.cpf,
            senha: data.senha
        }; 

        await fetch(`${URL_API}/paciente`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        alert("Cadastro feito com sucesso!");
        navigate("/");
        window.location.reload();
        sessionStorage.setItem("paciente", JSON.stringify(data));
    }); 

    return(
        <main className="flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem] my-10 lg:mt-50 xl:mt-50 2xl:mt-60">
            <h1>Cadastro</h1>
            <p>Você não possui cadastro, cadastre-se agora</p>
            <FormCadastro
                register={register}
                onSubmit={onSubmit}
            />
        </main>
    );
}