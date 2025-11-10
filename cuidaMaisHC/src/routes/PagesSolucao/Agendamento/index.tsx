import { useNavigate } from "react-router-dom";
import FormAgendamento from "../../../components/FormAgendamento/FormAgendamento";
import { useForm } from "react-hook-form";
import type { tipoAgendamento } from "../../../types/tipoForm/tipoAgendamento";
import { useState } from "react";

export default function Agendamento() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<tipoAgendamento>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      console.log("Dados do agendamento:", data);
      alert("Agendamento realizado com sucesso!");
      reset();
      navigate("/");
    } catch (error) {
      console.error("Erro ao agendar:", error);
      alert("Ocorreu um erro ao realizar o agendamento.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <main className="flex flex-col items-center text-[var(--color-font-black)] font-bold text-[1.2rem] my-10 lg:mt-[50px] xl:mt-[50px] 2xl:mt-[60px]">
      <h1>Agendamento</h1>
      {loading ? (
        <p className="text-[var(--btn-color-menu)] m-10">Carregando agendamento...</p>
      ) : (
        <FormAgendamento register={register} onSubmit={onSubmit} />
      )}
    </main>
  );
}
