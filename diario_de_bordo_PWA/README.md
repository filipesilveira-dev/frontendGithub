# 🚀 Atividade EBAC - Diário de Bordo PWA

Projeto desenvolvido como atividade prática da EBAC com o objetivo de implementar um **Diário de Bordo** como **Progressive Web App (PWA)** utilizando **React**, **TypeScript**, **Vite** e **Zustand**.

## 📋 Tecnologias utilizadas

- React
- TypeScript
- Vite
- Zustand (gerenciador de estado global)
- PWA (Service Worker & Web App Manifest)
- Node.js
- npm
- Prettier (para formatação)
- ESLint (para linting)
- Jimp (biblioteca de processamento de imagens JS)

---

# 📥 Instalação

Clone este repositório:

```bash
git clone https://github.com/filipesilveira-dev/frontendGithub
```

Acesse a pasta do projeto:

```bash
cd diario_de_bordo_PWA
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Após iniciar, acesse o endereço informado no terminal (normalmente):

```
http://localhost:5173
```

---

# 🏗️ Gerando a versão de produção

Para executar o build da aplicação:

```bash
npm run build
```

Para pré-visualizar a versão de produção localmente:

```bash
npm run preview
```

---

# 🧪 Qualidade de Código

Executar a análise estática de código (ESLint):

```bash
npm run lint
```

Executar a formatação do código (Prettier):

```bash
npm run fix
```

---

# 📱 Funcionalidades PWA (Progressive Web App)

Este projeto foi construído com suporte completo a Progressive Web Apps, englobando:

- **Funcionamento Offline (Offline First)**: Por meio do registro do Service Worker (`sw.js`), recursos estáticos essenciais (como HTML, CSS, manifesto e ícones) são armazenados em cache (`diario-cache`), permitindo que a aplicação seja carregada sem conexão à internet.
- **Persistência de Dados**: O registro do diário de bordo é salvo localmente no `localStorage` do navegador para manter as informações persistidas mesmo após o fechamento da página.
- **Instalação Customizada**: Gerenciamento de estado global via Zustand para controle e renderização do botão personalizado de instalação na tela inicial do dispositivo.
- **Manifesto Web**: Configuração detalhada do arquivo `manifest.json` definindo ícones responsivos, orientação, cor temática e o comportamento de exibição como aplicação nativa (_standalone_).

---

# 📌 Objetivo da atividade

Este projeto demonstra a criação e configuração de um Progressive Web App moderno, contemplando:

- Criação de uma aplicação reativa com React e TypeScript;
- Gerenciamento de estado global de instalação com Zustand;
- Registro e ativação de um Service Worker com interceptação de requisições (`fetch`) e cache offline;
- Implementação de um manifesto de web app customizado;
- Garantia de qualidade do código por meio de ESLint e Prettier.

---

## 📊 Relatório Lighthouse antes das otimizações

Por conta do uso do Vite, ferramenta de build, alguns aspectos relacionados à performance são positivamente afetados, como minificação e code-splitting na fase de produção, tornando desnecessário qualquer ação em relação a esses aspectos. De acordo com o relatório, as principais mudanças sugeridas estão ligadas à acessibilidade e ao SEO.

### Acessibilidade (86):

- **As cores de primeiro e segundo plano não têm uma taxa de contraste suficiente**: Para muitos usuários, é difícil ou impossível ler textos com baixo contraste.
- **Os elementos de título não aparecem em uma ordem sequencial descendente**: Títulos propriamente ordenados que não pulam níveis comunicam a estrutura semântica da página, facilitando a navegação e compreensão ao usar tecnologias adaptativas.
- **O documento não tem um ponto de referência principal**: Um ponto de referência principal ajuda os usuários de leitores de tela a navegar em uma página da Web.

### SEO (82): 

- **O documento não tem uma metadescrição**: Metadescrições podem ser incluídas nos resultados da pesquisa para resumir concisamente o conteúdo da página.
- **robots.txt não é válido**: Se o arquivo robots.txt for inválido, talvez não seja possível aos rastreadores entender como você quer que seu site seja rastreado ou indexado. 

---

## 🛠️ Ajustes feitos com base no relatório Lighthouse

- **Contraste de Cores**: Modificação no arquivo `styles.css`.
- **Hierarquia Semântica dos Cabeçalhos**: Modificações em `LogList.tsx` e `LogItem.tsx` no arquivo para ajustar hierarquicamente as tags `<h1>`, `<h2>`, `<h3>` e etc.
- **Ponto de Referência Principal (Main Landmark)**: Modificação no arquivo `App.tsx` substituindo o fragment (`<></>`) por `<main>`.
- **Metadescrição**: Modificação no arquivo `index.html` adicionando a metadescrição.
- **Criação do arquivo robots.txt**: para conceder permissões corretas de indexação aos rastreadores e explicitar o manifesto PWA.

---

## ⚡ Otimizações Obrigatórias (atividade EBAC)

- **Imagens**: O projeto não utiliza a tag `<img>` em seus componentes React. Portanto, o atributo loading="lazy" não é aplicável no momento.
- **HTML/CSS/JS**: Devido ao uso da ferramenta de build Vite, tanto a minificação quanto o code-splitting são feitos de maneira automática ao rodar o comando `npm run build`.
- **Código**: A biblioteca `jimp` de JavaScript, utilizada para redimensionar imagens, não está sendo importada em nenhum lugar do código, podendo ser removida das dependências. Algumas variáveis CSS estavam declaradas, mas não utilizadas (`--accent-hover` e `--danger-hover`).
- **Imports**: Importar no `main.tsx` apenas o subset `latin` para carregar estritamente a variação latina. Ao invés de importar todos os caracteres, agora são importados apenas os utilizados nesta aplicação. **Otimização crítica**: redução dos arquivos gerados de 41 para 14, diminuindo drasticamente o tamanho do cache inicial do PWA, o consumo de banda e o tempo de build.

---

## 👨‍💻 Autor

Filipe P. Silveira

Desenvolvido como atividade prática do curso **Front-End** da **EBAC**.
