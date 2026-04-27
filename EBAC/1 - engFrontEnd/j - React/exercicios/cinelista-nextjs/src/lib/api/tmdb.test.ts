import tmdbApi from "./axios";
import { getNowPlaying } from "./tmdb";

jest.mock("./axios");

test("Retorna os filmes em cartaz", async ()=>{
    const mockResults = [{id: 1, title: "Matrix"}];
    (tmdbApi.get as jest.Mock).mockResolvedValue({
        // axios sempre envelopa a resposta do servidor em uma chave chamada data
        data: {results: mockResults},
    });
    const filmes = await getNowPlaying();
    // se tivesse sido utilizado o "toBe" ao invés de "toEqual", daria erro, pois o "toBe" verifica se os dois (filmes e mockResults) ocupam o mesmo lugar na memória (apesar de idênticos, ocupam lugares diferentes por estarem atribuídos a variáveis diferentes)
    expect(filmes).toEqual(mockResults);
})

/*
Importação da instância axios criada
Importação da função que será testada

Criação de uma instância simulada de axios

Realização do teste:
    - Descrição do que é esperado com o teste
    - Arrow function async onde está contido o teste em simulada
        . Criação de uma variável para receber uma lista de objetos, contendo um objeto apenas, simulando dados de um filme
        . Indicação ao Jest de que a chamada GET feita em tmdbApi deve ser desviada para o mock criado e que o valor retornado é um objeto com a propriedade "data" e o valor igual à variável com os dados simulados de um filme
    - Chamada da função com await para testar
    - Especifica que é esperado na variável "filmes" o mesmo conteúdo de variável "mockResults"
*/