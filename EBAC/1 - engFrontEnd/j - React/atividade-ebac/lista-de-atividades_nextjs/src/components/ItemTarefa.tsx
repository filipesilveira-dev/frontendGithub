// Interface de tarefa
interface ItemTarefaProps {
  tarefa: { id: number | string; 
	title: string };
}

export default function ItemTarefa({ tarefa }: ItemTarefaProps) {
  return <div>{tarefa.title}</div>;
}
