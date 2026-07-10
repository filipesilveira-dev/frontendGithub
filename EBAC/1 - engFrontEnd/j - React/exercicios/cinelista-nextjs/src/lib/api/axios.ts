// Arquivo criado para receber uma instância de axios com configurações padrão para realizar uma requisição. Dessa forma, não será necessário a cada requisição repetir isso
import axios from "axios";

// Perceba que são os dados necessários nas requisições. Para realizar um GET, por exemplo, basta utilizar tmdbApi.get("/api"), ao invés de escrever tudo toda vez.
const tmdbApi = axios.create({
  // o "process.env" serve para utilizar a variável criada localmente sem expor no github
  baseURL: process.env.TMDB_API_URL || "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
  // Injeta automaticamente a chave v3 curta como query param em todas as rotas (?api_key=...)
  params: {
    api_key: process.env.TMDB_API_KEY || "",
  },
});

export default tmdbApi;
