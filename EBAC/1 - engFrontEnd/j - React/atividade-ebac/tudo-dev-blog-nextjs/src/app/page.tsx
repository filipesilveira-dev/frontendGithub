import Grid from "@/components/Grid";
import Title from "@/components/Title";
import { articles } from "@/lib/articles";

const artigo = articles.find((article) => article.id == "1")

export default function Home() {
  return (
    <div>
      <Title title="Tudo Dev Blog" />
      {/* Verifica se articles foi importado corretamente. Tem o "?" pois pode ser que o find() não ache nenhum artido com o id mencionado */}
      Verificando se articles foi importado em Home -- {artigo?.title} OK
      <Grid articles={articles}/>
    </div>
  );
}
