import slugify from 'slugify';

const articlesWithoutSlug = [
  {
    id: "1",
    title: "Introdução ao Next.js para Iniciantes",
    author: "Gary P. Theodor",
    publication: "março de 2026",
    content: "Next.js é um framework baseado em React que facilita a criação de aplicações web modernas com alto desempenho. Ele oferece recursos como renderização do lado do servidor, geração de páginas estáticas e roteamento automático baseado em arquivos. Esses recursos permitem que desenvolvedores criem aplicações escaláveis e otimizadas para SEO com menos configuração inicial, tornando o Next.js uma das ferramentas mais populares no desenvolvimento front-end atual.",
  },
  {
    id: "2",
    title: "Como Funciona o Fetch de Dados no Next.js",
    author: "Gary P. Theodor",
    publication: "março de 2026",
    content: "O Next.js permite diferentes estratégias para buscar dados em uma aplicação, como renderização estática, renderização dinâmica e revalidação incremental. Essas abordagens permitem que o desenvolvedor escolha entre performance e atualização frequente dos dados. Ao utilizar funções assíncronas diretamente em componentes de servidor ou rotas de API, é possível consumir dados de serviços externos de forma eficiente e organizada.",
  },
  {
    id: "3",
    title: "O Papel das Rotas Dinâmicas em Aplicações Web",
    author: "Gary P. Theodor",
    publication: "março de 2026",
    content: "Rotas dinâmicas são utilizadas quando uma aplicação precisa gerar múltiplas páginas com base em parâmetros variáveis, como páginas de artigos, produtos ou perfis de usuários. No Next.js, isso pode ser feito utilizando colchetes no nome da pasta ou arquivo, como [slug]. Dessa forma, a aplicação consegue criar páginas únicas baseadas nos dados recebidos de uma API ou banco de dados.",
  },
  {
    id: "4",
    title: "Boas Práticas na Estruturação de Projetos Front-end",
    author: "Gary P. Theodor",
    publication: "março de 2026",
    content: "Organizar corretamente a estrutura de um projeto facilita a manutenção e a escalabilidade da aplicação. Em projetos com Next.js, é comum separar componentes reutilizáveis em uma pasta components, manter tipos em types, estilos em módulos CSS e lógica de acesso à API em uma camada própria. Essa organização melhora a legibilidade do código e ajuda equipes a trabalharem de forma mais eficiente.",
  },
  {
    id: "5",
    title: "Por Que Utilizar Slugs em URLs de Artigos",
    author: "Gary P. Theodor",
    publication: "março de 2026",
    content: "Slugs são versões simplificadas e amigáveis de títulos utilizadas em URLs. Em vez de usar identificadores numéricos, muitas aplicações utilizam slugs gerados a partir do título do conteúdo, como introducao-ao-nextjs. Isso melhora a legibilidade da URL para usuários e também contribui para o SEO, pois motores de busca conseguem compreender melhor o conteúdo da página.",
  },
];

export const articles = articlesWithoutSlug.map(article => ({
  ...article,
  slug: slugify(article.title, { lower: true, strict: true, locale: 'pt' })
}));
