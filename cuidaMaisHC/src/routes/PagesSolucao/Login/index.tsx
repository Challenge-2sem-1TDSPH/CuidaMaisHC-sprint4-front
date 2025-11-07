import { useNavigate } from "react-router-dom";
import FormLogin from "../../../components/FormLogin/FormLogin";
import type { tipoLogin } from "../../../types/tipoForm/tipoLogin";
import { useForm } from "react-hook-form";
import type { TipoPaciente } from "../../../types/tipos/Pacientes/tipoPaciente";
const URL_API = import.meta.env.VITE_URL_API;

export default function Login(){
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<tipoLogin>();
 
    const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch(`${URL_API}/paciente`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            },
        });
      const pacientes: TipoPaciente[] = await response.json();
      const pacientesEncontrados = pacientes.filter((p) => p.senha === data.senha)
      if (pacientesEncontrados.length > 0) {
        alert("Login realizado com sucesso!");
        sessionStorage.setItem("paciente", JSON.stringify(pacientesEncontrados[0]));
        navigate("/");
        window.location.reload();
      } else {
        alert("CPF ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao tentar logar.");
    }
  }); 
 

    return(
        <main className="pageLogin">
            <h1>Faça login na sua conta</h1>
            <FormLogin
            register={register}
            onSubmit={onSubmit}
            />
        </main>
    );
}