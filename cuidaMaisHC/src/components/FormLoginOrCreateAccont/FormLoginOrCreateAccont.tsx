import type { TipoPropsFormLoginOrcreateAccount } from "../../types/Forms/tipoFormLoginOrCreateAccount";

export default function FormloginOrCreateAccount({register, onSubmit}: TipoPropsFormLoginOrcreateAccount){
    return(
        <div>
            <form className="border-5 rounded-2xl w-[var(--form-size-x-login-create)] h-[var(--form-size-Y-login-create)] p-2 border-gray-800 m-10 flex flex-col shadow-2xl md:w-[45vw] lg:w-[35vw] xl:w-[25vw]" onSubmit={onSubmit}>
                <div className="flex flex-col m-4 gap-3">
                    <label className="text-[1rem]">Cpf: </label>
                    <input className="p-2 text-[1.2rem] m-2 rounded-sm border-b-2" type="text" placeholder="Digite seu cpf"{...register("cpf", { required: true, maxLength: 11})}/>
                </div>
                <div className="flex justify-center">   
                    <div className="items-center">
                        <button className="flex items-center justify-center bg-[var(--btn-color-menu)] w-[var(--btn-size-X-menu)] h-[var(--btn-size-Y-menu)] text-[1.2rem] text-center text-white font-bold rounded-2xl md:w-[30vw] lg:my-0 lg:w-[25vw] xl:w-[20vw] hover:cursor-pointer" type="submit">Entrar</button>
                    </div>
                </div>
            </form> 
        </div>
    );
}