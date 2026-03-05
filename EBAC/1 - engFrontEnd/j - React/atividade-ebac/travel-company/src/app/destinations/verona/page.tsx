import Title from "@/components/Title";
import styles from "../verona/Verona.module.css"
const Verona = () => {
  
  return (
    <>
      <Title title={"Verona"}/>
      <div className={styles.verona__container}>
        <p className={styles.verona__text}>
          Conhecida como a cidade de Romeu e Julieta, Verona combina romantismo com imponência histórica. Com anfiteatros romanos preservados e praças encantadoras, a cidade oferece experiências culturais e momentos inesquecíveis ao pôr do sol. Incluímos hospedagem premium, visita ao centro histórico, experiência gastronômica típica do Vêneto e passeio guiado pelos principais marcos culturais.
        </p>
        <img className={styles.verona__img} src="/images/verona.jpg" alt="" />
      </div>
    </>
  );
};

export default Verona;
