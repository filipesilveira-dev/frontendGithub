import Grid from "@/components/Grid";
import Title from "@/components/Title";
import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <>
      <Title title="Mais Lidos" />
      <Grid articles={articles}/>
    </>
  );
}
