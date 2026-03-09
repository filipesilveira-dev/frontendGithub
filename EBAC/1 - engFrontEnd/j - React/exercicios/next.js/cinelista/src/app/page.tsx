import { getTrendingMovies } from "@/lib/api/tmdb";
import Grid from "./components/Grid";
import Title from "./components/Title";
// import {filmes} from "@/lib/filmes";


export default async function Home() {

  // Variável que recebe o que é retornado lá da função "getTrendingMovies()" que retona os filmes trending
  const filmes = await getTrendingMovies();

  return (
    <>
    {/* Porps "title", que é uma string passada para o componente filho <Title/> */}
    <Title title="Filmes em destaque"/>
    <Grid filmes={filmes}/>
    </>
  );
}
