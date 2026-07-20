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

## 👨‍💻 Autor

Filipe P. Silveira

Desenvolvido como atividade prática do curso **Front-End** da **EBAC**.
