import {atom, selector} from 'recoil';

export const tasksState = atom({
    key: "tasksState",
    default: []
});

// selector derivado de "tasksState"
export const tasksCountSelector = selector({
    key: "tasksCount",
    get: ({get})=>{
        const tarefas = get(tasksState)

        return tarefas.length;
    }
})