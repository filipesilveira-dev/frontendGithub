// modularização (ES Modules)
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utilsRef.js";

//POO
const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria ("Alimentação"),
    new Categoria ("Transporte"),
    new Categoria ("Lazer"),
    new Categoria ("Outros")
)

//Manipulação do DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    // Prevenção de comportamento padrão
    evento.preventDefault();
    // 1. pegar o valor informado
        const valorInformado = formulario.elements.valor.value;
        if(!valorInformado || isNaN(valorInformado) || Number(valorInformado) <= 0){
            return alert("Informe um valor de gasto válido e positivo")
        }

        //2. pegar categoria informada
        const categoriaInformada = formulario.elements.categoria.value;

       // 3. impedir números negativos
        if(valorNegativo(valorInformado)){
            alert("Valor inválido. O valor não pode ser negativo.");
            return; // o "return" implica que nenhum passo é dado na função se o número for negativo
        }

       /* 4. de acordo com a categoria, atualizar o valor
            4.1 criar variáveis para controlar ou armazenar os valores de cada uma das categorias*/
       const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
       categoria.adicionarValor(valorInformado);
       
        //5. atualizar interface
        atualizarInterface(gastosPorCategoria);
        
       // 6. limpar campos: método presente em formuláruos (reset())
       formulario.reset();  
})