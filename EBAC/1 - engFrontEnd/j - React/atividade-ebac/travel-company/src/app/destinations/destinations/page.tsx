import Grid from "@/components/Grid";
import Title from "@/components/Title";
import {destinations} from "@/lib/destinations";


export default function Destinations() {
  return (
    <section>
      <Title title="Destinos"/>
      <Grid destinations = {destinations} />
    </section>
  );
}