import Title from "@/components/Title";
import styles from "../siena/Siena.module.css";
const Siena = () => {
  return (
    <>
      <Title title={"Siena"} />
      <div className={styles.siena__container}>
        <p className={styles.siena__text}>
          Charme medieval e paisagens toscanas que parecem pinturas vivas.",
          longDescription: "Siena preserva sua essência medieval como poucas
          cidades no mundo. Suas ruelas de pedra, a icônica Piazza del Campo e o
          clima intimista fazem dela um destino perfeito para quem busca
          autenticidade e tranquilidade. O pacote contempla hospedagem boutique,
          tour histórico guiado, degustação em vinícola da região e passeio
          panorâmico pelas colinas da Toscana.
        </p>
        <img className={styles.siena__img} src="/images/siena.jpg" alt="" />
      </div>
    </>
  );
};

export default Siena;
