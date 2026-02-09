import {atom, selector} from 'recoil';
import {tasksState} from "../state/tasks";

export const filterState = atom({
    key: "filterState",
    default: "all"
});

// selector derivado de "tasksState". Necessário o filtro aplicado (filterState) e a lista de tarefas (tasksState)
export const filteredTasksSelector = selector({
    key: "filteredTasksSelector",
    get: ({get})=>{
        // variável que recebe o estado do filtro
        const filter = get(filterState);
        // varia´vel que recebe a lista de tarefas
        const list = get(tasksState);

        return (
            // é aplicado um filtro em list (array contendo as tarefas)
            list.filter((task) => {
                // caso o estado do seu filtro seja idêntico a "completed", retorne "task.isCompleted" (as tarefas completas)
                if (filter === "completed") return task.isCompleted;
                // caso o estado do seu filtro seja idêntico a "pending", retorne "task.!isCompleted" (as tarefas pendentes)
                if (filter === "pending") return !task.isCompleted;
                
                return true;
            })
        );
    }
})