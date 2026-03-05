import Title from "@/components/Title";
import styles from "@/app/page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Title title="Conheça as maravilhas da Itália" />
      <div className={styles.page__container}>
        <p className={styles.page__text}>
          Bem-vindo a Destino Itália Viagens, um portal dedicado a proporcionar
          experiências autênticas pelas cidades mais encantadoras da Itália. Nosso
          objetivo é levar viajantes brasileiros a descobrir a riqueza cultural,
          histórica e gastronômica italiana por meio de roteiros cuidadosamente
          planejados. <br></br> <br></br>Aqui você encontrará destinos selecionados que representam
          diferentes facetas do país — desde o esplendor artístico de Florença,
          passando pelo charme medieval de Siena, pelo romantismo de Verona, até a
          atmosfera única dos canais de Veneza. Cada viagem foi pensada para
          oferecer conforto, imersão cultural e momentos inesquecíveis. <br></br> <br></br>No portal,
          você pode explorar cada destino, conhecer detalhes das experiências
          incluídas e descobrir pacotes completos que combinam hospedagem,
          passeios guiados e vivências gastronômicas. Tudo foi desenhado para
          transformar sua viagem em uma jornada pela arte de viver italiana. <br></br><br></br><strong>Destino Itália Viagens — Sua jornada inesquecível pela Itália <Link href="/destinations/destinations/"><u>começa aqui</u></Link>.</strong>
        </p>
        <img className={styles.page__img} src="/images/venezaInicial.jpg" alt="Imagem de Veneza" />
      </div>
    </section>
  );
}
