// importa a biblioteca que permite simular um DOM no node (necessário para o uso de “toBeInTheDocument()”)
import "@testing-library/jest-dom";
// importa os métodos que serão utilizados
import {render, screen} from "@testing-library/react";
// importa o componente que será testado
import Title from "./index";

// primeiro parâmetro descreve o que é esperado do teste e o segundo parâmetro a função em si perceba que ela está como assíncrona. Isso se dá porque o “findByText()” espera uma promise como retorno
test("Renderiza o título com o texto correto", async ()=>{
    // variável criada para receber o título esperado
    const titulo= "Título";

    // método “render()” chamado para renderizar o componente testado. Perceba que a variável titulo está sendo passada como uma props, pois assim que ela é passada no código original
	render(<Title title={titulo}/>);

    // variável que recebe uma promise que é esperado um elemento contendo o texto contido em “titulo”. O método “screen()” busca na tela virtual criada para o teste. No caso está buscando por um elemento com texto em específico dentro do DOM
    const elemento= await screen.findByText(titulo);

    // aqui é especificado o que é esperado com o teste que no caso é que o “elemento” esteja dentro do documento
	expect(elemento).toBeInTheDocument();
})
