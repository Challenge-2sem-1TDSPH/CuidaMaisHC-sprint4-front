import { useNavigate } from "react-router-dom";
import FormLogin from "../../../components/FormLogin/FormLogin";
import type { tipoLogin } from "../../../types/tipoForm/tipoLogin";
import { useForm } from "react-hook-form";
import type { TipoPaciente } from "../../../types/tipos/Pacientes/tipoPaciente";
import { useState } from "react";

const URL_API = import.meta.env.VITE_URL_API;

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<tipoLogin>();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL_API}/paciente`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const pacientes: TipoPaciente[] = await response.json();
      const pacientesEncontrados = pacientes.filter(
        (p) => p.senha === data.senha
      );

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
    } finally {
      setLoading(false);
    }
  });

  return (
    <main className="flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem] my-10 my-10 lg:mt-50 xl:mt-50 2xl:mt-60">
      <h1>Faça login na sua conta</h1>
      {loading ? (
        <p className="text-[var(--btn-color-menu)] m-10">Carregando login...</p>
      ) : (
        <FormLogin register={register} onSubmit={onSubmit} />
      )}
    </main>
  );
}
