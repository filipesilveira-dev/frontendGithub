// Este arquivo funcionará como cliente da API (onde as requisições estão).

import axios from "axios";
import { articles } from "@/lib/articles";
// Importação da função notFound() nativa de next
import { notFound } from "next/navigation";

// Função que retorna o conteúdo de "articles" (mock data), ou seja, a lista de artigos. O uso do async indica que será retornada uma Promise, o que aconteceria numa API real. Requisição para listar todos os artigos presentes em "http:localhost:3000/api/articles"
export const getArticles = async () => {
    // No caso de uma API real, basta alterar o endereço do endpoint
  return axios.get("http:localhost:3000/api/articles");
};

// Funçaõ que percorre cada artigo em articles e busca aquele com o mesmo "slug" passado como argumento
export const getArticleBySlug = async (slug: string) => {
  const article = articles.find((a) => a.slug === slug);

  // Por se tratar de uma Promise, corre-se o risco de o arquivo não ser encontrado (undefined)
  if (!article) {
    return notFound();
  }

  return {
    // Retorna as informações do artigo
    data: article,
  };
};
