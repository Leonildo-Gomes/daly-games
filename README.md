# Daly Games

Sua plataforma para descobrir e explorar novos jogos.

![Daly Games Preview](./public/preview.png)

---

## 📖 Sobre o Projeto

O Daly Games é uma interface web desenvolvida com Next.js para consumir uma API de jogos. O objetivo é fornecer uma experiência de utilizador rápida, fluida e agradável para navegar por um catálogo de jogos, ver detalhes, pesquisar e descobrir um jogo em destaque todos os dias.

Este projeto foi construído seguindo as mais recentes boas práticas de desenvolvimento com o Next.js App Router, focando em performance através de Server Components, Geração de Site Estático (SSG) e Revalidação Incremental (ISR).

---

## ✨ Funcionalidades

- **Página Inicial Dinâmica:** Apresenta um jogo em destaque e uma lista dos jogos mais recentes.
- **Detalhes do Jogo:** Página dedicada com informações completas sobre cada jogo.
- **Pesquisa de Jogos:** Mecanismo de busca para encontrar jogos por título.
- **Design Responsivo:** Interface adaptável para uma ótima experiência em desktops, tablets e telemóveis.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/):** Framework React para produção.
- **[React](https://react.dev/):** Biblioteca para construir interfaces de utilizador.
- **[TypeScript](https://www.typescriptlang.org/):** Superset de JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utility-first para estilização rápida.

---

## 🚀 Como Começar

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/en) (versão 20.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/dalygames.git
   cd dalygames
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   - Crie um ficheiro `.env.local` na raiz do projeto.
   - Copie o conteúdo do exemplo abaixo e substitua pelos seus valores.

   ```env
   # URL base da API de onde os dados dos jogos são buscados
   NEXT_API_URL=http://sua-api.com/api

   # URL base do projeto (usada para metadados e SEO)
   PROJECT_URL=http://localhost:3000
   ```

### Execução

- Para iniciar o servidor de desenvolvimento:
  ```sh
  npm run dev
  ```
- Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run start`: Inicia um servidor de produção (requer um `build` prévio).

---

## 📄 Licença

Distribuído sob a Licença MIT. Veja o ficheiro `LICENSE` para mais informações.