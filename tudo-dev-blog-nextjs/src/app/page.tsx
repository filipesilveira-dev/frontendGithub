// Importação do componente reutilizável Grid
import Grid from "@/components/Grid";
// Importação do componente reutilizável Title
import Title from "@/components/Title";
// Importação do mock data para ser passado via props para o componente Grid
import { articles } from "@/lib/articles";
// Importação da estilização
import styles from "@/app/page.module.css"

// Utilização do revalidate a cada 1h. Os dados da página são saçvos em cache, mas a cada 1 hora ele será atuzlizado, caso algum novo artigo seja adicionado
export const revalidate = 3600;

export default function Home() {
  return (
    <div className={styles.page}>
      <Title title="Tudo Dev Blog" />
      <Grid articles={articles}/>
    </div>
  );
}
