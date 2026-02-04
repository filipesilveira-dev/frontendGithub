import { useState } from "react"

// "{onAddTaskSubmit}" é uma prop desestruturada que vem do pai App.jsx
function AddTask({onAddTaskSubmit}) {

    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o título da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                // com o value é feita a relação com o setTitle (useState de title)
                value={title}
                // o valor de setTitle (useState de title) é estabelecido aqui
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="Digite a descrição da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                // com o value é feita a relação com o setTitle (useState de description)
                value={description}
                // o valor de setTitle (useState de description) é estabelecido aqui
                onChange={(e)=>setDescription(e.target.value)}
            />
            <button 
            onClick={()=> {
                // verificar se título e descrição estão preenchidos. O "trim()" impede que o uso de espaço seja cadastrado com tarefa
                if(!title.trim() || !description.trim()){
                    return alert("Preencha o título e a descrição da tarefa.")
                }

                onAddTaskSubmit(title, description)
                setTitle('');
                setDescription('');
            }}
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}

export default AddTask