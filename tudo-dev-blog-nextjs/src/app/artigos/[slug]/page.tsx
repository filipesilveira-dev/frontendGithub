// Importação da ferramenta <Link/> nativa de next
import Link from "next/link";
// Importação do arquivo com a interface typescript esperada de article
import type { Article } from "@/types/types";
// Importação da função notFound() nativa de next
import { notFound } from "next/navigation";
// Importação da estilização
import styles from "./ArticleDetails.module.css";
// Importação do componente Title
import Title from "@/components/Title";
// Importação da função, que retorna a lista de artigos, e da função que busca um artigo pelo slug (em substituição ao uso de "articles" diretamente aqui)
import { getArticles, getArticleBySlug } from "@/services/articles.service";

// Utilização do force-static, pois dificilmente o conteúdo dos artigos mudarão (edição de um artigo já postado). Os dados ficarão salvos em cache.
export const dynamic = "force-static";

// Define quais páginas serão geradas no build
export async function generateStaticParams() {
  // Caso os artigos fossem, ou venham a se tornar, um conteúdo secundário do site, faz sentido usar try/catch, pois impede que a página como um todo "quebre". Como os dados são críticos, é aceitável falhar o build para evitar inconsistência, pois o seu conteúdo principal não apareceria de toda forma.
  const response = await getArticles();
  // Recebe o conteúdo de "response", que no caso é a lista com os artigos
  const articles = response.data;

  // Será criada uma array nova contendo o slug de cada "article" (artigo)
  return articles.map((article: Article) => ({
    slug: article.slug,
  }));
}

// Tipagem typescript: é esperado um parâmetro (params) e esse parâmetro, que se trata de uma promise, espera um id em formatod string e um slug também em formato string
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Arrow function que recebe params como argumento (tipado de acordo com Props)
// Lembrando que params é assíncrono, sendo necessário async/await
export const generateMetadata = async ({ params }: Props) => {
  // Desestruturação de slug contido em params para identificar o artigo em específico
  const { slug } = await params;

  // Por se tratar de requisição assíncrona, será necessário o tratamento de erros try/catch. Será tentado primeiro então receber o conteúdo da promise de "getArticleBySlug(slug)", que no caso seria "data: article". Caso receba o conteúdo, será atribuído à "details" o conteúdo de "data: article", que no caso será o objeto  "article". Dessa maneira, o código continua para o "return", onde serão estabelecidas as informações de metadata. Caso contrário, caso não seja retornado um "data: article" (artigo não existe), retorna no "title" uma mensagem de artigo não encontrado.
  try {
    // Chamada da função criada em "services" para buscar um artigo com base no seu slug. Retorna uma promise
    const article = await getArticleBySlug(slug);
    const details = article.data;

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
  } catch {
    return {
      title: "Artigo não encontrado",
    };
  }
};

// Para utilizar as informações de outra página na rota, é preciso utilizar params (props não servirá aqui). Params trata-se de uma prop fornecida pelo Next e nessa versão do next.js 15 elas são assíncronas. Ou seja, é necessário o uso do async/await.
const ArticleDetail = async ({ params }: Props) => {
  // Desestruturação necessária para utilizar o slug (ou outra propriedade)
  const { slug } = await params;

  // Declaração de variáveis para receberem os valores vindo de "try" para serem utilizados no return
  let title = "";
  let author = "";
  let content = "";

  // Por se tratar de requisição assíncrona, será necessário o tratamento de erros try/catch. Será tentado primeiro então receber o conteúdo da promise de "getArticleBySlug(slug)", que no caso seria "data: article". Caso receba o conteúdo, será atribuído à "details" o conteúdo de "data: article", que no caso srá o objeto  "article". Dessa maneira, o código continua para o "return", retornando a estrutura da página contendo os detalhes do artigo. Caso contrário, caso não seja retornado um "data: article" (artigo não existe - undefined), será chamada a função "notFound()".
  try {
    // Chamada da função criada em "services" para buscar um artigo com base no seu slug. Retorna uma promise
    const article = await getArticleBySlug(slug);
    const details = article.data;

    // Atribui às respectivas variáveis os valores obtidos após o "try" buscar os dados. Esses dados serão utilizados no "return"
    title = details.title;
    author = details.author;
    content = details.content;
  } catch {
    // Será retornada uma função nativa do next.js que direciona para a página criada em artigos/ chamada not-found.tsx
    return notFound();
  }
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
              <Title title={title} />
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
