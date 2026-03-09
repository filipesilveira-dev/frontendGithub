// Arquivo criado para receber uma instância de axios com configurações padrão para realizar uma requisição. Dessa forma, não será necessário a cada requisição repetir isso
import axios from "axios";

// Perceba que são os dados necessários nas requisições. Para realizar um GET, por exemplo, basta utilizar tmdbApi.get("/api"), ao invés de escrever tudo toda vez.
const tmdbApi= axios.create({
    // o "process.env" serve para utilizar a variável criada localmente sem expor no github
    baseURL: process.env.TMDB_API_URL,
    headers: {
        // ** Dado sensível **
        // Caso seja escrito aqui, esse dado ficará exposto.
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        "Content-type": 'application/json'
    }
});

export default tmdbApi;