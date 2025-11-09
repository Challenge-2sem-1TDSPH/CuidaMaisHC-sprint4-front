import type { TipoPropsFormCadastro } from "../../types/Forms/tipoFormCadastro";

export default function FormCadastro({register, onSubmit}: TipoPropsFormCadastro){
    return( 
        <div>
            <form className="border-5 rounded-2xl w-[var(--form-size-X-create)] h-[var(--form-size-Y-create)] p-2 border-gray-800 m-10 flex flex-col shadow-2xl lg:w-[40vw]  xl:w-[30vw]" onSubmit={onSubmit}>
                 <div className="flex flex-col m-4 gap-3">
                    <label className="text-[1rem]">Nome: </label>
                    <input className="text-[1.2rem] m-2 rounded-sm border-b-2" type="text" {...register("nome", { required: true, maxLength: 200})} />
                </div>
                <div className="flex flex-col m-4 gap-3">
                    <label className="text-[1rem]">Data de Nascimento: </label> 
                    <input className="text-[1.2rem] m-2 rounded-sm border-b-2" type="date" {...register("dataNascimento", { required: true})}/>
                </div>
                <div className="flex flex-col m-4 gap-3">
                    <label className="text-[1rem]">Cpf: </label>
                    <input className="text-[1.2rem] m-2 rounded-sm border-b-2" type="text" {...register("cpf", { required: true, maxLength: 11})}/>
                </div>
                <div className="flex flex-col m-4 gap-3">
                    <label className="text-[1rem]">Senha: </label>
                    <input className="text-[1.2rem] m-2 rounded-sm border-b-2" type="password" {...register("senha", { required: true, maxLength: 80})}/>
                </div>
                <div className="flex justify-center">
                    <div>
                        <button className="flex items-center justify-center bg-[var(--btn-color-menu)] w-[var(--btn-size-X-menu)] h-[var(--btn-size-Y-menu)] text-[1.2rem] text-center text-white font-bold rounded-2xl my-5 lg:w-[30vw] xl:w-[20vw] hover:cursor-pointer" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}