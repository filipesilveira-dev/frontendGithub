// Importação do arquivo com a interface typescript esperada de article
import type { Article } from "@/types/types";
// Importação da estilização
import styles from "./Card.module.css";
// Importação da ferramenta Link nativa de next
import Link from "next/link";
import Image from "next/image";

// Tipagem das props recebidas do componente pai (Grid)
type Props = {
  // "article" tipado de acordo com a interface criada "Article"
  article: Article;
};

// Componente criado que recebe do componente pai "article" via props. "Card" representa a estrutura de cada artigo (article)
const Card = ({ article }: Props) => {
  // Desestruturação do objeto "article". Cada propriedade virou uma variável local. Não há, dessa forma, a necessidade de representar como {article.title}, por exemplo
  const { title, author, shortContent, slug } = article;

  return (
    // Cada "div" aqui funcionará como um elemento de uma lista.
    <div className={styles.card}>
      {/* Link, ao contrário de <a>, faz apenas a troca necessária, sem carregar toda a página */}
      <Link href={`/artigos/${slug}`}>
        <div className={styles.card__link__container}>
          <Image
            className={styles.card__poster}
            src="/imgPapel.png"
            alt="Imagem de folha de papel"
          />
          <div className={styles.card__info}>
            {/* Passa o título do artigo em questão */}
            <h3 className={styles.card__title}>{title}</h3>
            {/* Passa a desrcição curta do artigo em questão. */}
            <p className={styles.card__description}>{shortContent}</p>
            {/* Passa o autor desrcição curta do artigo em questão. */}
            <p className={styles.card__description}>Autor: {author}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Exporta o componente Grid (componente pai)
export default Card;
