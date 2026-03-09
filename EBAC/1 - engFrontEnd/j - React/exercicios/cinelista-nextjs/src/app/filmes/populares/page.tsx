import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getPopularMovies } from "@/lib/api/tmdb";

// Trata-se de um meio termo entre dynamic e static. A cada 60 segundos será feita uma nova chamada da API. A página é gerada estaticamente, mas atualiza depois de um tempo. Esse padrão é chamado de Incremental Static Regeneration (ISR). A página fica em cache, mas após o temo determinado, próxima requisição dispara atualização em background e o novo HTML substitui o antigo. Indicado para páginas que mudam de vez em quando, mas não precisam ser atualizadas a cada request.
// - Site de notícias
// - E-commerce (página do produto. O preço ou o estoque podem mudar)
// - Blog com novos posts
export const revalidate = 60;

// Componente que será renderizado ao ser clicado no link do menu de navegação (navbar) "Populares"
const FilmesPopulares = async () => {

  const filmes = await getPopularMovies();
  return (
    <>
        {/* Componente Title reaproveitado */}
      <Title title="Filmes Populares" />
      <Grid filmes={filmes}/>
    </>
  );
};

export default FilmesPopulares;
