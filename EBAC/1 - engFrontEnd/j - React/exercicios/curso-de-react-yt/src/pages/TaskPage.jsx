import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"

function TaskPage() {
    // const utilizada no "onclick" do button de voltar para a tela anterior
    const navigate = useNavigate();
    // comandos para utilizar a página com as descrições de cada tarefa específica
    // é possível agora passar query params para elementos da nova página
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    // os query params "title" e "description" são utilizados aqui
    return <div className="h-screen w-screen bg-slate-500 p-6">
        <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative">
                <button onClick={()=>navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                    <ChevronLeftIcon />
                </button>
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Detalhes da tarefa
                </h1>
            </div>

            <div className="bg-slate-200 p-4 rounded-md">
                <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    </div>
}

export default TaskPage

// /task?title=Estudar&description=123