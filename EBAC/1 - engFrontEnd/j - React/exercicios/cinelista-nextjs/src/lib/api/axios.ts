// Arquivo criado para receber uma instância de axios com configurações padrão para realizar uma requisição. 
// Dessa forma, não será necessário a cada requisição repetir isso.
import axios from "axios";

// Perceba que são os dados necessários nas requisições. Para realizar um GET, por exemplo, basta utilizar tmdbApi.get("/api"), ao invés de escrever tudo toda vez.
const tmdbApi = axios.create({
  // Se process.env.TMDB_API_URL estiver indefinido na Vercel, o Axios usará a string padrão abaixo:
  baseURL: process.env.TMDB_API_URL || "https://api.themoviedb.org/3",
  headers: {
    // Caso a variável de ambiente falhe, envia uma string vazia para evitar erros de concatenação
    Authorization: `Bearer ${process.env.TMDB_API_KEY || ""}`,
    "Content-type": "application/json",
  },
});

export default tmdbApi;