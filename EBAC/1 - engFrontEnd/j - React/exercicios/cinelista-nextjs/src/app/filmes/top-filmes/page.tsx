import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getTopMovies } from "@/lib/api/tmdb";

// Força o funcionamento de uma página estática. Os filmes não mudaram com tanta frequência. Otimiza o carregamento. A página é gerada apenas uma vez no build. Ela é pré-renderizada durante o build, o HTML gerado fica em cache e nenhuma nova requisição acontece depois, memso que os dados mudem. Equivale ao Static Site Generation (SSG).
// - Página institucional (sobre/, contato/, empresa/)
// - Blog estático (blog/o-que-e-next ou blog/como-funciona-react)
// - Landing pages
export const dynamic = 'force-static';

// Componente que será renderizado ao ser clicado no link do menu de navegação (navbar) "Top filmes"
const TopFilmes = async () => {

  const filmes = await getTopMovies();
  return (
    <>
        {/* Componente Title reaproveitado */}
      <Title title="Top Filmes" />
      <Grid filmes={filmes}/>
    </>
  );
};

export default TopFilmes;
