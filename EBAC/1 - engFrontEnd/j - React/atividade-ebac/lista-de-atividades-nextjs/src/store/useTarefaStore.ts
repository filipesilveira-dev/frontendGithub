import { create } from 'zustand';

// Interface de tarefa
interface Tarefa {
  	id: number | string;
  	title: string;
}

// Interface do estado global 
interface TarefaState {
  	tarefas: Tarefa[];
 
  	addTarefa: (title: string) => void;
  	// deleteTask: (id: number) => void;
  	setTarefas: (tasks: Tarefa[]) => void;
}

// Zustand: biblioteca de gerenciamento de estado. Funciona como hook.
// Aqui fica definido o estado global e as funções que atualizam esse estado
export const useTarefaStore = create<TarefaState>((set) => ({
    // Estado que receberá cada tarefa adicionada pelo usuário
  	tarefas: [], // Estado inicial

    // Função de adicionar tarefa que altera o estado global
  	addTarefa: (title) => set((state) => ({ 
            // O novo estado de tarefas será uma cópia do que havia anteriormente em tarefas, adicionando ao final (do array) o objeto contendo id (aqui genérico) e o "title" passado como argumento
    		tarefas: [...state.tarefas, { id: Date.now(), title }] 
  })),

//   	deleteTask: (id) => set((state) => ({
//     		tasks: state.tasks.filter((task) => task.id !== id)
//   })),

  // // Utilizado para buscar em servidor de API o conjunto completo (array completo) de tarefas armazenado (uso complementar ao useEffect). Útil também em “localStorage”
  setTarefas: (tarefas) => set({ tarefas }),
}));
