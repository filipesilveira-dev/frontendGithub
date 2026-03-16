import type { Article } from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";

// Tipagem das props recebidas do componente pai (Grid)
type Props = {
  // "filme" tipado de acordo com a interface criada "Filme"
  article: Article;
};

// Componente criado que recebe do componente pai "filme" via props. "Card" representa a estrutura de cada filme
const Card = ({ article }: Props) => {
  // Desestruturaçã do objeto "filme". Cada propriedade virou uma variável local. Não há, dessa forma, a necessidade de representar como {filme.imagem}, por exemplo
  const { title, author, shortContent, slug } = article;

  // Variável criada para resumir o texto descritivo do filme: se existir "overview" (lembrando que ele pode ser undefined) e o seu tamanho for maior ou igual a 256 caracteres, então faça um substring() nele (serve para extrair uma parte (subcadeia) de uma string) extraindo apenas do caracter na posição "0" até o caracter na posição 252 (253 não entra) e mostre "...". Caso contrário, apenas mostre a variável "overview"
  // const resume =
  //   overview?.length >= 256 ? `${overview?.substring(0, 253)}...` : overview;

  return (
    // Cada "div" aqui funcionará como um elemento de uma lista.
    <div className={styles.card}>
      {/* Link, ao contrário de <a>, faz apenas a troca necessária, sem carregar toda a página */}
      <Link href={`/artigos/${slug}`}>
        <div className={styles.card__link__container}>
          {/* "img" recebe como "src" a propriedade "imagem" do objeto filme. Trata-se do endereço de onde essa imagem virá (string) */}
          <img className={styles.card__poster} src="/imgPapel.png" alt="Imagem de folha de papel" />
          <div className={styles.card__info}>
            {/* Passa o título do filme em questão */}
            <h3 className={styles.card__title}>{title}</h3>
            {/* Passa a desrcição do filme em questão. Local de utilização da variável "resume" */}
            <p className={styles.card__description}>{shortContent}</p>
            <p className={styles.card__description}>Autor: {author}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Exporta o componente Grid (componente pai)
export default Card;
