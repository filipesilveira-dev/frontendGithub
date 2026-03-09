import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getNowPlaying } from "@/lib/api/tmdb";

// Força a página a ser renderizada a cad arequisição. Não tem cache, o código executa toda vez que alguém acessa e sempre busca por dados atualizados. Equivale ao Server Side Rendering (SSR). Utilizado quando os dados precisam estar sempre atualizados.
// - Dashboard (mostra métricas, vendas, relatórios)
// - Página de perfil de usuário (notificações, mensagens, dados pessoais)
// - Carrinho de compras (o conteúdo muda a cada ação do usuário)
export const dynamic = 'force-dynamic';

// Componente que será renderizado ao ser clicado no link do menu de navegação (navbar) "Em alta"
const FilmesEmAlta = async () => {

  const filmes = await getNowPlaying();
  return (
    <>
        {/* Componente Title reaproveitado */}
      <Title title="Filmes em Alta" />
      <Grid filmes={filmes}/>
    </>
  );
};

export default FilmesEmAlta;
