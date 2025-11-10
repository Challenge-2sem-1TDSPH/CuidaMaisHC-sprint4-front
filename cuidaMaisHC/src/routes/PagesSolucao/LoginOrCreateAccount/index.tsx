import { useNavigate } from "react-router-dom";
import FormloginOrCreateAccount from "../../../components/FormLoginOrCreateAccont/FormLoginOrCreateAccont";
import { useForm } from "react-hook-form";
import type { tipoLoginOrCreateAccount } from "../../../types/tipoForm/tipoLoginOrCreateAccount";
import type { TipoPaciente } from "../../../types/tipos/Pacientes/tipoPaciente";
import { useState } from "react";

const URL_API = import.meta.env.VITE_URL_API;

export default function LoginOrCreateAccount() {    
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<tipoLoginOrCreateAccount>();
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
      const pacientesEncontrados = pacientes.filter((p) => p.cpf === data.cpf);
      if (pacientesEncontrados.length > 0) {
        navigate(`/login-or-create-account/login/${data.cpf}`);
      } else {
        navigate("/login-or-create-account/cadastro");
      }
    } catch (error) {
      console.error("Erro ao procurar cpf:", error);
      alert("Erro ao procurar cpf.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <main className="flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem] my-10 lg:mt-50">
      <h1>Entre ou crie uma conta</h1>
      {loading ? (
        <p className="text-[var(--btn-color-menu)] m-10">Verificando CPF...</p>
      ) : (
        <FormloginOrCreateAccount
          register={register}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
}
