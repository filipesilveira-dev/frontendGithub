import Grid from "@/components/Grid";
import Title from "@/components/Title";
import {destinations} from "@/lib/destinations";


export default function Home() {
  return (
    <section>
      <Title title="Conheça as maravilhas da Itália"/>
      <Grid destinations = {destinations} />
    </section>
  );
}
