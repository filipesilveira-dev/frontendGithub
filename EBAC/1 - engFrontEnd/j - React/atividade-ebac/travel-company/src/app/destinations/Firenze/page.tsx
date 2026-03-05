import Title from "@/components/Title";
import styles from "../firenze/Firenze.module.css"
const Firenze = () => {
  
  return (
    <>
      <Title title={"Florença"}/>
      <div className={styles.firenze__container}>
        <p className={styles.firenze__text}>
          Florença é uma verdadeira obra de arte a céu aberto. Caminhar por suas ruas é mergulhar no coração do Renascimento italiano. Entre catedrais imponentes, museus renomados e pontes históricas, a cidade encanta pela elegância e atmosfera cultural única. Nosso pacote inclui hospedagem selecionada no centro histórico, visita guiada aos principais pontos culturais, experiência gastronômica com vinhos da Toscana e tempo livre para explorar mercados locais e ateliês artesanais.
        </p>
        <img className={styles.firenze__img} src="/images/firenze.jpg" alt="" />
      </div>
    </>
  );
};

export default Firenze;
