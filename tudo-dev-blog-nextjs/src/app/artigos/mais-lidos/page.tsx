// Importação do componente reutilizável Grid
import Grid from "@/components/Grid";
// Importação do componente reutilizável Title
import Title from "@/components/Title";
// Importação do mock data para ser passado via props para o componente Gid
import { articles } from "@/lib/articles";
// Importação da estilização
import styles from "./maisLidos.module.css"

// Utilização do revalidate a cada 1h. Os dados da página são saçvos em cache, mas a cada 1 hora ele será atuzlizado, caso algum novo artigo entre para a lista de mais lidos
export const revalidate = 3600;

export default function MaisLidos() {
  return (
    <div className={styles.container}>
      <Title title="Mais Lidos" />
      <Grid articles={articles}/>
    </div>
  );
}
