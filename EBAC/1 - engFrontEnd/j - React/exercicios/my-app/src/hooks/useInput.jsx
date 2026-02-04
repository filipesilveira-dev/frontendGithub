import { useState } from "react";

// hook personalizado tornar o App mais limpo
export function useInput(valorInicial =''){

    const [valor, setValor]=useState(valorInicial);

    const onChange =(e)=>{
        setValor(e.target.value);
    }

    const limpar=()=> setValor("");
    return{
        valor,
        onChange,
        limpar,
    };
}