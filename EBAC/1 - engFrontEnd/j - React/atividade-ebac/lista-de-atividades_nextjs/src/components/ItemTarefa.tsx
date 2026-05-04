// Interface de tarefa
interface ItemTarefaProps {
  tarefa: { id: number | string; title: string };
}

export default function ItemTarefa({ tarefa }: ItemTarefaProps) {
  return (
    <li className="group flex items-center justify-between p-4 mb-2 bg-white border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer">
      <div className="flex items-center gap-3 overflow-hidden">
        {/* Texto da Tarefa com truncamento para não quebrar o layout */}
        <span className="text-gray-700 font-medium truncate first-letter:uppercase sm:whitespace-normal">
          {tarefa.title}
        </span>
      </div>
    </li>
  );
}
