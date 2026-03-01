import Grid from "./components/Grid";
import Title from "./components/Title";
import {filmes} from "@/lib/filmes";


export default function Home() {
  return (
    <>
    {/* Porps "title", que é uma string passada para o componente filho <Title/> */}
    <Title title="Filmes em destaque"/>
    <Grid filmes={filmes}/>
    </>
  );
}
