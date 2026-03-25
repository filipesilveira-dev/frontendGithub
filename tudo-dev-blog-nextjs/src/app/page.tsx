// Importação do componente reutilizável Grid
import Grid from "@/components/Grid";
// Importação do componente reutilizável Title
import Title from "@/components/Title";
// Importação da estilização
import styles from "@/app/page.module.css";
// Importação da função "getArticles()" a qual retornará um dado contendo uma lista de artigos
import { getArticles } from "@/services/articles.service";

// Utilização do revalidate a cada 1h. Os dados da página são saçvos em cache, mas a cada 1 hora ele será atuzlizado, caso algum novo artigo seja adicionado
export const revalidate = 3600;

export default async function Home() {
  // "response" recebe "data: articles"
  const response = await getArticles();
  // "articles" recebe o conteúdo de "response"
  const articles = response.data;
  return (
    <div className={styles.page}>
      <Title title="Tudo Dev Blog" />
      <Grid articles={articles} />
    </div>
  );
}
