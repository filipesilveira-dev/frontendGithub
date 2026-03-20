// Importação do mock data 
import { articles } from "@/lib/articles";
// Importação da ferramenta <Link/> nativa de next
import Link from "next/link";
// Importação da função notFound() nativa de next
import { notFound } from "next/navigation";
// Importação da estilização
import styles from "./ArticleDetails.module.css";
// Importação do componente Title
import Title from "@/components/Title";

// Utilização do force-static, pois o conteúdo do artigo dificilmente mudará após sua publicação. Os dados ficarão salvos em cache
export const dynamic = "force-static";

// Tipagem typescript: é esperado um parâmetro (params) e esse parâmetro, que se trata de uma promise, espera um id em formatod string e um slug também em formato string
type Props = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};

// Arrow function que recebe params como argumento (tipado de acordo com Props)
// Lembrando que params é assíncrono, sendo necessário async/await
export const generateMetadata = async ({ params }: Props) => {
  // Desestruturação de id contido em params para identificar o artigo em específico
  const { id } = await params;

  // Busca no mock dados "articles" o artigo que possui o "id" igual ao "id" dos parâmetros
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
  // Desestruturação necessária para utilizar o slug (ou outra propriedade)
  const { slug } = await params;

  // Busca no mock dados "articles" o artigo que possui o "slug" igual ao "slug" dos parâmetros
  const details = articles.find((article) => article.slug == slug);

  // Por se tratar de uma promessa em params, details pode OU NÃO encontrar algo, ou seja, pode ser "undefined". Se não hover esse "if", o código estará então tratando como certa essa promessa, gerando um erro de tipagem do typesrcrit. Trata-se de uma pequena validação que mantém o fluxo do código a depender da resposta da promise.
  if (!details) {
    // Será retornada uma função nativa do next.js que direciona para a página criada em artigos/ chamada not-found.tsx
    return notFound();
  }

  // Do objeto retornado em "details", ou seja o artigo selecionado para esta página, três de suas propriedades são desestruturadas, tornando-as variáveis de escopo local.
  const { title, author, content } = details;

  return (
    <>
      <div className={styles.detalhes}>
        <div className={styles.detalhes__container}>
          {/* O uso do Link aqui previne que a página toda seja recarregada como ocorre com <a> */}
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
