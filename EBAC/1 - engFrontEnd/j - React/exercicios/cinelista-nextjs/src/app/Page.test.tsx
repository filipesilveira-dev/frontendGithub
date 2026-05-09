import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
// Função que faz requisição para a API do TMDB e retorna os filmes trending
import { getTrendingMovies } from "./../lib/api/tmdb";

// Mock da função "getTrendingMovies" para retornar um array vazio, evitando a necessidade de fazer uma requisição real à API durante os testes. Dessa maneira, erros relativos à API não afetarão os testes, permitindo que eles se concentrem apenas na renderização do componente e na exibição do título.
jest.mock("./../lib/api/tmdb", () => ({
  getTrendingMovies: jest.fn(),
}));

test("Exibe o título 'Filmes em destaque' na página inicial corretamente", async () => {
  
  // Variável que armazena o título esperado
    const tituloEsperado = "Filmes em destaque";
  // Renderiza o componente Home
  render(await Home());

  expect(screen.getByText(tituloEsperado)).toBeInTheDocument();
});

test("Renderiza os filmes em destaque corretamente", async () => {
    
    (getTrendingMovies as jest.Mock).mockResolvedValue([
        {
            id: 1,
            title: "Filme teste",
            overview: "Resumo teste",
            // imagem aleatória, pois a função "getTrendingMovies" é mockada e não retorna uma imagem real, então a imagem não é relevante para o teste
            poster_path: "public/next.svg",
            vote_average: 8.0,
        },
    ]);

    render(await Home());

    // findByText é assíncrono e retorna uma promessa que resolve quando o elemento é encontrado ou rejeita se o elemento não for encontrado dentro do tempo limite padrão. Ele é útil para testar elementos que podem aparecer após uma operação assíncrona, como uma chamada de API ou um evento de usuário. Já getByText é síncrono e lança um erro imediatamente se o elemento não for encontrado, sendo mais adequado para testar elementos que devem estar presentes no momento da renderização inicial do componente.
    expect(await screen.findByText("Filme teste")).toBeInTheDocument();
});

test("Exibir uma mensagem quando não houver filmes disponíveis", async () => {

    // Casting para jest.Mock para garantir que o TypeScript reconheça que getTrendingMovies é uma função mockada e permita o uso de mockResolvedValue para definir o valor de retorno da função durante os testes. Isso é necessário porque, sem o casting, o TypeScript pode não reconhecer corretamente a função como um mock e gerar erros de tipo.
    (getTrendingMovies as jest.Mock).mockResolvedValue([]);

    render(await Home());
    // getByText é síncrono e lança um erro imediatamente se o elemento não for encontrado, sendo mais adequado para testar elementos que devem estar presentes no momento da renderização inicial do componente. Já findByText é assíncrono e retorna uma promessa que resolve quando o elemento é encontrado ou rejeita se o elemento não for encontrado dentro do tempo limite padrão. Ele é útil para testar elementos que podem aparecer após uma operação assíncrona, como uma chamada de API ou um evento de usuário.
    expect(screen.getByText("Nenhum filme encontrado.")).toBeInTheDocument();
});