import Grid from "@/components/Grid";
import Title from "@/components/Title";
import { articles } from "@/lib/articles";
import styles from "@/app/page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <Title title="Tudo Dev Blog" />
      <Grid articles={articles}/>
    </div>
  );
}
