import Title from "@/components/Title";
import styles from "../veneza/Veneza.module.css"
const Veneza = () => {
  
  return (
    <>
      <Title title={"Veneza"}/>
      <div className={styles.veneza__container}>
        <p className={styles.veneza__text}>
          Veneza é um espetáculo à parte. Navegar por seus canais, atravessar pontes históricas e contemplar palácios à beira d’água transforma qualquer viagem em experiência memorável. A cidade combina arte, luxo e mistério em um cenário incomparável. O pacote inclui hospedagem com vista para os canais, passeio de gôndola, visita guiada à Praça de São Marcos e experiências gastronômicas selecionadas.
        </p>
        <img className={styles.veneza__img} src="/images/veneza.jpg" alt="" />
      </div>
    </>
  );
};

export default Veneza;
