// Arquivo que receberá as chamadas de API
import { Filme } from "@/types/types";
import tmdbApi from "./axios";

type Data = {
  // "results" é a forma como é retornado na API. Verifique a resposta após o "Try it". Esse "results" será tipado de acordo como uma array de Filme[]
  results: Filme[];
};

// Utilizada para pegar os Trending filmes para a página inicial
export const getTrendingMovies = async () => {
  // Foi necessário passar apenas o resto da URL, especificando que nesse caso será um GET dos filmes trending. Se fosse apenas javascript, seria escrito:
  //  const res = await tmdbApi.get("/trending/movie/day?language=pt-BR")
  const res = await tmdbApi.get<Data>("/trending/movie/day?language=pt-BR");

  return res.data.results;
};

// Utilizada para pegar os detalhes de cada filme ao clicar no Card. Tipado como um promise e esperado um Filme ou undefined, caso o filme não exista (id referente a nenhum filme)
export const getMovieDetails = async (id: number): Promise<Filme | undefined> => {

  // Retorna o objeto (Filme) direto, não havendo a necessidade de usar o type "Data". O que vem em complemento da URL depende do que você quer pegar. Selecione na barra lateral esquerda o que deseja.
  const res = await tmdbApi.get<Filme>(`/movie/${id}day?language=pt-BR`);

  // Retorna os dados
  return res.data;
};

// Utilizada para pegar os filmes em alta (now playing) para a página "Em alta"
export const getNowPlaying = async () => {
  
  const res = await tmdbApi.get<Data>("/movie/now_playing?language=pt-BR");

  return res.data.results;
};

// Utilizada para pegar os filmes populares (Popular) para a página "Populares"
export const getPopularMovies = async () => {
  
  const res = await tmdbApi.get<Data>("/movie/now_playing?language=pt-BR");

  return res.data.results;
};

// Utilizada para pegar os top filmes populares (Top rated) para a página "Top filmes"
export const getTopMovies = async () => {
  
  const res = await tmdbApi.get<Data>("/movie/top_rated?language=pt-BR");

  return res.data.results;
};