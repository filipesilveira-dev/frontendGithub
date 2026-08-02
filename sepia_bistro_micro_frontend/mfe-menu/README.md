# 🚀 Sépia Bistrô - Container (Micro Frontend)

O **Container** é a aplicação **Host** responsável por integrar os micro frontends do projeto **Sépia Bistrô** por meio de **Module Federation** utilizando **React** e **Vite**.

Nesta arquitetura, o Container é responsável por carregar dinamicamente os módulos remotos, compondo a aplicação final exibida ao usuário.

O projeto é composto pelos seguintes micro frontends:

- **mfe-container** → aplicação Host responsável pela integração.
- **mfe-menu** → responsável pela exibição do cardápio e seleção dos produtos.
- **mfe-checkout** → responsável pelo carrinho de compras e processo de checkout.

---

# 📋 Tecnologias utilizadas

- React 19
- Vite
- Module Federation (Vite Plugin)
- React DOM
- Babel React Compiler
- ESLint
- Node.js
- npm

---

# 📥 Instalação

Clone o repositório do projeto:

```bash
git clone <https://github.com/filipesilveira-dev/frontendGithub/tree/main/exemplo_micro_frontends>
```

Acesse a pasta do Container:

```bash
cd mfe-container
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o projeto

Como a aplicação utiliza Micro Frontends, **cada aplicação deve ser iniciada separadamente**.

## 1. Executar o micro frontend Menu

```bash
cd mfe-menu

npm install
npm run dev
```

O Menu ficará disponível em:

```
http://localhost:3001
```

---

## 2. Executar o micro frontend Checkout

```bash
cd mfe-checkout

npm install
npm run dev
```

O Checkout ficará disponível em:

```
http://localhost:3002
```

---

## 3. Executar o Container

```bash
cd mfe-container

npm install
npm run dev
```

Após iniciado, o Container ficará disponível em:

```
http://localhost:3000
```

> **Importante**
>
> Os três projetos devem estar em execução simultaneamente. O Container depende dos micro frontends remotos para montar a interface completa da aplicação. 

---

# 🏗️ Gerando a versão de produção

Para gerar o build do Container:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

# 🧪 Qualidade de Código

Executar a análise estática do código:

```bash
npm run lint
```

---

# 🧩 Arquitetura de Micro Frontends

A solução utiliza **Module Federation** para permitir que aplicações independentes sejam carregadas dinamicamente em tempo de execução.

```
                    ┌──────────────────────┐
                    │      mfe-container   │
                    │   localhost:3000     │
                    └───────────┬──────────┘
                                │
                ┌───────────────┴───────────────┐
                │                               │
                ▼                               ▼
      ┌──────────────────┐           ┌────────────────────┐
      │    mfe-menu      │           │   mfe-checkout     │
      │ localhost:3001   │           │ localhost:3002     │
      └──────────────────┘           └────────────────────┘
```

Cada micro frontend possui seu próprio ciclo de desenvolvimento, build e execução, permitindo evolução independente da aplicação.

---

# 🔄 Como funciona a comunicação entre os Micro Frontends

A comunicação acontece através do **Container**, que atua como aplicação Host.

## Carregamento dos módulos

O Container possui a configuração dos micro frontends remotos em seu `vite.config.js`.

Durante a inicialização da aplicação, o Module Federation busca os arquivos `remoteEntry.js` disponibilizados pelos micros:

| Micro Frontend | Porta |
|----------------|------:|
| mfe-menu | 3001 |
| mfe-checkout | 3002 |

Esses módulos são carregados dinamicamente pelo Container em tempo de execução (run-time integration). :contentReference[oaicite:1]{index=1}

---

## Compartilhamento de dependências

Para evitar conflitos de versão e múltiplas instâncias do React, o Container compartilha as bibliotecas comuns entre todos os micros.

São compartilhadas:

- React
- React DOM

Como singleton, garantindo que toda a aplicação utilize a mesma instância dessas bibliotecas. :contentReference[oaicite:2]{index=2}

---

## Fluxo de comunicação

O fluxo de funcionamento da aplicação pode ser representado da seguinte forma:

```
                Usuário
                    │
                    ▼
             mfe-container (Host)
                    │
         ┌──────────┴──────────┐
         │                     │
         ▼                     ▼
     mfe-menu           mfe-checkout
         │                     │
         └──────────┬──────────┘
                    ▼
           Interface integrada
```

O Container é responsável apenas pela composição da aplicação.

Cada micro frontend permanece responsável exclusivamente pelo seu domínio de negócio.

---

# 📌 Objetivo do projeto

Este projeto demonstra a implementação de uma arquitetura baseada em **Micro Frontends**, contemplando:

- Integração de aplicações independentes utilizando Module Federation;
- Carregamento dinâmico de componentes remotos;
- Compartilhamento de dependências entre aplicações;
- Desenvolvimento desacoplado dos módulos;
- Execução independente de cada micro frontend;
- Composição da interface por meio de uma aplicação Host.

---

# 🌐 Portas utilizadas

| Aplicação | Porta |
|-----------|------:|
| mfe-container | **3000** |
| mfe-menu | **3001** |
| mfe-checkout | **3002** |

---

# 👨‍💻 Autor

**Filipe P. Silveira**

Desenvolvido como atividade prática do curso **Front-End** da **EBAC**.