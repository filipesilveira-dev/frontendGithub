// Client side porque utiliza o estado global
"use client";

import ItemTarefa from "./ItemTarefa";
import { useTarefaStore } from "@/store/useTarefaStore";

export default function ListaTarefas(){
    const {tarefas} = useTarefaStore()
    return (
        <ul>
            {tarefas.map((tarefa)=>
            <ItemTarefa
            key={tarefa.id}
            tarefa = {tarefa}
            />   
        )
            }
        </ul>
    )
}