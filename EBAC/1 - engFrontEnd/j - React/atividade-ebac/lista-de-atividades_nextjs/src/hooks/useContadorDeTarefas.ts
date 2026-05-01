import { useState } from "react";

export default function useContadorDeTarefas(initialValue = ""){
    // substitui o uso de um useState local
    const [value, setValue] = useState(initialValue);

    // usado em AddTask
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const clean = () => setValue("");

    return{
        value,
        onChange,
        clean
    };
}