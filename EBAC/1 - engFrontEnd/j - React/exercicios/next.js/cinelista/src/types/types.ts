// No caso do uso de uma API, é necessário adequar os dados da tipagem. Olhe as propriedades da API e adeque com o que estiver aqui. Como está sendo utilizada a do TMDB, então:

// Antes
// export interface Filme {
//     id: string;
//     title: string;
//     imagem: string;
//     description: string;
// }

// Depois
export interface Filme {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}
