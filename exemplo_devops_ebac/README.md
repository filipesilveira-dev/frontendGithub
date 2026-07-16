# 🚀 Atividade EBAC - Pipeline CI/CD

Projeto desenvolvido como atividade prática da EBAC com o objetivo de implementar um pipeline de Integração Contínua (CI) e Entrega Contínua (CD) utilizando **GitHub Actions** e **Vercel**.

## 📋 Tecnologias utilizadas

- Next.js
- Node.js
- npm
- GitHub Actions
- Vercel

---

# 📥 Instalação

Clone este repositório:

```bash
git clone https://github.com/filipesilveira-dev/frontendGithub
```

Acesse a pasta do projeto:

```bash
cd exemplo_devops_ebac
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
http://localhost:3000
```

---

# 🏗️ Gerando a versão de produção

Para executar o build da aplicação:

```bash
npm run build
```

---

# 🧪 Executando os testes

Executar os testes automatizados:

```bash
npm run test
```

Executar a análise de código (ESLint):

```bash
npm run lint
```

Verificar a formatação do código:

```bash
npm run format
```

---

# ⚙️ Pipeline CI/CD

Este projeto utiliza **GitHub Actions** para automatizar o processo de integração e entrega contínua.

Sempre que ocorre um **push na branch `main`**, o pipeline é executado automaticamente.

O fluxo do pipeline é composto pelas seguintes etapas:

```text
Push na main
      │
      ▼
    Build
      │
      ▼
    Tests (Lint + Format + Testes)
      │
      ▼
 Deploy para Vercel
```

O deploy somente é realizado caso todas as etapas anteriores sejam concluídas com sucesso.

---

# 🔎 Acompanhando o Pipeline

Todas as execuções podem ser acompanhadas na aba **Actions** do GitHub.

```
https://github.com/filipesilveira-dev/frontendGithub/actions/workflows/mainEbac.yml
```

Em cada execução é possível visualizar o status dos seguintes jobs:

- ✅ Build
- ✅ Lint
- ✅ Verificação de formatação
- ✅ Testes
- ✅ Deploy

Caso alguma etapa falhe, o pipeline será interrompido e o deploy não será realizado.

---

# 🌐 Aplicação publicada

A aplicação está disponível em:

```
https://frontend-github-42l6.vercel.app/
```

---

# 📌 Objetivo da atividade

Este projeto demonstra a implementação de um pipeline de CI/CD utilizando GitHub Actions, contemplando:

- Build automatizado da aplicação;
- Validação do código com ESLint;
- Verificação de formatação;
- Execução dos testes automatizados;
- Deploy automático para a Vercel;
- Garantia de que o deploy só ocorra após todas as validações serem aprovadas.

---

## 👨‍💻 Autor

Filipe P. Silveira

Desenvolvido como atividade prática do curso **Front-End** da **EBAC**.