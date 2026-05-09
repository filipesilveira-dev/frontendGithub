import { getTrendingMovies } from "@/lib/api/tmdb";
import Grid from "./components/Grid";
import Title from "./components/Title";
// import {filmes} from "@/lib/filmes";

export default async function Home() {
  // Variável que recebe o que é retornado lá da função "getTrendingMovies()" que retona os filmes trending. A vantegem de estar aqui e não em Grid é que assim a função "getTrendingMovies()" só é chamada uma vez, e o resultado é passado para o componente Grid como props, evitando chamadas desnecessárias à API e melhorando a performance da aplicação.
  const filmes = await getTrendingMovies();

  return (
    <>
      {/* Porps "title", que é uma string passada para o componente filho <Title/> */}
      <Title title="Filmes em destaque" />
      {/* Se filmes existir e tiver mais de 0 itens, renderiza o componente <Grid/> passando os filmes como props. Caso contrário, exibe a mensagem "Nenhum filme encontrado." */}
      {filmes && filmes.length > 0 ? (
        <Grid filmes={filmes} />
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </>
  );
}
