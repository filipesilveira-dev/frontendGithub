import { articles } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./ArticleDetails.module.css";
import Title from "@/components/Title";

// Tipagem typescript: é esperado um parâmetro (params) e esse parâmetro se trata de uma string
type Props = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};

// Arrow function que recebe params como argumento (tipado de acordo com Props)
// Lembrando que params é assíncrono, sendo necessário async/await
export const generateMetadata = async ({ params }: Props) => {
  // Desestruturação de id contido em params
  const { id } = await params;

  // Busca no mock dados "filmes" o filme que possui o "id" igual ao "id" dos parâmetros
  const details = articles.find((article) => article.id == id);

  // Pequena validação caso o que contenha em details seja undefined. Caso seja, nada será retornado
  if (!details) {
    return;
  }

  // Será retornado um objeto contendo (os metadados) o title e o shortContent contidos em details
  return {
    // Define o título da página
    title: `${details.title} | Tudo Dev Blog`,

    // Define a descrição da página utilizada pelos motores de busca. Também pode aparecer como resumo nos resultados de pesquisa
    description: details.shortContent,

    // Propriedade responsável pelos metadados de compartilhamento em redes sociais
    openGraph: {
      // Título que aparecerá quando a página for compartilhada em redes sociais
      title: `${details.title} | Tudo Dev Blog`,

      // Descrição que acompanhará o preview do link compartilhado
      description: details.shortContent,
    },
  };
};

// Para utilizar as informações de outra página na rota, é preciso utilizar params (props não servirá aqui). Params trata-se de uma API dinâmica e nessa versão do next.js 15 elas são assíncronas. Ou seja, é necessário o uso do async/await.
const ArticleDetail = async ({ params }: Props) => {
  // Desestruturação necessária para utilizar o slug (ou outra propriedade). Agora params é de fato assíncrono. Vide documentação next.js 15
  const { slug } = await params;

  // Busca no mock dados "articles" o artigo que possui o "id" igual ao "id" dos parâmetros
  const details = articles.find((article) => article.slug == slug);

  // Por se tratar de uma promessa em params, details pode OU NÃO encontrar algo, ou seja, pode ser "undefined". Se não hover esse "if", o código estrá então tratando como certa essa promessa, gerando um erro de tipagem do typesrcrit. Aqui o typescript mostra sua importância: mais a frente da aplicação, algum erro por conta dessa promise poderia ocorrer. Já aqui no desenvolvimento, esse erro é prevenido. Trata-se de uma pequena validação que mantém o fluxo do código a depender da resposta da promise.
  if (!details) {
    // Será retornada uma função nativa do next.js que direciona para a página criada em filmes/ chamada not-found.tsx
    return notFound();
  }

  // Do objeto retornado em "details", ou seja o filme selecionado para esta página, três de suas propriedades são desestruturadas, tornando-as variáveis de escopo local.
  const { title, author, content } = details;

  return (
    <>
      <div className={styles.detalhes}>
        <div className={styles.detalhes__container}>
          <Link className={styles.detalhes__voltar} href={"/"}>
            <span>Voltar</span>
          </Link>
          <section>
            <article className={styles.detalhes__info}>
              <Title title={title}/>
              <p>{content}</p>
              <h6>Autor: {author}</h6>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
