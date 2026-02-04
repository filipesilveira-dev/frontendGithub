import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

// sendo o argumento "props" é possível este componente acessar informações que estão "acima" dele lá no App.jsx. Ou seja, o componente "Tasks" é filho do "App", pois é renderizado por este.
// é possível utilizar o destructor passando as funções utilizadas via props. Isso evita de precisar ficar escrevendo "props.tasks.map()" e apenas task.map
function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

    // criada para receber a função importada do "react-router-dom". Usada na função que será chamada no "onClick" do button de mudar de página
    const navigate = useNavigate();

    // Ela será utilizada no "onclick" do button que leva à outra página
    function onSeeDetailsClick(task){
        // const query é uma const de boas práicas no uso de params. Essa função faz já qualquer tipo de tratamento para que não haja nenhum conflito quando for passado no searchParams
        const query = new URLSearchParams();

        navigate(`/task?title=${task.title}&description=${task.description}`)
    }

    return (
        // aqui é feito um map(), forEach, para cada elemento presente na array "tasks" com useState, exibindo uma lista
        // lembrando que o uso da "key" é essencial em listas no react
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) =>
                <li key={task.id} className="flex gap-2">
                    {/* arrow function executada ao ser clicado onde a função "onTaskClick", com o argumento da id da tarefa clicada */}
                    <button 
                    onClick={()=>onTaskClick(task.id)} 
                    className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.title}
                        </button>

                    <button onClick={()=> onSeeDetailsClick(task)} className="bg-slate-400 p-2 rounded-md text-white">
                        {/* componente obtido por meio do "npm install lucide-react@0.435.0" */}
                        <ChevronRightIcon />
                    </button>

                         {/* componente obtido por meio do "npm install lucide-react@0.435.0" */}
                     <button 
                     onClick={()=>onDeleteTaskClick(task.id)}
                     className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon />
                     </button>
                </li>
            )}
        </ul>
    )
}

export default Tasks