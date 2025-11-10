export default function FAQ(){
    return(
        <main className="my-10 p-5 lg:mt-50 xl:mt-50 2xl:mt-60 flex flex-col items-center">
            <h1 className="font-bold text-center text-[1.2rem]">Como podemos te ajudar?</h1>
            <div className="p-5 my-10 bg-[var(--color-faq)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]">
                <h1 className="font-bold text-center text-[1.2rem]">Agendamento de consultas</h1>
                <div>
                    <h2 className="font-bold m-2">Como agendar uma consulta?</h2>
                    <p>Você pode agendar sua consulta pelo telefone (11) 4673-4333 ou diretamente pelo WhatsApp com nosso assistente virtual.</p>
                    <h2 className="font-bold m-2">Quanto tempo antes devo chegar para a consulta?</h2>
                    <p>Recomendamos chegar com 30 minutos de antecedência, especialmente na primeira visita.</p>
                    <h2 className="font-bold m-2">Posso remarcar ou cancelar uma consulta?</h2>
                    <p>Sim. Para remarcar ou cancelar, entre em contato conosco com pelo menos 24 horas de antecedência.</p>
                    <h2 className="font-bold m-2">Receberei algum lembrete da consulta?</h2>
                    <p>Sim, enviamos lembretes automáticos por WhatsApp, SMS ou ligação um dia antes da consulta.</p>
                </div> 
            </div>
            <div className="p-5 my-10 bg-[var(--color-faq)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]"> 
                <h1 className="font-bold text-center text-[1.2rem]">Atendimento</h1>
                <div>
                    <h2 className="font-bold m-2">Qual o horário de funcionamento das unidades?</h2>
                    <p>O horário de funcionamento das unidades da Clínicas e Vila Mariana é De segunda a sexta-feira, das 8h às 18h.</p>
                    <h2 className="font-bold m-2">Quais especialidades estão disponíveis?</h2>
                    <p>Contamos com mais de 90 especialidades, entre elas: Alongamento Óssil, Cardiologia, Buco maxilo e Cirúrgia Torácica, entre outras.</p>
                    <h2 className="font-bold m-2">Posso ser atendido pelo SUS?</h2>
                    <p>Sim. Nós trabalhamos com o SUS.</p>
                    <h2 className="font-bold m-2">Posso levar um acompanhante?</h2>
                    <p>Sim, é permitido. Para menores, pessoas com mobilidade reduzida ou em situação especial, o acompanhante é recomendado.</p>
                </div>
            </div>
            <div className="p-5 my-10 bg-[var(--color-faq)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]">
                <h1 className="font-bold text-center text-[1.2rem]">Documentação</h1>
                <div>
                    <h2 className="font-bold m-2">Quais documentos preciso levar para o atendimento?</h2>
                    <p>É necessário um documento com foto.</p>
                    <h2 className="font-bold m-2">É necessário levar um comprovante de residência?</h2>
                    <p>Sim, é necessário.</p>
                    <h2 className="font-bold m-2">Posso levar cópias dos documentos ou só os originais?</h2>
                    <p>Leve os documentos originais. Em alguns casos, cópias autenticadas também são aceitas.</p>
                    <h2 className="font-bold m-2">Menores de idade precisam de documentação específica?</h2>
                    <p>Sim. É necessário apresentar certidão de nascimento ou RG da criança e documento do responsável legal.</p>
                </div>
            </div>
            <div className="p-5 my-10 bg-[var(--color-faq)] rounded-md shadow-lg lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]">
                <h1 className="font-bold text-center text-[1.2rem]">Acessibilidade</h1>
                <div>
                    <h2 className="font-bold m-2">O hospital possui acessos adaptados para cadeirantes?</h2>
                    <p>Sim, todas as unidades do Hospital das Clínicas possuem rampas, corredores largos e portas adaptadas para garantir o acesso de cadeirantes com segurança e autonomia.</p>
                    <h2 className="font-bold m-2">Há elevadores acessíveis em todas as unidades?</h2>
                    <p>Sim. Todas as unidades do complexo hospitalar contam com elevadores acessíveis, com botões em altura adequada, sinalização tátil e sonora.</p>
                    <h2 className="font-bold m-2">Existem vagas de estacionamento para pessoas com deficiência?</h2>
                    <p>Sim. As vagas destinadas a pessoas com deficiência estão disponíveis nas áreas de estacionamento próximas às entradas principais, devidamente sinalizadas e regulamentadas.</p>
                </div>
            </div>
        </main>
    );
}